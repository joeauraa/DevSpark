import {
  Code2,
  Zap,
  Globe,
  FileCode,
  Play,
  Terminal,
  Hexagon,
  Box,
  Coffee,
  Type,
  Braces,
  Gem,
  Package,
  Cog,
  Server,
  FileJson,
  Smartphone,
  Layers,
  Github as GithubIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Mail
} from 'lucide-react';

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
      description: 'No installation required. Code anywhere, anytime'
    },
    {
      icon: <FileCode className="w-8 h-8" />,
      title: 'Smart Editor',
      description: 'Modern editor with syntax highlighting & line numbers'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
{/* NAVBAR */}
<nav className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
    
    <img
      src="/favicon.png"
      alt="DevSpark Logo"
      className="w-10 h-10"
    />

    <h1 className="text-2xl font-bold text-white tracking-wide">
      DevSpark
    </h1>

  </div>
</nav>

      {/* HERO */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Play className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">
              Execute Code Online
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Code Editor for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Every Developer
            </span>
          </h2>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Write, run, and test code in multiple programming languages —
            directly in your browser.
          </p>

          <button
            onClick={onStartCoding}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
          >
            <Code2 className="w-6 h-6" />
            Start Coding Now
            <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900/60 backdrop-blur border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* LANGUAGES */}
        <div className="bg-slate-900/60 backdrop-blur border border-slate-800 rounded-2xl p-8">
          <h3 className="text-white text-2xl font-bold mb-8 text-center">
            Supported Languages
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 transition-all duration-200 hover:border-blue-500/50 hover:scale-105"
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-blue-400">{lang.icon}</span>
                  <span className="text-slate-300 text-sm font-medium">
                    {lang.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ABOUT */}
          <div className="border-t border-slate-800/60 mt-10 pt-8 text-center">
            <div className="flex items-center justify-center gap-2 text-slate-300 mb-3">
              <Code2 className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold">About Developer</h3>
            </div>

            <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Developed by <span className="text-white font-medium">Yousef Magdy</span> —
              Web Developer, Python Programmer, PCB Designer,
              Robotics & Cyber Security Specialist with 5+ years of experience.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {[
                { icon: <GithubIcon />, label: 'GitHub', href: 'https://github.com/joeauraa' },
                { icon: <FacebookIcon />, label: 'Facebook', href: 'https://facebook.com/share/1BQEwhbSXg/' },
                { icon: <InstagramIcon />, label: 'Instagram', href: 'https://instagram.com/joeauraa' },
                { icon: <Mail />, label: 'Contact', href: 'mailto:yousefmagdyhassann@gmail.com' }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-900/60 border border-slate-800 rounded-lg text-slate-300 transition-all hover:text-white hover:border-blue-500/50 hover:scale-105"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800">
        <p className="text-center text-slate-400 text-sm py-8">
          © 2026 <span className="text-white font-semibold">DevSpark™</span>. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
