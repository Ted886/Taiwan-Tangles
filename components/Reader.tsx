
import React, { useState, useEffect } from 'react';
import { Article, TTSConfig } from '../types';
import { ArrowLeft, BookOpen, Volume2, Type, Languages, Dumbbell } from 'lucide-react';
import { getTTSUrl, stopAllAudio } from '../utils/sound';

interface ReaderProps {
  article: Article;
  onBack: () => void;
  onOpenExercises: () => void;
  showPinyinInitial: boolean;
  ttsConfig: TTSConfig;
}

export const Reader: React.FC<ReaderProps> = ({ article, onBack, onOpenExercises, showPinyinInitial, ttsConfig }) => {
  const [currentSentenceIdx, setCurrentSentenceIdx] = useState<number | null>(null);
  const [showPinyin, setShowPinyin] = useState(showPinyinInitial);
  const [showTranslation, setShowTranslation] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [audio]);

  const playSentence = (idx: number) => {
    // 1. Cleanup previous
    stopAllAudio(); // Global cleanup (utils/sound)
    if (audio) {
      audio.pause();
    }

    const sentence = article.content[idx];
    const url = getTTSUrl(sentence.cn, ttsConfig);
    
    if (!url) return;

    const newAudio = new Audio(url);
    
    // Adjust speed based on provider
    if (ttsConfig.provider === 'google') {
       newAudio.playbackRate = 1.1; 
    } else {
       newAudio.playbackRate = 1.0;
    }

    setCurrentSentenceIdx(idx);
    setAudio(newAudio);

    newAudio.onended = () => {
      setCurrentSentenceIdx(null);
    };

    newAudio.play().catch(e => console.error("Playback failed", e));
  };

  const renderClause = (sentence: { cn: string; pinyin: string; en: string; isNewParagraph?: boolean }, sIdx: number) => {
    const isPlaying = currentSentenceIdx === sIdx;
    
    return (
      <span 
        key={sIdx} 
        className={`
            inline-block rounded-lg transition-all cursor-pointer mr-1 mb-2 px-1 py-1 align-baseline
            ${isPlaying ? 'bg-yellow-200 text-slate-900 shadow-sm' : 'hover:bg-slate-100'}
            ${sentence.isNewParagraph ? 'mt-4 block w-full' : ''}
        `}
        onClick={(e) => {
            e.stopPropagation();
            playSentence(sIdx);
        }}
      >
        <div className="flex flex-col items-center">
             {/* Pinyin (Ruby-style) */}
            {showPinyin && (
                <span className="text-xs text-blue-600 font-medium mb-0.5 select-none">
                    {sentence.pinyin}
                </span>
            )}
            
            {/* Chinese Text */}
            <span className="text-xl md:text-2xl font-serif leading-normal">
                {sentence.cn}
            </span>
        </div>
      </span>
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#f7f7f7]">
       {/* Sticky Translation Header */}
       {showTranslation && currentSentenceIdx !== null && (
         <div className="bg-slate-800 text-white p-4 sticky top-[60px] z-20 shadow-lg animate-slideDown">
            <p className="text-center font-medium">
                {article.content[currentSentenceIdx].en}
            </p>
         </div>
       )}

      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-30 p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
            <button 
                onClick={onBack}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
            >
                <ArrowLeft size={24} />
            </button>
            <h1 className="text-lg font-bold text-slate-700 truncate max-w-[150px] sm:max-w-xs">{article.title}</h1>
        </div>
        
        <div className="flex items-center gap-2">
           <button 
             onClick={onOpenExercises}
             className="p-2 rounded-xl bg-amber-100 text-amber-600 border-2 border-amber-200 hover:bg-amber-200"
             title="Vocab Exercises"
           >
             <Dumbbell size={20} />
           </button>
           <button 
             onClick={() => setShowTranslation(!showTranslation)}
             className={`p-2 rounded-xl border-2 transition-colors ${showTranslation ? 'bg-green-100 text-green-600 border-green-200' : 'bg-slate-100 text-slate-400 border-slate-200'}`}
             title="Toggle Translation"
           >
             <Languages size={20} />
           </button>
           <button 
             onClick={() => setShowPinyin(!showPinyin)}
             className={`p-2 rounded-xl border-2 transition-colors ${showPinyin ? 'bg-blue-100 text-blue-600 border-blue-200' : 'bg-slate-100 text-slate-400 border-slate-200'}`}
             title="Toggle Pinyin"
           >
             <Type size={20} />
           </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 pb-32">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            <div className="flex flex-wrap items-baseline content-start text-slate-800">
                {article.content.map((s, idx) => renderClause(s, idx))}
            </div>
        </div>
        <div className="h-20"></div>
      </div>
    </div>
  );
};
