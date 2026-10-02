import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, FileText, Download, Eye, X, ExternalLink, Calendar, Search } from 'lucide-react';
import { CERTIFICATE_DOCS, type CertificateDoc } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePdfModal, setActivePdfModal] = useState<CertificateDoc | null>(null);

  const categories = [
    'All',
    'Data Science & AI',
    'AI & Generative Tools',
    'Software Development',
    'Data & Office Tools',
    'Security & Technology'
  ];

  const filteredDocs = CERTIFICATE_DOCS.filter(doc => {
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certifications" className="py-24 relative bg-gray-950/90 border-t border-gray-900">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>VERIFIED ACADEMIC CREDENTIALS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-cyan">Certifications</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg">
            Interactive repository of verified technical course completions, bootcamps & skill credentials.
          </p>

          {/* Search & Filter Controls */}
          <div className="pt-6 space-y-4 max-w-4xl mx-auto">
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search certificates by title or issuer..."
                className="w-full bg-gray-900/90 border border-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500 font-sans"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 scale-105'
                      : 'glass-card text-gray-400 hover:text-white hover:border-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-gray-800/80 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                
                {/* Header Tag & Issuer */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                    {doc.category}
                  </span>
                  <div className="flex items-center space-x-1 text-[11px] font-mono text-gray-400">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{doc.issueDate}</span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {doc.title}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-400/90 font-mono mt-1">
                    {doc.issuer}
                  </div>
                </div>

                {/* Code or Verified Pill */}
                {doc.code && (
                  <div className="bg-gray-900/80 px-3 py-1.5 rounded-xl border border-gray-800/80 text-[11px] font-mono text-gray-400 flex items-center justify-between">
                    <span>ID / Code:</span>
                    <span className="text-cyan-300 font-bold">{doc.code}</span>
                  </div>
                )}

              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-gray-900 flex items-center space-x-3">
                <button
                  onClick={() => setActivePdfModal(doc)}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-cyan-950/60 border border-cyan-500/40 hover:bg-cyan-500/20 hover:border-cyan-400 flex items-center justify-center space-x-1.5 transition-all"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View PDF</span>
                </button>

                <a
                  href={doc.pdfPath}
                  download={`${doc.title.replace(/\s+/g, '_')}_Certificate.pdf`}
                  className="py-2.5 px-3 rounded-xl text-xs font-semibold text-gray-300 bg-gray-900 border border-gray-800 hover:text-white hover:border-cyan-500/40 flex items-center justify-center space-x-1.5 transition-all"
                  title="Download Certificate PDF"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Download</span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* PDF Viewer Glass Modal */}
      <AnimatePresence>
        {activePdfModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-4xl max-h-[90vh] glass-card border border-cyan-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header Bar */}
              <div className="bg-gray-900/90 px-6 py-4 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">{activePdfModal.title}</h3>
                    <div className="text-xs text-gray-400 font-mono">
                      {activePdfModal.issuer} • {activePdfModal.issueDate}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <a
                    href={activePdfModal.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={activePdfModal.pdfPath}
                    download
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-gray-950 bg-cyan-400 hover:bg-cyan-300 flex items-center space-x-1.5 transition-all shadow-md shadow-cyan-400/20"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>

                  <button
                    onClick={() => setActivePdfModal(null)}
                    className="p-2 rounded-xl bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer Body */}
              <div className="flex-1 bg-gray-950 relative min-h-[500px]">
                <iframe
                  src={activePdfModal.pdfPath}
                  title={activePdfModal.title}
                  className="w-full h-full min-h-[500px] border-0"
                />
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
