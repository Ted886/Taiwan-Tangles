
import { TTSConfig, TTSProvider } from '../types';

// Singleton AudioContext to prevent resource exhaustion and ensure reliability
let audioCtx: AudioContext | null = null;
let currentAudio: HTMLAudioElement | null = null;

// Global listener to stop all audio when the app goes into background or returns
if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    stopAllAudio();
  });
}

/**
 * Generates a URL for Google Translate TTS.
 */
export const getTTSUrl = (text: string, provider: TTSProvider, config?: TTSConfig): string | null => {
  const encoded = encodeURIComponent(text);

  switch (provider) {
    case 'google':
      // Google Translate (Unofficial) - Requires <meta name="referrer" content="no-referrer" />
      return `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=zh-TW&q=${encoded}`;

    case 'os':
    default:
      return null;
  }
};

// Deprecated export kept for backward compatibility if needed
export const getGoogleTTSUrl = (text: string) => {
  return getTTSUrl(text, 'google')!;
};

export const stopAllAudio = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

export const playSound = (type: 'correct' | 'wrong' | 'click') => {
  if (!audioCtx) {
    const Ctx = window.AudioContext || (window as any).webkitAudioContext;
    if (Ctx) {
      audioCtx = new Ctx();
    }
  }
  
  if (!audioCtx) return;
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(e => console.error("Audio resume failed", e));
  }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  
  const now = audioCtx.currentTime;

  if (type === 'correct') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(500, now);
    osc.frequency.exponentialRampToValueAtTime(1000, now + 0.1);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc.start(now);
    osc.stop(now + 0.3);
  } else if (type === 'wrong') {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.linearRampToValueAtTime(100, now + 0.3);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
    osc.start(now);
    osc.stop(now + 0.3);
  } else {
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, now);
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.start(now);
    osc.stop(now + 0.05);
  }
};

/**
 * Main entry point for playing Chinese text.
 * Strictly uses Google Translate (preferred) or OS fallback.
 */
export const speakChinese = async (text: string, config: TTSConfig) => {
  stopAllAudio();

  // Try Google First
  try {
      await attemptProvider(text, 'google', config);
      return; 
  } catch (e) {
      console.warn(`Google TTS failed, falling back to OS...`, e);
  }

  // Fallback to OS
  fallbackToOSTTS(text);
};

/**
 * Attempts to play audio using a specific provider.
 */
const attemptProvider = async (text: string, provider: TTSProvider, config: TTSConfig): Promise<void> => {
    
    const url = getTTSUrl(text, provider, config);
    if (!url) throw new Error(`Could not generate URL for ${provider}`);

    return new Promise((resolve, reject) => {
        const audio = new Audio(url);
        // Slightly faster for Google as it is naturally slow
        if (provider === 'google') audio.playbackRate = 1.2;
        else audio.playbackRate = 1.0;

        currentAudio = audio;

        const onPlay = () => {
            cleanup();
            resolve();
        };

        const onError = (e: Event | string) => {
            cleanup();
            reject(e);
        };

        const cleanup = () => {
            audio.removeEventListener('playing', onPlay);
            audio.removeEventListener('error', onError);
        };

        audio.addEventListener('playing', onPlay);
        audio.addEventListener('error', onError);

        // Verify network response via audio load
        audio.play().catch(err => {
            onError(err);
        });
    });
};

const fallbackToOSTTS = (text: string) => {
  if (!('speechSynthesis' in window)) return;
  
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  
  // Prioritize Taiwan Google voice if present in OS, otherwise any Taiwan voice
  const bestVoice = voices.find(v => 
    v.lang === 'zh-TW' && (v.name.includes('Google') || v.name.includes('Microsoft'))
  ) || voices.find(v => v.lang === 'zh-TW') || voices.find(v => v.lang.startsWith('zh'));
  
  if (bestVoice) utterance.voice = bestVoice;
  utterance.lang = 'zh-TW';
  utterance.rate = 1.0; 
  window.speechSynthesis.speak(utterance);
};
