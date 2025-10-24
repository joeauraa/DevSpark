import { useState, useEffect } from 'react';
import { Play, ArrowLeft, Settings, Download, Copy, Check, Hexagon, Box, Coffee, Type, Braces, Gem, Package, Cog, Server, FileJson, Smartphone, Layers } from 'lucide-react';

interface CodeEditorProps {
  onBack: () => void;
}

const languageTemplates: Record<string, string> = {
  javascript: `// JavaScript Example
console.log("Hello, World!");

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci(10):", fibonacci(10));`,

  python: `# Python Example
print("Hello, World!")

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print("Fibonacci(10):", fibonacci(10))`,

  java: `// Java Example
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Fibonacci(10): " + fibonacci(10));
    }

    static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}`,

  cpp: `// C++ Example
#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    cout << "Hello, World!" << endl;
    cout << "Fibonacci(10): " << fibonacci(10) << endl;
    return 0;
}`,

  csharp: `// C# Example
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
        Console.WriteLine("Fibonacci(10): " + Fibonacci(10));
    }

    static int Fibonacci(int n) {
        if (n <= 1) return n;
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}`,

  ruby: `# Ruby Example
puts "Hello, World!"

def fibonacci(n)
  return n if n <= 1
  fibonacci(n - 1) + fibonacci(n - 2)
end

puts "Fibonacci(10): #{fibonacci(10)}"`,

  go: `// Go Example
package main
import "fmt"

func fibonacci(n int) int {
    if n <= 1 {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

func main() {
    fmt.Println("Hello, World!")
    fmt.Printf("Fibonacci(10): %d\\n", fibonacci(10))
}`,

  rust: `// Rust Example
fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

fn main() {
    println!("Hello, World!");
    println!("Fibonacci(10): {}", fibonacci(10));
}`,

  php: `<?php
// PHP Example
echo "Hello, World!\\n";

function fibonacci($n) {
    if ($n <= 1) return $n;
    return fibonacci($n - 1) + fibonacci($n - 2);
}

echo "Fibonacci(10): " . fibonacci(10);
?>`,

  typescript: `// TypeScript Example
console.log("Hello, World!");

function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci(10):", fibonacci(10));`,

  swift: `// Swift Example
print("Hello, World!")

func fibonacci(_ n: Int) -> Int {
    if n <= 1 { return n }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

print("Fibonacci(10):", fibonacci(10))`,

  kotlin: `// Kotlin Example
fun fibonacci(n: Int): Int {
    if (n <= 1) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
}

fun main() {
    println("Hello, World!")
    println("Fibonacci(10): \${fibonacci(10)}")
}`
};

const languages = [
  { id: 'javascript', name: 'JavaScript', icon: <FileJson className="w-4 h-4" /> },
  { id: 'python', name: 'Python', icon: <Braces className="w-4 h-4" /> },
  { id: 'java', name: 'Java', icon: <Coffee className="w-4 h-4" /> },
  { id: 'cpp', name: 'C++', icon: <Box className="w-4 h-4" /> },
  { id: 'csharp', name: 'C#', icon: <Hexagon className="w-4 h-4" /> },
  { id: 'ruby', name: 'Ruby', icon: <Gem className="w-4 h-4" /> },
  { id: 'go', name: 'Go', icon: <Package className="w-4 h-4" /> },
  { id: 'rust', name: 'Rust', icon: <Cog className="w-4 h-4" /> },
  { id: 'php', name: 'PHP', icon: <Server className="w-4 h-4" /> },
  { id: 'typescript', name: 'TypeScript', icon: <Type className="w-4 h-4" /> },
  { id: 'swift', name: 'Swift', icon: <Smartphone className="w-4 h-4" /> },
  { id: 'kotlin', name: 'Kotlin', icon: <Layers className="w-4 h-4" /> }
];

export default function CodeEditor({ onBack }: CodeEditorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState(languageTemplates.javascript);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCode(languageTemplates[selectedLanguage] || '// Start coding...');
    setOutput('');
  }, [selectedLanguage]);

  const handleLanguageChange = (langId: string) => {
    setSelectedLanguage(langId);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput('Running code...\n');

    setTimeout(() => {
      try {
        if (selectedLanguage === 'javascript' || selectedLanguage === 'typescript') {
          const logs: string[] = [];
          const originalLog = console.log;

          console.log = (...args: any[]) => {
            logs.push(args.map(arg =>
              typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' '));
          };

          try {
            eval(code);
            setOutput(logs.length > 0 ? logs.join('\n') : 'Code executed successfully (no output)');
          } catch (error: any) {
            setOutput(`Error: ${error.message}`);
          } finally {
            console.log = originalLog;
          }
        } else {
          setOutput(`Output for ${languages.find(l => l.id === selectedLanguage)?.name}:\n\nNote: This is a demo environment. In a production setup, code execution would be handled by a backend service.\n\nYour code is ready to run!`);
        }
      } catch (error: any) {
        setOutput(`Error: ${error.message}`);
      } finally {
        setIsRunning(false);
      }
    }, 500);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const extensions: Record<string, string> = {
      javascript: 'js',
      python: 'py',
      java: 'java',
      cpp: 'cpp',
      csharp: 'cs',
      ruby: 'rb',
      go: 'go',
      rust: 'rs',
      php: 'php',
      typescript: 'ts',
      swift: 'swift',
      kotlin: 'kt'
    };

    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${extensions[selectedLanguage] || 'txt'}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <div className="w-px h-6 bg-slate-700"></div>
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-slate-400" />
              <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2">
                <span className="text-emerald-400">
                  {languages.find(l => l.id === selectedLanguage)?.icon}
                </span>
                <select
                  value={selectedLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="bg-transparent text-white focus:outline-none"
                >
                  {languages.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-all duration-200 border border-slate-700"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-all duration-200 border border-slate-700"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              onClick={handleRunCode}
              disabled={isRunning}
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-lg transition-all duration-200 shadow-lg shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play className="w-4 h-4" />
              {isRunning ? 'Running...' : 'Run Code'}
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col border-r border-slate-700">
          <div className="bg-slate-800/50 px-6 py-3 border-b border-slate-700">
            <h3 className="text-slate-300 font-medium">Code Editor</h3>
          </div>
          <div className="flex-1 overflow-hidden">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full bg-slate-900 text-slate-100 font-mono text-sm p-6 focus:outline-none resize-none leading-relaxed"
              spellCheck={false}
              style={{
                tabSize: 2,
                lineHeight: '1.6'
              }}
            />
          </div>
        </div>

        <div className="w-[40%] flex flex-col bg-slate-900/50">
          <div className="bg-slate-800/50 px-6 py-3 border-b border-slate-700">
            <h3 className="text-slate-300 font-medium">Output</h3>
          </div>
          <div className="flex-1 overflow-auto">
            <pre className="text-slate-300 font-mono text-sm p-6 whitespace-pre-wrap leading-relaxed">
              {output || 'Click "Run Code" to see output here...'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
