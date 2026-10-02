import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Terminal, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import Hero3DCanvas from './Hero3DCanvas';
import confetti from 'canvas-confetti';

export default function Hero() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-cyber-grid">
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Intro Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-300 w-fit shadow-md shadow-cyan-950/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-gray-300">Open to Internships & Software Roles</span>
              <span className="text-cyan-500 font-bold">• 2027 CSE</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
                {PERSONAL_INFO.name}
              </h1>
              <div className="text-sm sm:text-base font-mono text-cyan-400 font-medium tracking-wide flex flex-wrap items-center gap-2 pt-1">
                <span className="flex items-center gap-1 text-purple-400">
                  <Cpu className="w-4 h-4" /> AI/ML
                </span>
                <span>•</span>
                <span className="text-cyan-300">Full-Stack Development</span>
                <span>•</span>
                <span className="text-blue-400">Python</span>
                <span>•</span>
                <span className="text-emerald-400">Web Dev</span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-cyan-200 to-cyan-400 leading-snug">
              "{PERSONAL_INFO.headline}"
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed font-normal">
              {PERSONAL_INFO.supportingText}
            </p>

            {/* Soft Skills Section */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>CORE SOFT SKILLS</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Problem-Solving
                </span>
                <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Analytical Thinking
                </span>
                <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Adaptability
                </span>
                <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/30 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Quick Learning
                </span>
              </div>
            </div>

            {/* Updated Statistics Cards Banner */}
            <div className="grid grid-cols-3 gap-3 py-2 max-w-lg">
              <div className="glass-card p-3.5 rounded-xl border border-gray-800 text-left transition-all hover:border-cyan-500/30">
                <div className="text-2xl font-extrabold text-cyan-400 font-mono">8.05</div>
                <div className="text-xs font-medium text-gray-400 pt-0.5">B.E. CSE CGPA</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl border border-gray-800 text-left transition-all hover:border-purple-500/30">
                <div className="text-2xl font-extrabold text-purple-400 font-mono">2</div>
                <div className="text-xs font-medium text-gray-400 pt-0.5">Internships</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl border border-gray-800 text-left transition-all hover:border-emerald-500/30">
                <div className="text-2xl font-extrabold text-emerald-400 font-mono">3</div>
                <div className="text-xs font-medium text-gray-400 pt-0.5">Featured Projects</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Button 1: View My Projects */}
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:opacity-95 shadow-xl shadow-cyan-500/25 flex items-center space-x-2 group transition-all active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Button 2: Download Resume */}
              <a
                href={PERSONAL_INFO.resumePath}
                download="N_Hariharan_Resume.pdf"
                onClick={triggerConfetti}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-500/20 hover:border-cyan-400 shadow-lg shadow-cyan-950/40 flex items-center space-x-2 transition-all active:scale-95"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              {/* Button 3: Contact Me */}
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-gray-300 bg-gray-900/80 border border-gray-800 hover:text-white hover:border-gray-700 hover:bg-gray-800 flex items-center space-x-2 transition-all active:scale-95"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Interactive Terminal Tag */}
            <div className="pt-2 flex items-center space-x-3 text-xs font-mono text-gray-500">
              <span className="flex items-center gap-1.5 text-gray-400">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" /> ~/n-hariharan
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-cyan-400/80">
                <Sparkles className="w-3 h-3 text-purple-400" /> Ready for Impact
              </span>
            </div>

          </motion.div>

          {/* Right Column: Interactive 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <Hero3DCanvas />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
