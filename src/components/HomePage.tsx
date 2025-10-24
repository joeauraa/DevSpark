import { Code2, Zap, Globe, FileCode, Play, Terminal, Hexagon, Box, Coffee, Type, Braces, Gem, Package, Cog, Server, FileJson, Smartphone, Layers } from 'lucide-react';

interface HomePageProps {
  onStartCoding: () => void;
}

export default function HomePage({ onStartCoding }: HomePageProps) {
  const languages = [
    { name: 'JavaScript', icon: <FileJson className="w-5 h-5" /> },
    { name: 'Python', icon: <Braces className="w-5 h-5" /> },
    { name: 'Java', icon: <Coffee className="w-5 h-5" /> },
    { name: 'C++', icon: <Box className="w-5 h-5" /> },
    { name: 'C#', icon: <Hexagon className="w-5 h-5" /> },
    { name: 'Ruby', icon: <Gem className="w-5 h-5" /> },
    { name: 'Go', icon: <Package className="w-5 h-5" /> },
    { name: 'Rust', icon: <Cog className="w-5 h-5" /> },
    { name: 'PHP', icon: <Server className="w-5 h-5" /> },
    { name: 'TypeScript', icon: <Type className="w-5 h-5" /> },
    { name: 'Swift', icon: <Smartphone className="w-5 h-5" /> },
    { name: 'Kotlin', icon: <Layers className="w-5 h-5" /> }
  ];

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Multi-Language Support',
      description: 'Write code in your favorite programming language with full syntax highlighting'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Execution',
      description: 'Run your code instantly and see results in real-time'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Browser-Based',
      description: 'No installation required. Code anywhere, anytime, from any device'
    },
    {
      icon: <FileCode className="w-8 h-8" />,
      title: 'Smart Editor',
      description: 'Modern code editor with line numbers and syntax highlighting'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <Terminal className="w-8 h-8 text-emerald-400" />
            <h1 className="text-2xl font-bold text-white">DevSpark </h1>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
            <Play className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Execute Code Online</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Code Editor for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Every Developer
            </span>
          </h2>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Write, run, and test code in multiple programming languages directly in your browser.
            No setup required.
          </p>

          <button
            onClick={onStartCoding}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-emerald-600 hover:to-cyan-600 transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-105"
          >
            <Code2 className="w-6 h-6" />
            Start Coding Now
            <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="text-emerald-400 mb-4">{feature.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
          <h3 className="text-white text-2xl font-bold mb-6 text-center">
            Supported Languages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-200"
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-emerald-400">{lang.icon}</span>
                  <span className="text-slate-300 font-medium text-sm">{lang.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-700 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-slate-500 text-sm">
            Build amazing things with code
          </p>
        </div>
      </footer>
    </div>
  );
}
