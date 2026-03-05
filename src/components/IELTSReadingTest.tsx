import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Timer,
    ShieldAlert,
    CheckCircle,
    ArrowRight,
    ArrowLeft,
    AlertTriangle,
    Lock,
    Monitor,
    Zap,
    Home,
    RotateCcw,
    Highlighter,
    Eraser
} from 'lucide-react';
import { READING_TESTS } from '../data/readingData';
import Test1Content from './reading/Test1Content';
import Test2Content from './reading/Test2Content';

const IELTSReadingTest = () => {
    const navigate = useNavigate();
    const [currentPassage, setCurrentPassage] = useState(0);
    const [answers, setAnswers] = useState<Record<string, any>>({});
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState<{ correct: number; total: number; band: string } | null>(null);
    const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes
    const [lockdownWarning, setLockdownWarning] = useState(false);
    const [testStarted, setTestStarted] = useState(false);
    const [splitWidth, setSplitWidth] = useState(50); // percentage for passage
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Highlighting Logic (Persistent)
    const handleHighlight = () => {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return;

        const range = selection.getRangeAt(0);

        // Find if selection is within passage-content
        let node: Node | null = range.commonAncestorContainer;
        let isPassage = false;
        while (node) {
            if (node instanceof HTMLElement && (node.className.includes('passage-content') || node.className.includes('prose'))) {
                isPassage = true;
                break;
            }
            node = node.parentNode;
        }

        if (!isPassage) return;

        const span = document.createElement('mark');
        span.className = 'bg-amber-200 text-amber-900 rounded-sm px-0.5 pointer-events-none highlight-item';

        try {
            range.surroundContents(span);
            selection.removeAllRanges();
        } catch (e) {
            console.warn("Complex selection highlight failed", e);
        }
    };

    const clearHighlights = () => {
        const highlights = document.querySelectorAll('.highlight-item');
        highlights.forEach(h => {
            const parent = h.parentNode;
            if (parent) {
                while (h.firstChild) {
                    parent.insertBefore(h.firstChild, h);
                }
                parent.removeChild(h);
            }
        });
        window.getSelection()?.removeAllRanges();
    };

    // Lockdown Monitoring
    useEffect(() => {
        if (!testStarted || isFinished) return;

        const handleVisibilityChange = () => {
            if (document.hidden) setLockdownWarning(true);
        };

        const handleBlur = () => setLockdownWarning(true);

        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) setLockdownWarning(true);
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('blur', handleBlur);
        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('blur', handleBlur);
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, [testStarted, isFinished]);

    // Timer
    useEffect(() => {
        if (!testStarted || isFinished || timeLeft <= 0) return;
        const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [testStarted, isFinished, timeLeft]);

    useEffect(() => {
        if (timeLeft === 0) finishTest();
    }, [timeLeft]);

    // Resizer Logic
    const startResizing = () => setIsResizing(true);
    const stopResizing = () => setIsResizing(false);
    const resize = (e: MouseEvent) => {
        if (!isResizing) return;
        const newWidth = (e.clientX / window.innerWidth) * 100;
        if (newWidth > 20 && newWidth < 80) setSplitWidth(newWidth);
    };

    useEffect(() => {
        if (isResizing) {
            window.addEventListener('mousemove', resize);
            window.addEventListener('mouseup', stopResizing);
        }
        return () => {
            window.removeEventListener('mousemove', resize);
            window.removeEventListener('mouseup', stopResizing);
        };
    }, [isResizing]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    const calculateBand = (rawScore: number) => {
        if (rawScore >= 39) return "9.0";
        if (rawScore >= 37) return "8.5";
        if (rawScore >= 35) return "8.0";
        if (rawScore >= 33) return "7.5";
        if (rawScore >= 30) return "7.0";
        if (rawScore >= 27) return "6.5";
        if (rawScore >= 23) return "6.0";
        if (rawScore >= 19) return "5.5";
        if (rawScore >= 15) return "5.0";
        return "4.0";
    };

    const startExam = async () => {
        try {
            if (containerRef.current) {
                await containerRef.current.requestFullscreen();
                setTestStarted(true);
            }
        } catch (err) {
            console.error("Fullscreen failed:", err);
            setTestStarted(true); // Fallback
        }
    };

    const { id } = useParams<{ id: string }>();
    const testData = id ? READING_TESTS[id] : READING_TESTS['r1'];
    const CORRECT_ANSWERS = testData?.correctAnswers || READING_TESTS['r1'].correctAnswers;

    const finishTest = () => {
        let correctCount = 0;
        const total = 40;

        Object.keys(CORRECT_ANSWERS).forEach(key => {
            const userAnswer = answers[key];
            const correctAnswer = CORRECT_ANSWERS[key];

            if (userAnswer) {
                if (Array.isArray(correctAnswer)) {
                    // Not used in this reading test, but keeping pattern
                } else if (typeof userAnswer === 'string' && typeof correctAnswer === 'string') {
                    if (userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
                        correctCount++;
                    }
                }
            }
        });

        setScore({
            correct: correctCount,
            total,
            band: calculateBand(correctCount)
        });
        setIsFinished(true);
    };

    const handleAnswer = (qKey: string, value: string) => {
        setAnswers(prev => ({ ...prev, [qKey]: value }));
    };

    const resumeTest = async () => {
        try {
            if (containerRef.current && !document.fullscreenElement) {
                await containerRef.current.requestFullscreen();
            }
            setLockdownWarning(false);
        } catch (err) {
            setLockdownWarning(false);
        }
    };

    if (isFinished && score) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-xl w-full text-center"
                >
                    <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-primary shadow-inner">
                        <CheckCircle className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl font-black text-secondary mb-2 uppercase tracking-tight">Reading Completed</h1>
                    <p className="text-gray-500 mb-12 font-medium">Your reading performance has been analyzed.</p>

                    <div className="grid grid-cols-2 gap-4 mb-12">
                        <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                            <div className="text-5xl font-black text-primary mb-2 tracking-tighter">{score.correct}/{score.total}</div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Raw Score</div>
                        </div>
                        <div className="bg-secondary text-white p-8 rounded-[32px] shadow-xl shadow-secondary/20">
                            <div className="text-5xl font-black mb-2 tracking-tighter">{score.band}</div>
                            <div className="text-xs font-bold text-white/60 uppercase tracking-widest">Band Score</div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-8">
                        <button
                            onClick={() => {
                                if (document.fullscreenElement) document.exitFullscreen();
                                navigate('/');
                            }}
                            className="flex-1 bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-secondary transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
                        >
                            <Home className="w-5 h-5" />
                            Return to Home
                        </button>
                        <button
                            onClick={() => window.location.reload()}
                            className="flex-1 bg-white text-secondary border-2 border-secondary/10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-50 transition-all flex items-center justify-center gap-3"
                        >
                            <RotateCcw className="w-5 h-5" />
                            Retake Test
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    if (!testStarted) {
        return (
            <div ref={containerRef} className="min-h-screen bg-secondary flex items-center justify-center p-6 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl w-full bg-white p-12 rounded-[48px] shadow-2xl text-center space-y-8"
                >
                    <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto text-primary">
                        <Monitor className="w-10 h-10" />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-secondary uppercase tracking-tight">Security Protocol Check</h1>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">
                            This Reading exam requires a secure environment. Clicking below will enter <span className="text-primary font-bold">Lockdown Mode</span>:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <div className="p-4 bg-gray-50 rounded-2xl flex gap-3">
                            <Zap className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                            <p className="text-sm font-bold text-secondary/70">Automatic Fullscreen</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-2xl flex gap-3">
                            <Lock className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                            <p className="text-sm font-bold text-secondary/70">Tab Monitoring</p>
                        </div>
                    </div>

                    <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100/50 flex gap-4 text-left items-start">
                        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                        <p className="text-sm text-amber-800 font-medium leading-relaxed">
                            Exiting fullscreen or switching apps will pause your time and trigger a security alert.
                        </p>
                    </div>

                    <button
                        onClick={startExam}
                        className="w-full bg-primary text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] transform active:scale-95 transition-all shadow-xl shadow-primary/20 hover:bg-primary-dark"
                    >
                        Enter Secure Exam Environment
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="min-h-screen bg-[#FDFDFD] text-secondary font-sans selection:bg-primary/20 select-none overflow-hidden flex flex-col">
            {/* Lockdown Warning */}
            <AnimatePresence>
                {lockdownWarning && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-secondary/95 backdrop-blur-xl flex items-center justify-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="bg-white max-w-lg w-full p-10 rounded-[40px] shadow-2xl text-center space-y-8"
                        >
                            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto text-red-600 animate-pulse">
                                <ShieldAlert className="w-12 h-12" />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter">Security Alert</h2>
                                <p className="text-gray-500 font-medium leading-relaxed">
                                    A potential security breach was detected (tab switch or exit from fullscreen). For security reasons, the test has been paused.
                                </p>
                            </div>
                            <button
                                onClick={resumeTest}
                                className="w-full bg-secondary text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-black transition-colors"
                            >
                                Resume Exam
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header */}
            <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-6">
                    <div className="bg-primary text-white px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest">
                        Reading
                    </div>
                    <div className="h-4 w-[1px] bg-gray-200" />
                    <h1 className="font-bold text-gray-400 text-sm uppercase tracking-widest">Passage {currentPassage + 1} of 3</h1>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleHighlight}
                            className="bg-amber-100 text-amber-600 p-2.5 rounded-xl hover:bg-amber-200 transition-colors flex items-center gap-2 font-bold text-xs uppercase tracking-widest"
                            title="Highlight Selected Text"
                        >
                            <Highlighter className="w-4 h-4" />
                            Highlight
                        </button>
                        <button
                            onClick={clearHighlights}
                            className="bg-gray-100 text-gray-400 p-2.5 rounded-xl hover:bg-gray-200 transition-colors"
                            title="Clear Highlights"
                        >
                            <Eraser className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="flex items-center gap-3 bg-gray-50 px-6 py-2.5 rounded-2xl border border-gray-100 shadow-inner">
                        <Timer className={`w-5 h-5 ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-primary'}`} />
                        <span className={`font-mono text-xl font-bold ${timeLeft < 300 ? 'text-red-500' : 'text-secondary'}`}>
                            {formatTime(timeLeft)}
                        </span>
                    </div>
                </div>

                <button
                    onClick={finishTest}
                    className="bg-secondary text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-primary transition-all shadow-lg shadow-secondary/10"
                >
                    Submit Test
                </button>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex overflow-hidden relative">
                {id === 'r2' ? (
                    <Test2Content
                        currentPassage={currentPassage}
                        answers={answers}
                        handleAnswer={handleAnswer}
                        splitWidth={splitWidth}
                        startResizing={startResizing}
                    />
                ) : (
                    <Test1Content
                        currentPassage={currentPassage}
                        answers={answers}
                        handleAnswer={handleAnswer}
                        splitWidth={splitWidth}
                        startResizing={startResizing}
                    />
                )}
            </main>

            {/* Bottom Nav */}
            <footer className="bg-white border-t border-gray-100 px-8 py-5 flex items-center justify-between z-10">
                <div className="flex gap-2">
                    {[0, 1, 2].map(idx => (
                        <button
                            key={idx}
                            onClick={() => setCurrentPassage(idx)}
                            className={`px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${currentPassage === idx ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                        >
                            Passage {idx + 1}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex -space-x-1 shrink-0 overflow-hidden px-2">
                        {Array.from({ length: 40 }).map((_, i) => {
                            const qId = `q${i + 1}`;
                            const isAnswered = !!answers[qId];
                            return (
                                <div
                                    key={i}
                                    className={`w-1.5 h-6 rounded-full border border-white transition-colors duration-500 ${isAnswered ? 'bg-primary' : 'bg-gray-100'}`}
                                />
                            );
                        })}
                    </div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Progress</p>
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={() => setCurrentPassage(p => Math.max(0, p - 1))}
                        disabled={currentPassage === 0}
                        className="p-4 bg-gray-50 text-gray-400 rounded-2xl hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-gray-50 transition-all border border-gray-100"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setCurrentPassage(p => Math.min(2, p + 1))}
                        disabled={currentPassage === 2}
                        className="p-4 bg-gray-50 text-gray-400 rounded-2xl hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-gray-50 transition-all border border-gray-100"
                    >
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default IELTSReadingTest;
