import { Code2, Play, Save, FolderOpen } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  selectedLanguage: Language;
  languages: Language[];
  onLanguageChange: (language: Language) => void;
  onRun: () => void;
  onSave: () => void;
  onLoad: () => void;
  isRunning: boolean;
}

export default function Header({
  selectedLanguage,
  languages,
  onLanguageChange,
  onRun,
  onSave,
  onLoad,
  isRunning
}: HeaderProps) {
  return (
    <header className="bg-slate-900 border-b border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
<img
      src="/favicon.png"
      alt="DevSpark Logo"
      className="w-10 h-10"
    />
            <h1 className="text-2xl font-bold text-white">DevSpark</h1>
          </div>
          <div className="h-8 w-px bg-slate-700" />
          <div className="relative">
            <select
              value={selectedLanguage.id}
              onChange={(e) => {
                const lang = languages.find(l => l.id === e.target.value);
                if (lang) onLanguageChange(lang);
              }}
              className="appearance-none bg-slate-800 text-white pl-4 pr-10 py-2 rounded-lg border border-slate-700 hover:border-slate-600 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer font-medium"
            >
              {languages.map(lang => (
                <option key={lang.id} value={lang.id}>
                  {lang.icon} {lang.name}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              ▼
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onLoad}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors border border-slate-700 hover:border-slate-600"
          >
            <FolderOpen className="w-4 h-4" />
            <span className="font-medium">Load</span>
          </button>
          <button
            onClick={onSave}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors border border-slate-700 hover:border-slate-600"
          >
            <Save className="w-4 h-4" />
            <span className="font-medium">Save</span>
          </button>
          <button
            onClick={onRun}
            disabled={isRunning}
            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30 font-semibold"
          >
            <Play className="w-4 h-4" fill="currentColor" />
            <span>{isRunning ? 'Running...' : 'Run Code'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
