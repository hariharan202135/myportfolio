import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Play, Sparkles, RefreshCw, Maximize2, Trophy, Cpu, Gamepad2, CloudSun } from 'lucide-react';

export default function LiveShowcase() {
  const [activeIframe, setActiveIframe] = useState<string>('brainbattle');
  const [iframeKey, setIframeKey] = useState(0);

  const deployedApps: Record<string, { name: string; tagline: string; url: string; stack: string; host: string }> = {
    brainbattle: {
      name: "Brain Battle Arena",
      tagline: "AI-Powered 1v1 Multiplayer Quiz Platform",
      url: "https://brainbattlearenbyhari.streamlit.app/",
      stack: "Streamlit • Gemini AI • Supabase",
      host: "Streamlit"
    },
    placemeai: {
      name: "PlaceMe AI",
      tagline: "AI Placement Preparation SaaS Platform",
      url: "https://place-me-ai.vercel.app/dashboard",
      stack: "Next.js • React • AI/LLM • Vercel",
      host: "Vercel"
    },
    thinkspark: {
      name: "ThinkSpark",
      tagline: "Brain Testing Web Game (Memory, Focus & Reasoning)",
      url: "https://thinkspark-1.onrender.com/",
      stack: "Flask • SQLite • JavaScript • Render",
      host: "Render"
    },
    weather: {
      name: "Weather App",
      tagline: "Real-Time Weather Report Application",
      url: "https://weatherreportweb.netlify.app/",
      stack: "JavaScript • Weather API • Netlify",
      host: "Netlify"
    },
    tictactoe: {
      name: "Online Tic-Tac-Toe Game",
      tagline: "Interactive Turn-Based Web Game",
      url: "https://tic-tac-toe-game-for-web.netlify.app/",
      stack: "HTML • CSS • JavaScript • Netlify",
      host: "Netlify"
    }
  };

  const currentApp = deployedApps[activeIframe] || deployedApps['brainbattle'];

  return (
    <section className="py-24 relative bg-gray-950/90 border-t border-gray-900 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-badge" />
            <span>LIVE PRODUCTION SHOWCASE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Built. Deployed. <span className="text-gradient-cyan">Real.</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            "These aren't just concepts. These applications are deployed and accessible online for users and recruiters."
          </p>

          {/* Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-4">
            <button
              onClick={() => { setActiveIframe('brainbattle'); setIframeKey(k => k + 1); }}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wide flex items-center space-x-2 transition-all ${
                activeIframe === 'brainbattle'
                  ? 'bg-amber-500 text-gray-950 shadow-lg shadow-amber-500/30 font-extrabold scale-105'
                  : 'glass-card text-gray-300 hover:border-amber-500/40'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-amber-950" />
              <span>1. Brain Battle Arena</span>
            </button>

            <button
              onClick={() => { setActiveIframe('placemeai'); setIframeKey(k => k + 1); }}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wide flex items-center space-x-2 transition-all ${
                activeIframe === 'placemeai'
                  ? 'bg-cyan-500 text-gray-950 shadow-lg shadow-cyan-500/30 font-extrabold scale-105'
                  : 'glass-card text-gray-300 hover:border-cyan-500/40'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>2. PlaceMe AI</span>
            </button>

            <button
              onClick={() => { setActiveIframe('thinkspark'); setIframeKey(k => k + 1); }}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wide flex items-center space-x-2 transition-all ${
                activeIframe === 'thinkspark'
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30 font-extrabold scale-105'
                  : 'glass-card text-gray-300 hover:border-purple-500/40'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>3. ThinkSpark</span>
            </button>

            <button
              onClick={() => { setActiveIframe('weather'); setIframeKey(k => k + 1); }}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wide flex items-center space-x-2 transition-all ${
                activeIframe === 'weather'
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 font-extrabold scale-105'
                  : 'glass-card text-gray-300 hover:border-blue-500/40'
              }`}
            >
              <CloudSun className="w-3.5 h-3.5" />
              <span>4. Weather App</span>
            </button>

            <button
              onClick={() => { setActiveIframe('tictactoe'); setIframeKey(k => k + 1); }}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wide flex items-center space-x-2 transition-all ${
                activeIframe === 'tictactoe'
                  ? 'bg-emerald-500 text-gray-950 shadow-lg shadow-emerald-500/30 font-extrabold scale-105'
                  : 'glass-card text-gray-300 hover:border-emerald-500/40'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>5. Tic-Tac-Toe</span>
            </button>
          </div>
        </div>

        <motion.div
          key={activeIframe}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto rounded-3xl glass-card border border-cyan-500/30 shadow-2xl overflow-hidden"
        >
          <div className="bg-gray-900/90 px-5 py-3.5 border-b border-gray-800 flex flex-wrap items-center justify-between gap-3">
            
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              
              <div className="hidden sm:flex items-center space-x-2 ml-4">
                <button
                  onClick={() => setIframeKey(k => k + 1)}
                  className="p-1 rounded bg-gray-800 text-gray-400 hover:text-cyan-400"
                  title="Reload Live View"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex-1 max-w-xl mx-2 bg-gray-950 px-4 py-1.5 rounded-xl border border-gray-800 flex items-center justify-between text-xs font-mono text-cyan-300">
              <div className="flex items-center space-x-2 truncate">
                <Globe className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span className="truncate">{currentApp.url}</span>
              </div>
              <span className="flex items-center space-x-1 text-emerald-400 font-bold ml-2 text-[10px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>● LIVE</span>
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href={currentApp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 flex items-center space-x-1.5"
              >
                <span>Open in New Tab</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          <div className="relative w-full h-[480px] sm:h-[580px] bg-gray-950 flex flex-col items-center justify-center">
            
            <iframe
              key={iframeKey}
              src={currentApp.url}
              title={currentApp.name}
              className="w-full h-full border-0 rounded-b-3xl"
              sandbox="allow-scripts allow-same-origin allow-forms"
              loading="lazy"
            />

            <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-cyan-500/20 flex flex-wrap items-center justify-between text-xs font-mono text-gray-300 shadow-xl">
              <div className="flex items-center space-x-2">
                <Play className="w-4 h-4 text-cyan-400" />
                <span className="font-bold text-white">{currentApp.name}</span>
                <span className="text-gray-400 hidden sm:inline">— {currentApp.tagline}</span>
              </div>
              <div className="text-cyan-400 font-semibold text-[11px]">
                Stack: {currentApp.stack}
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
