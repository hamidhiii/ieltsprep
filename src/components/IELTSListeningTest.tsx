import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LISTENING_TESTS } from '../data/listeningData';
import { Test1Content } from './listening/Test1Content';
import { Test2Content } from './listening/Test2Content';

import {
    Timer,
    ShieldAlert,
    CheckCircle,
    ArrowRight,
    ArrowLeft,
    Play,
    Pause,
    Volume2,
    AlertTriangle,
    Lock,
    Monitor,
    Zap
} from 'lucide-react';

// Hardcoded answers removed, now loaded dynamically from LISTENING_TESTS

const IELTSListeningTest = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Load test data
    const testData = id ? LISTENING_TESTS[id] : LISTENING_TESTS['l1'];
    const CORRECT_ANSWERS = testData?.correctAnswers || {};

    const [currentPart, setCurrentPart] = useState(0);
    const [answers, setAnswers] = useState<Record<number, any>>({});
    const [isFinished, setIsFinished] = useState(false);
    const [testStarted, setTestStarted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes
    const [isLockdownActive] = useState(true);
    const [showLockdownWarning, setShowLockdownWarning] = useState(false);
    const [score, setScore] = useState<any>(null);

    // Audio state
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const audioFiles = testData?.audio || [];

    // Sync Play/Pause state with Audio Element
    useEffect(() => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.play().catch(err => {
                console.error("Playback failed:", err);
                setIsPlaying(false);
            });
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    // Handle audio changes when part changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            setIsPlaying(false);
            setCurrentTime(0);
        }
    }, [currentPart]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleAudioEnded = () => {
        setIsPlaying(false);
    };

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (audioRef.current) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = x / rect.width;
            audioRef.current.currentTime = percentage * duration;
        }
    };

    // Lockdown protection
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (testStarted && !isFinished && isLockdownActive) {
                e.preventDefault();
                e.returnValue = '';
            }
        };

        const handleVisibilityChange = () => {
            if (document.hidden && testStarted && !isFinished && isLockdownActive) {
                setShowLockdownWarning(true);
            }
        };

        const handleBlur = () => {
            if (testStarted && !isFinished && isLockdownActive) {
                setShowLockdownWarning(true);
            }
        };

        const handleFullscreenChange = () => {
            if (!document.fullscreenElement && testStarted && !isFinished && isLockdownActive) {
                setShowLockdownWarning(true);
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('blur', handleBlur);
        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('blur', handleBlur);
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, [isFinished, isLockdownActive, testStarted]);

    // Timer logic
    useEffect(() => {
        if (isFinished || timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [isFinished, timeLeft]);

    const formatTime = (seconds: number) => {
        if (isNaN(seconds)) return "00:00";
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const calculateScore = () => {
        let correctCount = 0;
        Object.keys(CORRECT_ANSWERS).forEach((key) => {
            const qId = parseInt(key);
            const userAnswer = answers[qId];
            const correctAnswer = (CORRECT_ANSWERS as any)[qId];

            if (Array.isArray(correctAnswer)) {
                if (Array.isArray(userAnswer)) {
                    const isMatch = correctAnswer.length === userAnswer.length &&
                        correctAnswer.every(a => userAnswer.includes(a));
                    if (isMatch) correctCount++;
                }
            } else {
                if (userAnswer?.toString().toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
                    correctCount++;
                }
            }
        });

        // Band score mapping (rough IELTS listening scale)
        let bandScore = 0;
        if (correctCount >= 39) bandScore = 9;
        else if (correctCount >= 37) bandScore = 8.5;
        else if (correctCount >= 35) bandScore = 8;
        else if (correctCount >= 32) bandScore = 7.5;
        else if (correctCount >= 30) bandScore = 7;
        else if (correctCount >= 26) bandScore = 6.5;
        else if (correctCount >= 23) bandScore = 6;
        else if (correctCount >= 19) bandScore = 5.5;
        else if (correctCount >= 15) bandScore = 5;
        else if (correctCount >= 12) bandScore = 4.5;
        else if (correctCount >= 9) bandScore = 4;
        else bandScore = 3.5;

        setScore({
            correct: correctCount,
            total: 40,
            band: bandScore
        });
        setIsFinished(true);
    };

    const startExam = async () => {
        try {
            const element = document.documentElement;
            if (element.requestFullscreen) {
                await element.requestFullscreen();
            }
            setTestStarted(true);
        } catch (err) {
            console.error("Fullscreen error:", err);
            setTestStarted(true); // Fallback to start even if fullscreen fails
        }
    };

    const saveAnswer = (qId: number, value: any) => {
        setAnswers(prev => ({ ...prev, [qId]: value }));
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
                    <h1 className="text-4xl font-black text-secondary mb-2 uppercase tracking-tight">Test Completed</h1>
                    <p className="text-gray-500 mb-12 font-medium">Your interactive listening score has been processed.</p>

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

                    <button
                        onClick={() => {
                            if (document.fullscreenElement) {
                                document.exitFullscreen();
                            }
                            navigate('/');
                        }}
                        className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                    >
                        Return to Home Page
                    </button>
                </motion.div>
            </div>
        );
    }

    if (!testStarted) {
        return (
            <div className="min-h-screen bg-secondary flex items-center justify-center p-6 overflow-hidden">
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
                            This exam requires a secure environment. Clicking the button below will enter <span className="text-primary font-bold">Lockdown Mode</span>, which includes:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <div className="p-4 bg-gray-50 rounded-2xl flex gap-3">
                            <Zap className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                            <p className="text-sm font-bold text-secondary/70">Automatic Fullscreen Activation</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-2xl flex gap-3">
                            <Lock className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                            <p className="text-sm font-bold text-secondary/70">Tab & App Switch Monitoring</p>
                        </div>
                    </div>

                    <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100/50 flex gap-4 text-left items-start">
                        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                        <p className="text-sm text-amber-800 font-medium leading-relaxed">
                            Exiting fullscreen or attempting to switch applications will trigger an immediate security alert.
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
        <div className="min-h-screen bg-[#FDFDFD] text-secondary font-sans selection:bg-primary/20 select-none">
            {/* Lockdown Warning Modal */}
            <AnimatePresence>
                {showLockdownWarning && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-secondary/80 backdrop-blur-sm flex items-center justify-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="bg-white p-10 rounded-[40px] max-w-md w-full text-center shadow-2xl"
                        >
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
                                <ShieldAlert className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Security Alert</h3>
                            <p className="text-gray-500 mb-8 font-medium leading-relaxed">
                                You switched tabs during the exam. Continuous violations of Lockdown Mode may result in test disqualification.
                            </p>
                            <button
                                onClick={() => setShowLockdownWarning(false)}
                                className="w-full bg-secondary text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-black transition-all"
                            >
                                Return to Exam
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50 h-20 px-8 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white text-xs font-black italic">IDP</div>
                        <span className="font-black text-xl tracking-tighter uppercase italic">IELTS Simulation</span>
                    </div>
                    <div className="h-6 w-px bg-gray-200" />
                    <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <div className="flex items-center gap-2 text-primary">
                            <Lock className="w-3 h-3" />
                            Lockdown Active
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-2xl flex items-center gap-3 font-mono text-xl font-black ${timeLeft < 300 ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-secondary'}`}>
                        <Timer className="w-5 h-5" />
                        {formatTime(timeLeft)}
                    </div>
                    <button
                        onClick={calculateScore}
                        className="bg-secondary text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-all shadow-lg shadow-secondary/10"
                    >
                        Submit
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-32 pb-40 px-8 max-w-[1280px] mx-auto grid grid-cols-12 gap-12">
                {/* Left: Test Info & Progress */}
                <aside className="col-span-3">
                    <div className="sticky top-32 space-y-4">
                        <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm">
                            <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 block">Part {currentPart + 1}</div>
                            <h1 className="text-2xl font-black mb-6 leading-tight uppercase tracking-tight">Listening Simulation Test</h1>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                                        <span>Overall Progress</span>
                                        <span>{Object.keys(answers).length}/40</span>
                                    </div>
                                    {/* Progress Bar */}
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-6">
                                        <motion.div
                                            className="bg-primary h-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(Object.keys(answers).length / 40) * 100}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    {[0, 1, 2, 3].map(i => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentPart(i)}
                                            className={`py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${currentPart === i ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                                        >
                                            Part {i + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-secondary/5 rounded-[32px] border border-secondary/10">
                            <div className="flex items-center gap-2 text-xs font-bold text-secondary mb-4">
                                <AlertTriangle className="w-4 h-4 text-amber-500" />
                                Instructions
                            </div>
                            <p className="text-xs text-secondary/60 font-medium leading-relaxed">
                                Listen to the recording carefully. Answer all questions as you listen. You will only hear the recording once.
                            </p>
                        </div>
                    </div>
                </aside>

                {/* Right: Questions Area */}
                <section className="col-span-9 bg-white border border-gray-100 rounded-[48px] p-16 shadow-sm min-h-[1200px]">
                    {/* Audio Player */}
                    <div className="bg-secondary/5 border border-secondary/10 p-6 rounded-[24px] mb-8 flex items-center gap-6">
                        <audio
                            ref={audioRef}
                            src={audioFiles[currentPart]}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                            onEnded={handleAudioEnded}
                            preload="auto"
                        />
                        <button
                            onClick={togglePlay}
                            className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-all shadow-lg shrink-0"
                            type="button"
                        >
                            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                        </button>
                        <div className="flex-1">
                            <div className="flex justify-between text-xs font-bold text-secondary/60 uppercase tracking-wider mb-2">
                                <span>Part {currentPart + 1} Recording</span>
                                <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                            </div>
                            <div
                                className="bg-secondary/10 h-1.5 rounded-full overflow-hidden cursor-pointer group relative"
                                onClick={handleSeek}
                            >
                                <div
                                    className="bg-primary h-full transition-all"
                                    style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                                />
                            </div>
                        </div>
                        <Volume2 className="text-secondary/40 w-5 h-5" />
                    </div>

                    <div className="prose prose-slate max-w-none">
                        {id === 'l1' ? (
                            <Test1Content
                                answers={answers}
                                saveAnswer={saveAnswer}
                                currentPart={currentPart}
                            />
                        ) : (
                            <Test2Content
                                answers={answers}
                                saveAnswer={saveAnswer}
                                currentPart={currentPart}
                            />
                        )}
                    </div>
                </section>
            </main>

            {/* Footer Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 h-24 px-8 flex items-center justify-between z-50">
                <button
                    onClick={() => setCurrentPart(Math.max(0, currentPart - 1))}
                    disabled={currentPart === 0}
                    className="flex items-center gap-3 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-secondary hover:bg-gray-50 disabled:opacity-20 transition-all"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Previous Part
                </button>

                <div className="flex gap-1.5">
                    {[0, 1, 2, 3].map(i => (
                        <div key={i} className={`h-1.5 w-8 rounded-full transition-all ${currentPart === i ? 'bg-primary' : 'bg-gray-100'}`} />
                    ))}
                </div>

                <button
                    onClick={() => setCurrentPart(Math.min(3, currentPart + 1))}
                    disabled={currentPart === 3}
                    className="flex items-center gap-3 px-8 py-4 bg-gray-50 rounded-2xl font-black uppercase tracking-widest text-secondary hover:bg-gray-100 disabled:opacity-20 transition-all"
                >
                    Next Part
                    <ArrowRight className="w-5 h-5" />
                </button>
            </nav>
        </div>
    );
};

export default IELTSListeningTest;
