

export type ExerciseType = 'translate_en_to_cn' | 'assemble_sentence' | 'multiple_choice' | 'matching' | 'dialogue';

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string; // The prompt shown to the user
  correctAnswer?: string; // For checking text-based answers
  segments?: string[]; // For sentence assembly (correct words)
  distractors?: string[]; // Incorrect words mixed into the bank
  prefilled?: string[]; // Fixed words at the start of the sentence
  options?: string[]; // For multiple choice
  
  // For Matching
  pairs?: { item: string; match: string }[]; 
  
  // For Dialogue
  dialogueLines?: { speaker: 'me' | 'other'; text: string }[]; // Context before the question

  pinyin?: string;
  translation?: string; // The English meaning
  explanation?: string; // Cultural context or grammar note
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  color: string; // Tailwind color class base (e.g., 'green', 'red')
  exercises: Exercise[];
}

export interface ArticleSentence {
  cn: string;
  pinyin: string;
  en: string;
  isNewParagraph?: boolean; // New field for formatting
}

export interface Article {
  id: string;
  title: string;
  source: string;
  content: ArticleSentence[];
  vocab: { word: string; pinyin: string; meaning: string }[];
}

export type AppView = 'home' | 'lesson' | 'summary' | 'phrasebook' | 'reader' | 'article_exercise';

// Simplified to just Google (Primary) and OS (Fallback)
export type TTSProvider = 'google' | 'os';

export interface TTSConfig {
  provider: TTSProvider;
}

export interface UserState {
  hearts: number;
  xp: number;
  completedLessons: string[];
  currentLessonId: string | null;
  currentArticleId: string | null;
  showPinyin: boolean;
  ttsConfig: TTSConfig;
}