


import React, { useState, useEffect } from 'react';
import { LESSONS, ARTICLES, INITIAL_HEARTS } from './constants';
import { UserState, AppView, TTSConfig } from './types';
import { LessonMap } from './components/LessonMap';
import { LessonSession } from './components/LessonSession';
import { Phrasebook } from './components/Phrasebook';
import { Reader } from './components/Reader';
import { ArticleExercises } from './components/ArticleExercises';
import { SettingsModal } from './components/SettingsModal';
import { Button } from './components/ui/Button';
import { playSound } from './utils/sound';
import { Frown, Trophy } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<AppView>('home');
  const [showSettings, setShowSettings] = useState(false);
  const [userState, setUserState] = useState<UserState>(() => {
    const saved = localStorage.getItem('taiwan-tangles-state');
    
    // Default to Google as preferred by user
    const DEFAULT_CONFIG: TTSConfig = { 
      provider: 'google'
    };

    const defaultState: UserState = {
      hearts: INITIAL_HEARTS,
      xp: 0,
      completedLessons: [],
      currentLessonId: null,
      currentArticleId: null,
      showPinyin: true,
      ttsConfig: DEFAULT_CONFIG
    };

    if (saved) {
        const parsed = JSON.parse(saved);
        
        // Migration: Reset to Google if older config exists or migration needed
        if (!parsed.ttsConfig || parsed.ttsConfig.provider !== 'google') {
           return { ...parsed, ttsConfig: DEFAULT_CONFIG };
        }

        return parsed;
    }
    return defaultState;
  });
  
  const [sessionScore, setSessionScore] = useState(0);

  useEffect(() => {
    localStorage.setItem('taiwan-tangles-state', JSON.stringify(userState));
  }, [userState]);

  const handleSelectLesson = (id: string) => {
    if (userState.hearts <= 0) {
      alert("You need hearts to start a lesson!");
      return;
    }
    setUserState(prev => ({ ...prev, currentLessonId: id }));
    setView('lesson');
  };

  const handleLessonComplete = (score: number) => {
    playSound('correct');
    setSessionScore(score);
    
    setUserState(prev => {
      const isNewCompletion = prev.currentLessonId && !prev.completedLessons.includes(prev.currentLessonId);
      return {
        ...prev,
        xp: prev.xp + 10 + (score > 90 ? 5 : 0),
        completedLessons: isNewCompletion && prev.currentLessonId 
          ? [...prev.completedLessons, prev.currentLessonId] 
          : prev.completedLessons,
        currentLessonId: null
      };
    });
    
    setView('summary');
  };

  const loseHeart = () => {
    setUserState(prev => {
      const newHearts = Math.max(0, prev.hearts - 1);
      return { ...prev, hearts: newHearts };
    });
  };

  const togglePinyin = () => {
    setUserState(prev => ({ ...prev, showPinyin: !prev.showPinyin }));
  };

  const handleOpenReader = () => {
      // Default to the first article for now
      setUserState(prev => ({ ...prev, currentArticleId: ARTICLES[0].id }));
      setView('reader');
  };

  const saveSettings = (config: TTSConfig) => {
    setUserState(prev => ({ ...prev, ttsConfig: config }));
  };

  useEffect(() => {
    if (view === 'lesson' && userState.hearts === 0) {
      setView('summary');
    }
  }, [userState.hearts, view]);

  const renderSummary = () => {
    const isSuccess = userState.hearts > 0;
    
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white p-6 text-center space-y-8">
        <div className="space-y-4">
          {isSuccess ? (
            <>
              <div className="text-yellow-400 mx-auto w-32 h-32">
                <Trophy size={128} fill="currentColor" />
              </div>
              <h1 className="text-4xl font-extrabold text-yellow-500">Lesson Complete!</h1>
              <div className="flex justify-center gap-4 text-xl font-bold text-slate-600">
                <div className="bg-amber-100 px-6 py-3 rounded-xl border-2 border-amber-200">
                  +15 XP
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-red-400 mx-auto w-32 h-32">
                <Frown size={128} />
              </div>
              <h1 className="text-4xl font-extrabold text-slate-700">Out of Hearts</h1>
              <p className="text-slate-500 text-lg">Don't give up! Practice makes perfect.</p>
            </>
          )}
        </div>

        <Button 
            fullWidth 
            onClick={() => {
                if (userState.hearts === 0) {
                    setUserState(prev => ({...prev, hearts: 3}));
                }
                setView('home');
            }}
        >
          CONTINUE
        </Button>
      </div>
    );
  };

  return (
    <div className="h-screen w-full bg-[#f7f7f7] flex justify-center text-slate-700 overflow-hidden font-sans">
      <div className="w-full h-full max-w-lg bg-white shadow-2xl relative flex flex-col">
        {view === 'home' && (
          <LessonMap 
            userState={userState} 
            onSelectLesson={handleSelectLesson} 
            onTogglePinyin={togglePinyin}
            onOpenPhrasebook={() => setView('phrasebook')}
            onOpenReader={handleOpenReader}
            onOpenSettings={() => setShowSettings(true)}
          />
        )}
        
        {view === 'lesson' && userState.currentLessonId && (
          <LessonSession 
            lesson={LESSONS.find(l => l.id === userState.currentLessonId)!}
            onComplete={handleLessonComplete}
            onExit={() => setView('home')}
            loseHeart={loseHeart}
            hearts={userState.hearts}
            showPinyin={userState.showPinyin}
            ttsConfig={userState.ttsConfig}
          />
        )}

        {view === 'reader' && userState.currentArticleId && (
            <Reader 
                article={ARTICLES.find(a => a.id === userState.currentArticleId)!}
                onBack={() => setView('home')}
                showPinyinInitial={userState.showPinyin}
                onOpenExercises={() => setView('article_exercise')}
                ttsConfig={userState.ttsConfig}
            />
        )}

        {view === 'article_exercise' && userState.currentArticleId && (
            <ArticleExercises 
                article={ARTICLES.find(a => a.id === userState.currentArticleId)!}
                onExit={() => setView('reader')}
                showPinyin={userState.showPinyin}
                ttsConfig={userState.ttsConfig}
            />
        )}

        {view === 'summary' && renderSummary()}

        {view === 'phrasebook' && (
          <Phrasebook 
            onBack={() => setView('home')} 
            showPinyin={userState.showPinyin}
            ttsConfig={userState.ttsConfig} 
          />
        )}

        {showSettings && (
          <SettingsModal 
            config={userState.ttsConfig} 
            onSave={saveSettings} 
            onClose={() => setShowSettings(false)} 
          />
        )}
      </div>
    </div>
  );
}
