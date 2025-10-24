import { Terminal } from 'lucide-react';

interface OutputPanelProps {
  output: string;
  language: string;
}

export default function OutputPanel({ output, language }: OutputPanelProps) {
  if (language === 'html') {
    return (
      <div className="h-full overflow-auto bg-white">
        <iframe
          srcDoc={output}
          className="w-full h-full border-0"
          title="HTML Preview"
          sandbox="allow-scripts"
        />
      </div>
    );
  }

  if (language === 'css') {
    const htmlWithCSS = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${output}</style>
        </head>
        <body>
          <div class="container">
            <h1>CSS Preview</h1>
            <p>Your styles are applied to this page.</p>
          </div>
        </body>
      </html>
    `;
    return (
      <div className="h-full overflow-auto bg-white">
        <iframe
          srcDoc={htmlWithCSS}
          className="w-full h-full border-0"
          title="CSS Preview"
          sandbox="allow-scripts"
        />
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto bg-slate-950 p-6">
      <div className="flex items-center gap-2 mb-4 text-emerald-400">
        <Terminal className="w-4 h-4" />
        <span className="text-xs font-semibold uppercase tracking-wider">Output</span>
      </div>
      <pre className="text-slate-300 font-mono text-sm whitespace-pre-wrap leading-relaxed">
        {output || 'Run your code to see the output here...'}
      </pre>
    </div>
  );
}
