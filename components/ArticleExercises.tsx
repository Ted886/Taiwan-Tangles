
import React, { useState, useEffect } from 'react';
import { Article, TTSConfig } from '../types';
import { Button } from './ui/Button';
import { playSound, speakChinese } from '../utils/sound';
import { X, Check } from 'lucide-react';

interface ArticleExercisesProps {
  article: Article;
  onExit: () => void;
  showPinyin: boolean;
  ttsConfig: TTSConfig;
}

export const ArticleExercises: React.FC<ArticleExercisesProps> = ({ article, onExit, showPinyin, ttsConfig }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState<Set<string>>(new Set());
  const [selectedMatchCard, setSelectedMatchCard] = useState<{val: string, type: 'word'|'mean'} | null>(null);
  const [wrongMatch, setWrongMatch] = useState<string | null>(null);
  const [shuffledPairs, setShuffledPairs] = useState<{val: string, type: 'word'|'mean', pairId: number}[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  // We group vocab into sets of 4 to prevent overwhelming matching grids
  const VOCAB_CHUNK_SIZE = 4;
  const chunkIndex = Math.floor(currentIndex / VOCAB_CHUNK_SIZE);
  
  useEffect(() => {
    // Generate current chunk of vocab
    const start = currentIndex * VOCAB_CHUNK_SIZE;
    const chunk = article.vocab.slice(start, start + VOCAB_CHUNK_SIZE);
    
    if (chunk.length === 0) {
        setIsComplete(true);
        return;
    }

    const items = chunk.map((v, idx) => ({ val: v.word, type: 'word' as const, pairId: idx, pinyin: v.pinyin }));
    const definitions = chunk.map((v, idx) => ({ val: v.meaning, type: 'mean' as const, pairId: idx }));
    
    const allCards = [...items, ...definitions];
    
    // Shuffle
    for (let i = allCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
    }
    
    setShuffledPairs(allCards);
    setMatches(new Set());
    setSelectedMatchCard(null);
  }, [currentIndex, article.vocab]);

  const handleMatchClick = (card: {val: string, type: 'word'|'mean', pairId: number, pinyin?: string}) => {
    if (matches.has(card.val)) return;
    if (selectedMatchCard?.val === card.val) {
        setSelectedMatchCard(null);
        return;
    }
    
    playSound('click');
    if (card.type === 'word') speakChinese(card.val, ttsConfig);

    if (!selectedMatchCard) {
        setSelectedMatchCard(card);
    } else {
        if (selectedMatchCard.pairId === card.pairId && selectedMatchCard.type !== card.type) {
            // Correct
            playSound('correct');
            setMatches(prev => new Set([...prev, selectedMatchCard.val, card.val]));
            setSelectedMatchCard(null);

            // Check if chunk complete
            if (matches.size + 2 >= shuffledPairs.length) {
                setTimeout(() => {
                    const nextIdx = currentIndex + 1;
                    if (nextIdx * VOCAB_CHUNK_SIZE >= article.vocab.length) {
                        setIsComplete(true);
                    } else {
                        setCurrentIndex(nextIdx);
                    }
                }, 1000);
            }
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

  if (isComplete) {
      return (
        <div className="flex flex-col items-center justify-center h-full bg-white p-8 gap-8">
            <h2 className="text-3xl font-bold text-slate-800">Vocab Mastered!</h2>
            <p className="text-slate-500">You've reviewed all the key words for this article.</p>
            <Button onClick={onExit}>Return to Article</Button>
        </div>
      );
  }

  return (
    <div className="flex flex-col h-full bg-[#f7f7f7]">
        <div className="p-4 flex items-center justify-between bg-white shadow-sm z-10">
            <h2 className="font-bold text-slate-700">Vocab Practice ({Math.min((currentIndex + 1) * VOCAB_CHUNK_SIZE, article.vocab.length)}/{article.vocab.length})</h2>
            <button onClick={onExit}><X className="text-slate-400" /></button>
        </div>

        <div className="flex-1 flex items-center justify-center p-4">
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                <style>{`
                    @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                    }
                    .animate-shake { animation: shake 0.3s ease-in-out; }
                `}</style>
                {shuffledPairs.map((card, idx) => {
                    const isMatched = matches.has(card.val);
                    const isSelected = selectedMatchCard?.val === card.val;
                    const isWrong = wrongMatch === card.val;

                    if (isMatched) return <div key={idx} className="h-24 opacity-0" />;

                    return (
                        <button
                            key={idx}
                            onClick={() => handleMatchClick(card)}
                            className={`
                                h-24 rounded-xl border-b-4 font-bold text-center p-2 flex flex-col items-center justify-center transition-all
                                ${isSelected 
                                    ? 'border-blue-500 bg-blue-100 text-blue-800 translate-y-1 border-b-0' 
                                    : 'border-slate-300 bg-white text-slate-700 shadow-sm active:translate-y-1 active:border-b-0'}
                                ${isWrong ? 'animate-shake border-red-500 bg-red-100 text-red-800' : ''}
                            `}
                        >
                            <span className="text-lg">{card.val}</span>
                            {card.type === 'word' && showPinyin && (
                                <span className="text-xs text-blue-500 font-normal mt-1">
                                    {/* Find pinyin from vocab list safely if not in card obj */
                                     (card as any).pinyin || ''}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    </div>
  );
};
