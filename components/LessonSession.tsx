
import React, { useState, useEffect } from 'react';
import { Exercise, Lesson, TTSConfig } from '../types';
import { Button } from './ui/Button';
import { playSound, speakChinese } from '../utils/sound';
import { X, Check, Volume2 } from 'lucide-react';

interface LessonSessionProps {
  lesson: Lesson;
  onComplete: (score: number) => void;
  onExit: () => void;
  loseHeart: () => void;
  hearts: number;
  showPinyin: boolean;
  ttsConfig: TTSConfig;
}

export const LessonSession: React.FC<LessonSessionProps> = ({ lesson, onComplete, onExit, loseHeart, hearts, showPinyin, ttsConfig }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  // Sentence Assembly State
  const [assembledSentence, setAssembledSentence] = useState<string[]>([]);
  const [shuffledSegments, setShuffledSegments] = useState<string[]>([]);
  
  // Matching State
  const [matches, setMatches] = useState<Set<string>>(new Set()); // Set of matched values
  const [selectedMatchCard, setSelectedMatchCard] = useState<{val: string, type: 'item'|'match'} | null>(null);
  const [shuffledPairs, setShuffledPairs] = useState<{val: string, type: 'item'|'match', pairId: number}[]>([]);
  const [wrongMatch, setWrongMatch] = useState<string | null>(null);

  const [isCheckDisabled, setIsCheckDisabled] = useState(true);
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const currentExercise = lesson.exercises[currentIndex];

  // Helper to detect Chinese characters for TTS
  const isChinese = (text: string) => /[\u4e00-\u9fa5]/.test(text);

  useEffect(() => {
    // Reset state for new exercise
    setSelectedOption(null);
    setStatus('idle');
    setIsCheckDisabled(true);
    setMatches(new Set());
    setSelectedMatchCard(null);
    setWrongMatch(null);

    // Setup Assembly
    if (currentExercise.type === 'assemble_sentence' || currentExercise.type === 'translate_en_to_cn') {
       const initialAssembly = currentExercise.prefilled ? [...currentExercise.prefilled] : [];
       setAssembledSentence(initialAssembly);

       // Combine correct segments with distractors
       const correctSegments = currentExercise.segments || (currentExercise.options || []);
       const distractors = currentExercise.distractors || [];
       const bankSource = [...correctSegments, ...distractors];

       // Fisher-Yates shuffle
        for (let i = bankSource.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [bankSource[i], bankSource[j]] = [bankSource[j], bankSource[i]];
        }
       setShuffledSegments(bankSource);
    }

    // Setup Matching
    if (currentExercise.type === 'matching' && currentExercise.pairs) {
        const items = currentExercise.pairs.map((p, idx) => ({ val: p.item, type: 'item' as const, pairId: idx }));
        const matches = currentExercise.pairs.map((p, idx) => ({ val: p.match, type: 'match' as const, pairId: idx }));
        const allCards = [...items, ...matches];
        // Shuffle cards
        for (let i = allCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
        }
        setShuffledPairs(allCards);
    }
    
  }, [currentIndex, currentExercise]);

  // Validation Logic Update
  useEffect(() => {
    if (currentExercise.type === 'multiple_choice' || currentExercise.type === 'dialogue') {
      setIsCheckDisabled(!selectedOption);
    } else if (currentExercise.type === 'matching') {
      const totalPairs = currentExercise.pairs?.length || 0;
      setIsCheckDisabled(matches.size < totalPairs * 2);
    } else {
      // Assembly
      const minLen = currentExercise.prefilled?.length || 0;
      setIsCheckDisabled(assembledSentence.length <= minLen);
    }
  }, [selectedOption, assembledSentence, matches, currentExercise]);

  const handleCheck = () => {
    let isCorrect = false;

    if (currentExercise.type === 'multiple_choice' || currentExercise.type === 'dialogue') {
      // Robust check ignoring surrounding whitespace
      isCorrect = selectedOption?.trim() === currentExercise.correctAnswer?.trim();
    } else if (currentExercise.type === 'matching') {
        isCorrect = true; // If button is enabled, they matched everything
    } else {
      const userAnswer = assembledSentence.join('');
      // Standardize for comparison
      isCorrect = userAnswer.replace(/\s/g, '') === (currentExercise.correctAnswer || '').replace(/\s/g, '');
    }

    if (isCorrect) {
      setStatus('correct');
      playSound('correct');
      // Ensure we play the full correct sentence audio
      const answerToSpeak = currentExercise.correctAnswer || '';
      if (answerToSpeak && isChinese(answerToSpeak)) {
          // Small timeout to ensure 'correct' sound doesn't completely block it if on same channel
          setTimeout(() => speakChinese(answerToSpeak, ttsConfig), 100);
      }
    } else {
      setStatus('wrong');
      playSound('wrong');
      loseHeart();
    }
  };

  const handleContinue = () => {
    if (status === 'wrong' && hearts <= 0) {
      onExit();
      return;
    }

    if (currentIndex < lesson.exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete(100); 
    }
  };

  // --- RENDERERS ---

  const renderMultipleChoice = () => (
    <div className="space-y-4 w-full max-w-md">
      {currentExercise.options?.map((opt, idx) => (
        <div
          key={idx}
          onClick={() => {
              if (status !== 'idle') return;
              setSelectedOption(opt);
              if (isChinese(opt)) speakChinese(opt, ttsConfig);
              playSound('click');
          }}
          className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
            selectedOption === opt
              ? 'bg-blue-100 border-blue-500 text-blue-700'
              : 'border-slate-200 hover:bg-slate-50'
          }`}
        >
          {opt}
        </div>
      ))}
    </div>
  );

  const renderDialogue = () => (
    <div className="w-full max-w-md space-y-6">
        <div className="space-y-4">
            {currentExercise.dialogueLines?.map((line, idx) => (
                <div key={idx} className={`flex ${line.speaker === 'me' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl ${
                        line.speaker === 'me' 
                        ? 'bg-blue-500 text-white rounded-br-none' 
                        : 'bg-slate-200 text-slate-800 rounded-bl-none'
                    }`}>
                        <p>{line.text}</p>
                    </div>
                </div>
            ))}
            <div className="flex justify-end">
                <div className="max-w-[80%] p-4 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 text-slate-400 rounded-br-none">
                    <p>{selectedOption || "..."}</p>
                </div>
            </div>
        </div>
        
        <div className="grid grid-cols-1 gap-2 pt-4 border-t border-slate-100">
            {currentExercise.options?.map((opt, idx) => (
                 <button
                 key={idx}
                 onClick={() => {
                     if (status !== 'idle') return;
                     setSelectedOption(opt);
                     if (isChinese(opt)) speakChinese(opt, ttsConfig);
                     playSound('click');
                 }}
                 className={`p-3 border-2 rounded-xl text-left transition-all ${
                   selectedOption === opt
                     ? 'bg-blue-100 border-blue-500 text-blue-700'
                     : 'bg-white border-slate-200 hover:bg-slate-50'
                 }`}
               >
                 {opt}
               </button>
            ))}
        </div>
    </div>
  );

  const renderAssembly = () => {
    const prefilledCount = currentExercise.prefilled?.length || 0;

    return (
      <div className="w-full max-w-xl space-y-8">
        {/* Answer Area */}
        <div className="min-h-[80px] border-b-2 border-slate-200 flex flex-wrap gap-2 items-center justify-center p-4">
          {assembledSentence.map((word, idx) => {
            const isPrefilled = idx < prefilledCount;
            return (
              <button
                key={`assembled-${idx}`}
                disabled={isPrefilled}
                onClick={() => {
                  if (status !== 'idle' || isPrefilled) return;
                  if (isChinese(word)) speakChinese(word, ttsConfig);
                  setAssembledSentence(prev => prev.filter((_, i) => i !== idx));
                  setShuffledSegments(prev => [...prev, word]);
                  playSound('click');
                }}
                className={`
                  border-2 px-3 py-2 rounded-lg text-lg font-medium shadow-sm
                  ${isPrefilled 
                    ? 'bg-slate-100 border-slate-300 text-slate-500 cursor-default' 
                    : 'bg-white border-slate-200 hover:bg-red-50 text-slate-800'
                  }
                `}
              >
                {word}
              </button>
            );
          })}
        </div>
  
        {/* Word Bank */}
        <div className="flex flex-wrap gap-2 justify-center">
          {shuffledSegments.map((word, idx) => (
            <button
              key={`bank-${idx}`}
              onClick={() => {
                if (status !== 'idle') return;
                if (isChinese(word)) speakChinese(word, ttsConfig);
                setShuffledSegments(prev => prev.filter((_, i) => i !== idx));
                setAssembledSentence(prev => [...prev, word]);
                playSound('click');
              }}
              className="bg-white border border-slate-300 shadow-[0_2px_0_0_rgba(0,0,0,0.1)] active:shadow-none active:translate-y-[2px] px-4 py-2 rounded-xl text-lg font-medium transition-all hover:bg-slate-50 text-slate-700"
            >
              {word}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const handleMatchClick = (card: {val: string, type: 'item'|'match', pairId: number}) => {
      if (status !== 'idle') return;
      if (matches.has(card.val)) return; // Already matched
      if (selectedMatchCard?.val === card.val) {
          setSelectedMatchCard(null); // Deselect
          return;
      }
      
      playSound('click');
      if (isChinese(card.val)) speakChinese(card.val, ttsConfig);

      if (!selectedMatchCard) {
          setSelectedMatchCard(card);
      } else {
          // Check match
          if (selectedMatchCard.pairId === card.pairId && selectedMatchCard.type !== card.type) {
              // Match found
              playSound('correct');
              setMatches(prev => new Set([...prev, selectedMatchCard.val, card.val]));
              setSelectedMatchCard(null);
          } else {
              // Wrong
              playSound('wrong');
              setWrongMatch(card.val);
              setTimeout(() => {
                  setWrongMatch(null);
                  setSelectedMatchCard(null);
              }, 500);
          }
      }
  };

  const renderMatching = () => (
      <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
          {shuffledPairs.map((card, idx) => {
              const isMatched = matches.has(card.val);
              const isSelected = selectedMatchCard?.val === card.val;
              const isWrong = wrongMatch === card.val;

              if (isMatched) return <div key={idx} className="h-20" />; // Invisible spacer

              return (
                <button
                    key={idx}
                    onClick={() => handleMatchClick(card)}
                    className={`
                        h-20 rounded-xl border-2 font-bold text-center p-2 flex items-center justify-center transition-all
                        ${isSelected ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 bg-white text-slate-700 shadow-sm'}
                        ${isWrong ? 'animate-shake border-red-500 bg-red-50 text-red-700' : ''}
                        hover:bg-slate-50
                    `}
                >
                    {card.val}
                </button>
              );
          })}
      </div>
  );

  return (
    <div className="flex flex-col h-full bg-white max-w-2xl mx-auto w-full relative">
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.3s ease-in-out; }
      `}</style>

      {/* Header */}
      <div className="p-4 flex items-center gap-4">
        <button onClick={onExit} className="text-slate-400 hover:text-slate-600">
          <X size={24} />
        </button>
        <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex) / lesson.exercises.length) * 100}%` }}
          />
        </div>
        <div className="text-red-500 font-bold flex items-center gap-1">
           ❤️ {hearts}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-8 overflow-y-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-700 text-center">
          {currentExercise.question}
        </h2>

        {currentExercise.type === 'multiple_choice' && renderMultipleChoice()}
        {(currentExercise.type === 'assemble_sentence' || currentExercise.type === 'translate_en_to_cn') && renderAssembly()}
        {currentExercise.type === 'matching' && renderMatching()}
        {currentExercise.type === 'dialogue' && renderDialogue()}
      </div>

      {/* Footer / Feedback */}
      <div className={`p-4 border-t-2 ${
        status === 'correct' ? 'bg-green-100 border-green-200' : 
        status === 'wrong' ? 'bg-red-100 border-red-200' : 'bg-white border-slate-100'
      }`}>
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            
            {status === 'idle' && (
                <Button 
                    fullWidth 
                    onClick={handleCheck} 
                    disabled={isCheckDisabled}
                >
                    CHECK
                </Button>
            )}

            {status === 'correct' && (
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-green-500 text-white p-2 rounded-full hidden md:block">
                            <Check size={32} />
                        </div>
                        <div>
                            <h3 className="text-green-800 font-bold text-xl">Nicely done!</h3>
                            <p className="text-green-700">{currentExercise.explanation}</p>
                            {showPinyin && <p className="text-green-600 text-sm mt-1">{currentExercise.pinyin}</p>}
                        </div>
                    </div>
                    <Button onClick={handleContinue} className="md:w-auto w-full bg-green-600 border-green-800">
                        CONTINUE
                    </Button>
                </div>
            )}

            {status === 'wrong' && (
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-red-500 text-white p-2 rounded-full hidden md:block">
                            <X size={32} />
                        </div>
                        <div>
                            <h3 className="text-red-800 font-bold text-xl">Correct Solution:</h3>
                            <p className="text-red-700 font-medium text-lg">{currentExercise.correctAnswer || currentExercise.translation}</p>
                            <p className="text-red-600">{currentExercise.explanation}</p>
                        </div>
                    </div>
                    <Button onClick={handleContinue} variant="danger" className="md:w-auto w-full">
                        CONTINUE
                    </Button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};
