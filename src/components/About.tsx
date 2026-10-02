import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, Terminal, CheckCircle2, Code2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const [activeCodeTab, setActiveCodeTab] = useState<'profile' | 'stats' | 'vision'>('profile');

  const codeSnippets = {
    profile: `// Developer Profile Definition
const developer = {
  name: "${PERSONAL_INFO.name}",
  degree: "${PERSONAL_INFO.education.degree}",
  institution: "${PERSONAL_INFO.education.institution}",
  cgpa: ${PERSONAL_INFO.education.cgpa},
  interests: [
    "Artificial Intelligence",
    "Machine Learning (NLP, Vision)",
    "Full-Stack Development (Python/Flask)"
  ],
  location: "${PERSONAL_INFO.location}"
};`,
    stats: `// Academic & Project Metrics
const metrics = {
  academics: {
    status: "Active CSE Undergraduate",
    cgpaScore: 8.05,
    expectedGraduation: 2027
  },
  practicalWork: {
    internshipsCompleted: 2,
    deployedApplications: 6,
    certifications: ["NPTEL Cloud (76%)", "CS50x Harvard"]
  }
};`,
    vision: `// Engineering Mission Statement
function buildSoftware(problem, intelligence) {
  return {
    solution: combineAIWithUX(problem, intelligence),
    impact: "Real-world utility & recruiter excellence"
  };
}`
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gray-950/70 border-y border-gray-900">
      {/* Background Accent Lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT THE DEVELOPER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for <span className="text-gradient-cyan">Impact & Practical AI</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Combining machine learning models with responsive full-stack architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Bio Paragraphs */}
            <div className="space-y-4 text-gray-300 leading-relaxed text-base">
              {PERSONAL_INFO.aboutText.map((paragraph, index) => (
                <p key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>{paragraph}</span>
                </p>
              ))}
            </div>

            {/* Information Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Card 1: Degree */}
              <div className="glass-card glass-card-hover p-4 rounded-2xl border border-gray-800 flex items-start space-x-3.5">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Education</div>
                  <div className="text-sm font-bold text-gray-100 mt-0.5">{PERSONAL_INFO.education.degree}</div>
                  <div className="text-xs text-gray-400 mt-1">{PERSONAL_INFO.education.institution}</div>
                </div>
              </div>

              {/* Card 2: CGPA */}
              <div className="glass-card glass-card-hover p-4 rounded-2xl border border-gray-800 flex items-start space-x-3.5">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-purple-400 uppercase tracking-wider">Academic Score</div>
                  <div className="text-2xl font-black text-white mt-0.5 font-mono">{PERSONAL_INFO.education.cgpa} <span className="text-xs font-normal text-gray-400">/ 10</span></div>
                  <div className="text-xs text-gray-400">Consistently Strong Performance</div>
                </div>
              </div>

              {/* Card 3: Graduation */}
              <div className="glass-card glass-card-hover p-4 rounded-2xl border border-gray-800 flex items-start space-x-3.5">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">Graduation</div>
                  <div className="text-sm font-bold text-gray-100 mt-0.5">{PERSONAL_INFO.education.graduationYear}</div>
                  <div className="text-xs text-gray-400 mt-1">Ready for Graduate Roles</div>
                </div>
              </div>

              {/* Card 4: Location */}
              <div className="glass-card glass-card-hover p-4 rounded-2xl border border-gray-800 flex items-start space-x-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Location</div>
                  <div className="text-sm font-bold text-gray-100 mt-0.5">{PERSONAL_INFO.location}</div>
                  <div className="text-xs text-gray-400 mt-1">Gnanamani Tech • Tamil Nadu</div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Code Terminal Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl glass-card border border-cyan-500/20 shadow-2xl overflow-hidden">
              
              {/* Window Title Bar */}
              <div className="bg-gray-900/90 px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs font-mono text-gray-400 ml-2 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" /> hariharan.config.ts
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center space-x-1 bg-gray-950 p-1 rounded-lg border border-gray-800">
                  <button
                    onClick={() => setActiveCodeTab('profile')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                      activeCodeTab === 'profile'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    profile.ts
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('stats')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                      activeCodeTab === 'stats'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    metrics.ts
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('vision')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                      activeCodeTab === 'vision'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    mission.ts
                  </button>
                </div>
              </div>

              {/* Terminal Code Body */}
              <div className="p-6 bg-gray-950/90 font-mono text-xs sm:text-sm text-cyan-300/90 overflow-x-auto leading-relaxed min-h-[260px]">
                <pre className="text-gray-300">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Status */}
              <div className="bg-gray-900/80 px-4 py-2.5 border-t border-gray-800/80 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-emerald-400 font-semibold">STATUS: READY TO DEVELOP</span>
                </div>
                <div className="text-gray-500 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>UTF-8 • TypeScript</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
