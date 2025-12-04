
import React from 'react';
import { LESSONS, ICONS } from '../constants';
import { UserState, Lesson } from '../types';
import { Check, Star, Lock, Book, Newspaper, Settings } from 'lucide-react';
import { playSound } from '../utils/sound';

interface LessonMapProps {
  userState: UserState;
  onSelectLesson: (id: string) => void;
  onTogglePinyin: () => void;
  onOpenPhrasebook: () => void;
  onOpenReader: () => void;
  onOpenSettings: () => void;
}

// Map Tailwind color names to Hex values for inline styles because
// Tailwind CDN cannot scan dynamic template strings (e.g., bg-${color}-500).
const COLOR_MAP: Record<string, { bg: string, border: string }> = {
  emerald: { bg: '#10b981', border: '#047857' },
  amber:   { bg: '#f59e0b', border: '#b45309' },
  blue:    { bg: '#3b82f6', border: '#1d4ed8' },
  rose:    { bg: '#f43f5e', border: '#be123c' },
  indigo:  { bg: '#6366f1', border: '#4338ca' },
  violet:  { bg: '#8b5cf6', border: '#6d28d9' },
  orange:  { bg: '#f97316', border: '#c2410c' },
  teal:    { bg: '#14b8a6', border: '#0f766e' },
  cyan:    { bg: '#06b6d4', border: '#0e7490' },
  purple:  { bg: '#a855f7', border: '#7e22ce' },
  red:     { bg: '#ef4444', border: '#b91c1c' },
  pink:    { bg: '#ec4899', border: '#be185d' },
  lime:    { bg: '#84cc16', border: '#4d7c0f' },
};

export const LessonMap: React.FC<LessonMapProps> = ({ userState, onSelectLesson, onTogglePinyin, onOpenPhrasebook, onOpenReader, onOpenSettings }) => {
  return (
    <div className="flex-1 overflow-y-auto pb-20 bg-[#fffdf7]">
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-10 p-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
            <span className="text-2xl">🇹🇼</span>
            <span className="font-bold text-slate-400 tracking-widest uppercase hidden sm:inline">Taiwan Tangles</span>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
           <button
             onClick={onOpenReader}
             className="p-2 rounded-xl bg-green-100 text-green-600 border-2 border-green-200 hover:bg-green-200 transition-colors"
             title="News Reader"
           >
             <Newspaper size={20} />
           </button>

           <button
             onClick={onOpenPhrasebook}
             className="p-2 rounded-xl bg-indigo-100 text-indigo-600 border-2 border-indigo-200 hover:bg-indigo-200 transition-colors"
             title="Phrasebook"
           >
             <Book size={20} />
           </button>

           <button 
             onClick={onTogglePinyin}
             className={`px-3 py-1.5 rounded-xl font-bold text-xs border-2 transition-colors ${userState.showPinyin ? 'bg-blue-100 text-blue-600 border-blue-200' : 'bg-slate-100 text-slate-400 border-slate-200'}`}
           >
             PY
           </button>

           <button
             onClick={onOpenSettings}
             className="p-2 rounded-xl bg-slate-100 text-slate-600 border-2 border-slate-200 hover:bg-slate-200 transition-colors"
             title="Audio Settings"
           >
             <Settings size={20} />
           </button>

           <div className="hidden md:flex items-center gap-1 pl-2">
             <span className="text-amber-500"><Star fill="currentColor" size={20} /></span>
             <span className="font-bold text-amber-500">{userState.xp}</span>
           </div>
           <div className="flex items-center gap-1 pl-2">
             <span className="text-red-500 font-bold text-xl">❤️ {userState.hearts}</span>
           </div>
        </div>
      </header>

      <div className="max-w-md mx-auto py-12 px-4 flex flex-col items-center gap-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-700 mb-2">Intermediate Taiwanese Mandarin</h1>
          <p className="text-slate-500">Master the art of polite conflict resolution.</p>
        </div>

        {LESSONS.map((lesson, index) => {
          const isCompleted = userState.completedLessons.includes(lesson.id);
          const Icon = ICONS[lesson.icon];
          const colors = COLOR_MAP[lesson.color] || COLOR_MAP.emerald;

          return (
            <div key={lesson.id} className="relative flex flex-col items-center group">
              
              {/* Floating Label on Hover */}
              <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-white border-2 border-slate-200 px-4 py-2 rounded-xl shadow-lg z-20 whitespace-nowrap pointer-events-none mb-2">
                <span className="font-bold text-slate-700">{lesson.title}</span>
                <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-slate-200 rotate-45"></div>
              </div>

              <button
                onClick={() => {
                  playSound('click');
                  onSelectLesson(lesson.id);
                }}
                style={{
                  backgroundColor: isCompleted ? '#fbbf24' : colors.bg,
                  borderColor: isCompleted ? '#d97706' : colors.border,
                }}
                className={`
                   w-24 h-24 rounded-full flex items-center justify-center 
                   border-b-[6px] active:border-b-0 active:translate-y-[6px]
                   transition-all duration-100 relative
                `}
              >
                 {isCompleted ? (
                   <Check size={40} className="text-white/80" strokeWidth={4} />
                 ) : (
                   <Icon size={40} className="text-white" strokeWidth={2.5} />
                 )}
                 
                 {/* Shine effect */}
                 <div className="absolute top-2 left-4 w-6 h-3 bg-white/30 rounded-full -rotate-45"></div>
              </button>
            </div>
          );
        })}
        
        <div className="mt-8 p-6 bg-slate-100 rounded-2xl text-center w-full">
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">More coming soon</p>
        </div>
      </div>
    </div>
  );
};
