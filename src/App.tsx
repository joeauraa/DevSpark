import { useState, useEffect } from 'react';
import { languages } from './data/languages';
import { SavedSnippet } from './types';
import { supabase } from './lib/supabase';
import Header from './components/Header';
import CodeEditor from './components/CodeEditor';
import OutputPanel from './components/OutputPanel';
import SaveModal from './components/SaveModal';

import LoadModal from './components/LoadModal';
import HomePage from './components/HomePage'; // ✅ صفحة البداية

function App() {
  const [started, setStarted] = useState(false); // ✅ التحكم بين الصفحتين
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [code, setCode] = useState(selectedLanguage.template);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isLoadModalOpen, setIsLoadModalOpen] = useState(false);
  const [savedSnippets, setSavedSnippets] = useState<SavedSnippet[]>([]);

  useEffect(() => {
    loadSnippets();
  }, []);

  const loadSnippets = async () => {
    const { data, error } = await supabase
      .from('code_snippets')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setSavedSnippets(data);
    }
  };

  const handleLanguageChange = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    setCode(language.template);
    setOutput('');
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput('');

    setTimeout(() => {
      try {
        if (selectedLanguage.id === 'html' || selectedLanguage.id === 'css') {
          setOutput(code);
        } else if (selectedLanguage.id === 'javascript') {
          const logs: string[] = [];
          const customConsole = {
            log: (...args: unknown[]) => {
              logs.push(args.map(arg =>
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
              ).join(' '));
            }
          };

          try {
            const func = new Function('console', code);
            func(customConsole);
            setOutput(logs.join('\n') || 'Code executed successfully (no output)');
          } catch (error) {
            setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`);
          }
        } else {
          setOutput(`Code execution simulation for ${selectedLanguage.name}:\n\n${code}\n\nNote: This is a frontend editor. For actual execution, integrate with a backend code execution service.`);
        }
      } catch (error) {
        setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`);
      }
      setIsRunning(false);
    }, 500);
  };

  const handleSaveSnippet = async (title: string) => {
    const { data, error } = await supabase
      .from('code_snippets')
      .insert([
        {
          title,
          language: selectedLanguage.name,
          code
        }
      ])
      .select()
      .maybeSingle();

    if (!error && data) {
      setSavedSnippets([data, ...savedSnippets]);
      setIsSaveModalOpen(false);
    }
  };

  const handleLoadSnippet = (snippet: SavedSnippet) => {
    const lang = languages.find(l => l.name === snippet.language);
    if (lang) {
      setSelectedLanguage(lang);
    }
    setCode(snippet.code);
    setOutput('');
    setIsLoadModalOpen(false);
  };

  const handleDeleteSnippet = async (id: string) => {
    const { error } = await supabase
      .from('code_snippets')
      .delete()
      .eq('id', id);

    if (!error) {
      setSavedSnippets(savedSnippets.filter(s => s.id !== id));
    }
  };

  // ✅ هنا الشرط: لو المستخدم لسه ما بدأش
  if (!started) {
    return <HomePage onStartCoding={() => setStarted(true)} />;
  }

  // ✅ هنا الصفحة التانية (الـ Editor)
  return (
    <div className="h-screen flex flex-col bg-slate-950">
      <Header
        selectedLanguage={selectedLanguage}
        languages={languages}
        onLanguageChange={handleLanguageChange}
        onRun={handleRunCode}
        onSave={() => setIsSaveModalOpen(true)}
        onLoad={() => setIsLoadModalOpen(true)}
        isRunning={isRunning}
      />

      <div className="flex-1 flex overflow-hidden">
        <div className="w-1/2 border-r border-slate-700 flex flex-col">
          <div className="bg-slate-800 px-6 py-3 border-b border-slate-700">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                Editor
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {selectedLanguage.extension}
              </span>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <CodeEditor
              code={code}
              onChange={setCode}
              language={selectedLanguage.name}
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col">
          <div className="bg-slate-800 px-6 py-3 border-b border-slate-700">
            <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
              {selectedLanguage.id === 'html' || selectedLanguage.id === 'css' ? 'Preview' : 'Output'}
            </span>
          </div>
          <div className="flex-1 overflow-hidden">
            <OutputPanel output={output} language={selectedLanguage.id} />
          </div>
        </div>
      </div>

      <SaveModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        onSave={handleSaveSnippet}
        language={selectedLanguage.name}
      />

      <LoadModal
        isOpen={isLoadModalOpen}
        onClose={() => setIsLoadModalOpen(false)}
        snippets={savedSnippets}
        onLoad={handleLoadSnippet}
        onDelete={handleDeleteSnippet}
      />
    </div>
  );
}

export default App;
