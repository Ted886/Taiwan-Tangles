

import React from 'react';
import { TTSConfig } from '../types';
import { Button } from './ui/Button';
import { X, PlayCircle, Globe } from 'lucide-react';
import { speakChinese } from '../utils/sound';

interface SettingsModalProps {
  config: TTSConfig;
  onSave: (config: TTSConfig) => void;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ config, onSave, onClose }) => {
  const handleTest = () => {
    speakChinese("你好，我是台灣人", { provider: 'google' });
  };

  const handleSave = () => {
    onSave({ provider: 'google' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-slideUp flex flex-col">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center shrink-0">
          <h2 className="text-xl font-bold text-slate-700">Audio Settings</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-blue-500 bg-blue-50 text-blue-700">
                <div className="p-2 rounded-lg bg-blue-200">
                  <Globe size={24} />
                </div>
                <div className="text-left flex-1">
                  <div className="font-bold">Google Translate</div>
                  <div className="text-sm opacity-80">Primary Audio Engine</div>
                </div>
            </div>
            
            <p className="text-slate-500 text-sm text-center">
                This app uses the Google Translate Voice engine for the most natural Taiwanese accent available without requiring an API key.
            </p>
          </div>

          <button 
            onClick={handleTest}
            className="w-full py-3 rounded-xl bg-slate-100 text-slate-600 font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
          >
            <PlayCircle size={20} />
            Test Audio
          </button>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 shrink-0">
          <Button fullWidth onClick={handleSave}>
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};
