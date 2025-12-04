
import React from 'react';
import { LESSONS, ICONS } from '../constants';
import { speakChinese } from '../utils/sound';
import { ArrowLeft, Volume2 } from 'lucide-react';
import { TTSConfig } from '../types';

interface PhrasebookProps {
  onBack: () => void;
  showPinyin: boolean;
  ttsConfig: TTSConfig;
}

export const Phrasebook: React.FC<PhrasebookProps> = ({ onBack, showPinyin, ttsConfig }) => {
  return (
    <div className="flex flex-col h-full bg-[#f7f7f7]">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-10 p-4 flex items-center gap-4 shadow-sm">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-slate-700">Emergency Phrasebook</h1>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-8 pb-20">
        {LESSONS.map((lesson) => {
          const Icon = ICONS[lesson.icon];
          
          // Filter exercises that have a correct answer (sentences), excluding pure matching vocab unless it has a sentence structure
          const phrases = lesson.exercises.filter(ex => ex.correctAnswer && ex.translation);

          if (phrases.length === 0) return null;

          return (
            <div key={lesson.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className={`bg-${lesson.color}-100 p-4 flex items-center gap-3 border-b border-${lesson.color}-200`}>
                <div className={`p-2 bg-white rounded-lg text-${lesson.color}-500 shadow-sm`}>
                  <Icon size={24} />
                </div>
                <h2 className={`font-bold text-${lesson.color}-800 text-lg`}>{lesson.title}</h2>
              </div>
              
              <div className="divide-y divide-slate-100">
                {phrases.map((phrase) => (
                  <button
                    key={phrase.id}
                    onClick={() => speakChinese(phrase.correctAnswer || '', ttsConfig)}
                    className="w-full text-left p-4 hover:bg-slate-50 transition-colors flex items-start gap-4 group"
                  >
                    <div className="flex-1 space-y-1">
                      <p className="font-bold text-slate-800 text-lg leading-relaxed">
                        {phrase.correctAnswer}
                      </p>
                      {showPinyin && (
                        <p className="text-sm text-blue-600 font-medium">
                          {phrase.pinyin}
                        </p>
                      )}
                      <p className="text-sm text-slate-500 italic">
                        {phrase.translation}
                      </p>
                    </div>
                    <div className="text-slate-300 group-hover:text-blue-500 transition-colors pt-1">
                      <Volume2 size={20} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
        
        <div className="text-center p-8 text-slate-400 text-sm">
          Tap any phrase to hear the pronunciation.
        </div>
      </div>
    </div>
  );
};
