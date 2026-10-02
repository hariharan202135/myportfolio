import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Brain, Camera, Check, ArrowUpRight, Layers, Gamepad2, CloudSun, Trophy } from 'lucide-react';
import { PROJECTS, type Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Full-Stack' | 'AI/ML' | 'Computer Vision'>('All');

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'tic-tac-toe':
        return <Gamepad2 className="w-6 h-6 text-cyan-400" />;
      case 'weather-app':
        return <CloudSun className="w-6 h-6 text-blue-400" />;
      case 'lookify':
        return <Camera className="w-6 h-6 text-emerald-400" />;
      case 'thinkspark':
        return <Brain className="w-6 h-6 text-purple-400" />;
      case 'placeme-ai':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'brain-battle-arena':
        return <Trophy className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-gray-950">
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span>FEATURED APPLICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production-Style <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Deployed web games, machine learning classifiers, and deep learning vision systems.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {(['All', 'Full-Stack', 'AI/ML', 'Computer Vision'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'glass-card text-gray-400 hover:text-white hover:border-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {filteredProjects.map((project: Project, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="glass-card glass-card-hover rounded-3xl border border-gray-800/80 p-6 sm:p-8 lg:p-10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-3xl font-black text-cyan-500/40">
                          {project.number}
                        </span>
                        <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800">
                          {getProjectIcon(project.id)}
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                          {project.category}
                        </span>
                      </div>

                      {project.hasLiveDemo && (
                        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono pulse-badge">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span>● LIVE DEMO ONLINE</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.name}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-400/90 font-mono mt-1">
                        {project.subtitle}
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider">Key Features & Architecture:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                        {project.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center space-x-2 bg-gray-900/60 p-2 rounded-lg border border-gray-800">
                            <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-gray-900 text-cyan-300 border border-gray-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      {project.hasLiveDemo && project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:opacity-95 shadow-xl shadow-cyan-500/20 flex items-center space-x-2 transition-all active:scale-95 group/btn"
                        >
                          <span>LIVE DEMO</span>
                          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-3 rounded-xl text-sm font-semibold text-gray-300 bg-gray-900 border border-gray-800 hover:text-white hover:border-cyan-500/40 flex items-center space-x-2 transition-all"
                        >
                          <GithubIcon className="w-4 h-4 text-cyan-400" />
                          <span>{project.hasLiveDemo ? 'GitHub Code' : 'GitHub / Project Details'}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                        </a>
                      )}
                    </div>

                  </div>

                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="rounded-2xl glass-card border border-cyan-500/20 p-4 relative overflow-hidden group/preview bg-gray-900/90 shadow-2xl">
                      
                      <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-4">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                        </div>
                        <div className="text-[10px] font-mono text-cyan-400/80 bg-gray-950 px-2 py-0.5 rounded border border-gray-800 truncate max-w-[200px]">
                          {project.liveDemoUrl || `${project.id}.local`}
                        </div>
                      </div>

                      <div className="h-56 sm:h-64 rounded-xl bg-gradient-to-br from-gray-950 via-gray-900 to-cyan-950/40 border border-gray-800/80 p-5 flex flex-col justify-between relative overflow-hidden">
                        
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                        
                        <div className="flex items-center justify-between z-10">
                          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                            {getProjectIcon(project.id)}
                          </div>
                          <span className="text-xs font-mono text-cyan-400/80 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-500/20">
                            {project.category}
                          </span>
                        </div>

                        <div className="space-y-2 z-10">
                          <div className="text-xl font-bold text-white">{project.name}</div>
                          <div className="text-xs text-gray-400 line-clamp-2">{project.description}</div>
                        </div>

                        <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-xs text-cyan-300 font-mono z-10">
                          <span>Status: Deployed & Tested</span>
                          {project.hasLiveDemo ? (
                            <a
                              href={project.liveDemoUrl!}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline flex items-center gap-1 text-cyan-400 hover:text-white"
                            >
                              Launch Demo <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-gray-500">Flask Backend</span>
                          )}
                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
