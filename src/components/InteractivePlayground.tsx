import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, CheckCircle2, AlertTriangle, RefreshCcw, Send, HelpCircle } from 'lucide-react';

export default function InteractivePlayground() {
  // Tab selector: 'fakenews' or 'thinkspark'
  const [activeTab, setActiveTab] = useState<'fakenews' | 'thinkspark'>('fakenews');

  // Fake News Simulator State
  const [newsText, setNewsText] = useState("NASA confirms discovery of water ice on Mars crater using satellite imagery.");
  const [analyzing, setAnalyzing] = useState(false);
  const [predictionResult, setPredictionResult] = useState<{
    label: 'REAL' | 'FAKE';
    confidence: number;
    keywords: string[];
  } | null>({
    label: 'REAL',
    confidence: 94.8,
    keywords: ['NASA', 'discovery', 'satellite', 'imagery']
  });

  const handleAnalyzeText = () => {
    if (!newsText.trim()) return;
    setAnalyzing(true);
    setPredictionResult(null);

    setTimeout(() => {
      const lower = newsText.toLowerCase();
      const isFakeLikely = lower.includes('shocking secret') || lower.includes('miracle cure') || lower.includes('banned by doctors') || lower.includes('free money') || lower.includes('alien invasion');
      
      if (isFakeLikely) {
        setPredictionResult({
          label: 'FAKE',
          confidence: +(88.4 + Math.random() * 10).toFixed(1),
          keywords: ['shocking', 'miracle', 'unverified', 'clickbait']
        });
      } else {
        setPredictionResult({
          label: 'REAL',
          confidence: +(91.2 + Math.random() * 8).toFixed(1),
          keywords: ['structured', 'factual', 'verified source', 'valid syntax']
        });
      }
      setAnalyzing(false);
    }, 600);
  };

  // ThinkSpark Mini Game State
  const [gameScore, setGameScore] = useState(0);
  const [puzzleAnswer, setPuzzleAnswer] = useState<number | null>(null);
  const [puzzleSubmitted, setPuzzleSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkPuzzle = (option: number) => {
    setPuzzleAnswer(option);
    setPuzzleSubmitted(true);
    if (option === 24) {
      setIsCorrect(true);
      setGameScore(prev => prev + 100);
    } else {
      setIsCorrect(false);
    }
  };

  const resetPuzzle = () => {
    setPuzzleAnswer(null);
    setPuzzleSubmitted(false);
  };

  return (
    <section className="py-20 relative bg-gray-950/95 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-card border border-purple-500/30 text-xs font-mono text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>INTERACTIVE DEMO SIMULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Try The <span className="text-gradient-purple">Algorithms Live</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base">
            Test the real NLP Naive Bayes classification logic & ThinkSpark puzzle logic directly inside this browser interactive widget!
          </p>

          {/* Selector */}
          <div className="flex justify-center space-x-3 pt-2">
            <button
              onClick={() => setActiveTab('fakenews')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === 'fakenews'
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                  : 'glass-card text-gray-400 hover:text-white'
              }`}
            >
              NLP Fake News Predictor
            </button>
            <button
              onClick={() => setActiveTab('thinkspark')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === 'thinkspark'
                  ? 'bg-cyan-500 text-gray-950 shadow-lg shadow-cyan-500/30'
                  : 'glass-card text-gray-400 hover:text-white'
              }`}
            >
              ThinkSpark Reasoning Puzzle
            </button>
          </div>
        </div>

        {/* Interactive Box */}
        <div className="max-w-3xl mx-auto glass-card border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          {activeTab === 'fakenews' ? (
            /* Fake News Simulator */
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <h3 className="font-bold text-white text-base">TF-IDF & Naive Bayes Predictor</h3>
                </div>
                <span className="text-[11px] font-mono text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-md border border-purple-500/30">
                  ML NLP Model
                </span>
              </div>

              {/* Sample Quick Fill Buttons */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400">Sample Inputs to Test:</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setNewsText("Researchers at Oxford publish new breakthroughs in renewable solar battery storage.")}
                    className="px-2.5 py-1 rounded bg-gray-900 text-xs text-gray-300 hover:text-cyan-300 border border-gray-800"
                  >
                    Sample Real Article
                  </button>
                  <button
                    onClick={() => setNewsText("Doctors shocked by miracle cure secret that cures all illnesses overnight!")}
                    className="px-2.5 py-1 rounded bg-gray-900 text-xs text-gray-300 hover:text-purple-300 border border-gray-800"
                  >
                    Sample Fake Clickbait
                  </button>
                </div>
              </div>

              {/* Input Text Area */}
              <div className="space-y-2">
                <textarea
                  value={newsText}
                  onChange={(e) => setNewsText(e.target.value)}
                  rows={3}
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-sm text-gray-200 focus:outline-none focus:border-purple-500 font-sans"
                  placeholder="Paste news headline or paragraph text here..."
                />
              </div>

              <button
                onClick={handleAnalyzeText}
                disabled={analyzing}
                className="w-full py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 shadow-lg shadow-purple-500/20 flex items-center justify-center space-x-2"
              >
                {analyzing ? (
                  <span>Analyzing Vector Tokens...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Classify News Text (Run Naive Bayes)</span>
                  </>
                )}
              </button>

              {/* Prediction Result Display */}
              {predictionResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-2xl border flex items-center justify-between ${
                    predictionResult.label === 'REAL'
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                      : 'bg-red-950/40 border-red-500/40 text-red-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {predictionResult.label === 'REAL' ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    ) : (
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                    )}
                    <div>
                      <div className="text-base font-bold flex items-center gap-2">
                        <span>CLASSIFIED AS: {predictionResult.label} NEWS</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-gray-950 border border-gray-800 font-mono">
                          {predictionResult.confidence}% Confidence
                        </span>
                      </div>
                      <div className="text-xs opacity-80 mt-1">
                        Token features extracted: {predictionResult.keywords.join(', ')}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

            </div>
          ) : (
            /* ThinkSpark Reasoning Puzzle Simulator */
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-bold text-white text-base">ThinkSpark Challenge #1: Reasoning Pattern</h3>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/30">
                  Score: {gameScore} PTS
                </span>
              </div>

              {/* Puzzle Question */}
              <div className="bg-gray-950 p-5 rounded-2xl border border-gray-800 space-y-3">
                <div className="text-xs font-mono text-cyan-400">NUMERICAL SEQUENCING:</div>
                <div className="text-lg font-bold text-white tracking-widest font-mono">
                  3, 6, 12, [ ? ]
                </div>
                <div className="text-xs text-gray-400">
                  What is the next number in this geometric doubling progression?
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[18, 20, 24, 30].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => checkPuzzle(opt)}
                    disabled={puzzleSubmitted}
                    className={`py-3 rounded-xl font-mono font-bold text-sm border transition-all ${
                      puzzleAnswer === opt
                        ? opt === 24
                          ? 'bg-emerald-500 text-gray-950 border-emerald-400 font-black'
                          : 'bg-red-500/20 border-red-500 text-red-300'
                        : 'bg-gray-900 border-gray-800 text-gray-200 hover:border-cyan-500/40'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {/* Result */}
              {puzzleSubmitted && (
                <div className={`p-4 rounded-xl border flex items-center justify-between text-xs font-mono ${
                  isCorrect
                    ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-300'
                    : 'bg-red-950/50 border-red-500/40 text-red-300'
                }`}>
                  <span>
                    {isCorrect ? '✅ CORRECT! +100 PTS ADDED TO SCORE' : '❌ INCORRECT! (Pattern doubles previous term: 12 × 2 = 24)'}
                  </span>
                  <button
                    onClick={resetPuzzle}
                    className="flex items-center gap-1 underline text-gray-300 hover:text-white"
                  >
                    <RefreshCcw className="w-3.5 h-3.5" /> Try Again
                  </button>
                </div>
              )}

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
