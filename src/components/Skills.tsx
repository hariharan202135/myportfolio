import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Brain, Wrench, Sparkles, CheckCircle, Cpu, Zap } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = activeCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.title.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="skills" className="py-24 relative bg-gray-950">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-card border border-purple-500/30 text-xs font-mono text-purple-300">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Core <span className="text-gradient-purple">Tech Stack & Tools</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Hands-on technical proficiency demonstrated across academic projects & software internships.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {['All', 'Programming', 'Web', 'AI', 'Tools'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === tab
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'glass-card text-gray-400 hover:text-white hover:border-gray-700'
                }`}
              >
                {tab === 'All' ? 'All Skills' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-gray-800 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-100 text-base">{category.title}</h3>
                    <span className="text-[11px] text-gray-400 font-mono">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges list */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isSelected = selectedSkill === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center space-x-1.5 border ${
                          isSelected
                            ? 'bg-cyan-500/25 border-cyan-400 text-cyan-200 shadow-md shadow-cyan-500/30 font-semibold scale-105'
                            : 'bg-gray-900/80 border-gray-800 text-gray-300 hover:border-cyan-500/40 hover:text-cyan-300'
                        }`}
                      >
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        <span>{skill.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Footer hint */}
              <div className="pt-6 mt-6 border-t border-gray-900 text-[11px] text-gray-500 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-400" /> Verified in Resume
                </span>
                <span className="font-mono text-cyan-400/80">Click for details</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Skill Detail Toast/Modal if selected */}
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 rounded-2xl glass-card border border-cyan-500/30 max-w-xl mx-auto flex items-center justify-between shadow-xl"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>{selectedSkill}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Active Competency
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  Applied in N Hariharan's coursework, deployed projects, and professional internships.
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedSkill(null)}
              className="text-xs text-gray-400 hover:text-white px-2 py-1"
            >
              Close
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
