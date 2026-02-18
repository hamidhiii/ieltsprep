import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Timer, ShieldAlert, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { fullMockTests, readingTests, listeningTests, writingTests } from '../data/mockTests';

const ExamView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(180 * 60); // 3 hours in seconds
    const [isFinished, setIsFinished] = useState(false);

    // Find the test
    const test = [...fullMockTests, ...readingTests, ...listeningTests, ...writingTests].find(t => t.id === id);

    useEffect(() => {
        if (!test) return;

        // Adjust time based on test type
        if (test.type === 'Reading') setTimeLeft(60 * 60);
        if (test.type === 'Listening') setTimeLeft(30 * 60);
        if (test.type === 'Writing') setTimeLeft(60 * 60);

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setIsFinished(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [test]);

    if (!test) return <div>Test not found</div>;

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h > 0 ? h + ':' : ''}${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    };

    if (isFinished) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full text-center"
                >
                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h1 className="text-3xl font-bold text-secondary mb-4">Exam Submitted!</h1>
                    <p className="text-gray-600 mb-8">Your answers are being evaluated by our AI. You will receive your band score in a few seconds.</p>
                    <button
                        onClick={() => navigate('/mock-tests')}
                        className="bg-primary text-white px-8 py-4 rounded-xl font-bold w-full hover:bg-primary-dark transition-all"
                    >
                        Back to Mock Tests
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col pt-20">
            {/* Exam Header */}
            <header className="bg-white border-b border-gray-200 sticky top-20 z-40 px-6 py-4 shadow-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button onClick={() => navigate('/mock-tests')} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <ArrowLeft className="w-5 h-5 text-gray-400" />
                        </button>
                        <div>
                            <h2 className="font-bold text-secondary">{test.title}</h2>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{test.type} Mode ACTIVE</p>
                        </div>
                    </div>
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 ${timeLeft < 300 ? 'border-red-200 bg-red-50 text-red-600 animate-pulse' : 'border-primary/20 bg-primary/5 text-primary'} font-mono text-xl font-bold`}>
                        <Timer className="w-5 h-5" /> {formatTime(timeLeft)}
                    </div>
                    <button
                        onClick={() => setIsFinished(true)}
                        className="bg-secondary text-white px-6 py-2 rounded-lg font-bold hover:bg-black transition-all"
                    >
                        Finish Exam
                    </button>
                </div>
            </header>

            {/* Exam Content */}
            <main className="flex-1 overflow-auto p-6 lg:p-12">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-[32px] p-8 lg:p-16 shadow-xl border border-gray-100 min-h-[70vh]">
                        <div className="mb-12 flex items-center gap-3 text-red-500 bg-red-50 px-4 py-2 rounded-lg border border-red-100 w-fit">
                            <ShieldAlert className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">Exam Lockdown Mode Active</span>
                        </div>

                        {test.type === 'Full Mock' ? (
                            <div className="space-y-16">
                                <div className="p-8 bg-blue-50 rounded-[32px] border border-blue-100">
                                    <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                                        <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</div>
                                        Listening Section (30 Minutes)
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">Listen to the recordings carefully and answer questions 1-40. You will hear the recordings only once.</p>
                                    <div className="bg-white border border-blue-100 p-4 rounded-xl flex items-center gap-4">
                                        <div className="bg-blue-100 p-3 rounded-lg text-blue-600">Audio Player Placeholder</div>
                                        <div className="h-1.5 bg-gray-100 flex-1 rounded-full overflow-hidden">
                                            <div className="bg-blue-500 h-full w-1/3"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 bg-emerald-50 rounded-[32px] border border-emerald-100 opacity-50 grayscale pointer-events-none">
                                    <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                                        <div className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</div>
                                        Reading Section (60 Minutes)
                                    </h3>
                                    <p className="text-gray-600">Start after finishing Listening.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="prose max-w-none">
                                <h1 className="text-3xl font-bold text-secondary mb-8">{test.title}</h1>
                                {'sections' in test && (test as any).sections.map((s: any, i: number) => (
                                    <div key={i} className="mb-12">
                                        <h3 className="text-xl font-bold text-secondary mb-4">{s.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-lg mb-8">{s.content}</p>
                                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                            <h4 className="font-bold mb-4">Questions:</h4>
                                            <p className="text-gray-600 italic whitespace-pre-line">{s.questions}</p>
                                        </div>
                                    </div>
                                ))}
                                {'task1' in test && (
                                    <div className="space-y-12">
                                        <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100 shadow-sm">
                                            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                                <div className="bg-amber-500 text-white text-xs px-2 py-1 rounded">Task 1</div>
                                                Writing Task 1
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed font-medium">{(test as any).task1}</p>
                                        </div>
                                        <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100 shadow-sm">
                                            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                                <div className="bg-amber-500 text-white text-xs px-2 py-1 rounded">Task 2</div>
                                                Writing Task 2
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed font-medium">{(test as any).task2}</p>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-sm font-bold text-secondary uppercase tracking-widest">Type your essay here:</label>
                                            <textarea className="w-full bg-white border border-gray-200 rounded-2xl p-6 min-h-[300px] outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all shadow-inner" placeholder="Start typing your answer..."></textarea>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Pagination Controls */}
            <footer className="bg-white border-t border-gray-200 p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <span className="text-sm text-gray-400 font-medium">Section 1 of 3</span>
                    <div className="flex gap-4">
                        <button className="px-6 py-2 rounded-lg border border-gray-200 font-bold text-gray-500 opacity-50" disabled>Previous</button>
                        <button className="px-6 py-2 rounded-lg bg-primary text-white font-bold flex items-center gap-2 hover:bg-primary-dark transition-all">
                            Next Section <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ExamView;
