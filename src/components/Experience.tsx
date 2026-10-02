import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Sparkles, Cpu, BarChart3 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

function CrescentExperienceCard() {
  return (
    <div className="relative group">
      {/* Connector Line from Timeline Marker to Card */}
      <div className="absolute -left-6 sm:-left-8 top-8 w-6 sm:w-8 h-0.5 bg-cyan-500/50 hidden sm:block" />

      {/* Card Container matching Reference Image */}
      <div className="rounded-3xl border border-cyan-500/20 bg-[#070e20] p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40">
        
        {/* Card Header: Left (Analytics Icon + Title/Company) & Right (Date + Badge) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-cyan-950/80">
          
          {/* Header Left: Analytics Icon Box + Title & Company */}
          <div className="flex items-center space-x-4">
            {/* Analytics Icon Container in Rounded Square */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 flex items-center justify-center flex-shrink-0 shadow-inner">
              <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />
            </div>

            {/* Title & Company */}
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Data Analytics Intern
              </h3>
              <p className="text-sm sm:text-base font-semibold text-cyan-400">
                Crescent Infotech
              </p>
            </div>
          </div>

          {/* Header Right: Date & Onsite Pill Badge */}
          <div className="flex items-center space-x-3 self-start md:self-center">
            <span className="text-xs sm:text-sm font-mono text-gray-300 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Jul 2025 – Aug 2025</span>
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 shadow-sm">
              Onsite
            </span>
          </div>

        </div>

        {/* Responsibilities List with Green Check Icons on Left */}
        <div className="py-6">
          <ul className="space-y-4 text-xs sm:text-sm text-gray-300">
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed text-gray-200">
                Performed data collection, cleaning, and exploratory data analysis (EDA) on structured datasets.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed text-gray-200">
                Worked on a cloud storage security project focused on data integrity and storage verification.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed text-gray-200">
                Applied data analysis techniques to identify patterns and improve data reliability.
              </span>
            </li>
          </ul>
        </div>

        {/* Footer Divider & Bottom-Right Sparkle Label */}
        <div className="pt-4 border-t border-cyan-950/80 flex items-center justify-end space-x-2 text-xs font-mono text-gray-400">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>Verified Professional Experience</span>
        </div>

      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-gray-950/80 border-t border-gray-900">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-cyan">Internship Experience</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Practical software engineering, AI building, and data analytics roles in production-focused environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line on Left Side */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-40" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, index) => {
              const isCrescent = exp.id === 'exp-1';

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative pl-12 sm:pl-16 w-full"
                >
                  {/* Timeline Dot Indicator on Left Line */}
                  <div className="absolute left-4 sm:left-6 -translate-x-1/2 top-8 z-10 w-8 h-8 rounded-full bg-gray-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Render Crescent Experience Card matching Reference Image exactly for exp-1 */}
                  {isCrescent ? (
                    <CrescentExperienceCard />
                  ) : (
                    <div className="rounded-3xl border border-gray-800 bg-[#070e20] p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden transition-all duration-300 hover:border-purple-500/40">
                      
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-800/80">
                        <div className="flex items-center space-x-4">
                          <div className="p-3.5 sm:p-4 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-purple-400 flex items-center justify-center flex-shrink-0">
                            <Cpu className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                              {exp.role}
                            </h3>
                            <p className="text-sm sm:text-base font-semibold text-cyan-400">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 self-start md:self-center">
                          <span className="text-xs sm:text-sm font-mono text-gray-300 flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-purple-400" />
                            <span>{exp.period}</span>
                          </span>
                          {exp.track && (
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                              Track: {exp.track}
                            </span>
                          )}
                          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/40">
                            {exp.locationType}
                          </span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="py-6">
                        <ul className="space-y-4 text-xs sm:text-sm text-gray-300">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start space-x-3">
                              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed text-gray-200">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Footer */}
                      <div className="pt-4 border-t border-gray-800/80 flex items-center justify-end space-x-2 text-xs font-mono text-gray-400">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span>Verified Professional Experience</span>
                      </div>

                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
