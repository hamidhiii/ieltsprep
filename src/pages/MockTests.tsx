import { motion } from 'framer-motion';
import { BookOpen, Clock, BarChart3, ArrowRight, ShieldCheck, Mic2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { readingTests, listeningTests, writingTests } from '../data/mockTests';

const MockTests = () => {
    const allTests = [
        { type: 'Reading', data: readingTests },
        { type: 'Listening', data: listeningTests },
        { type: 'Writing', data: writingTests, status: 'Soon' },
        { type: 'Speaking', data: [], status: 'Soon' },
    ];

    return (
        <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="container-custom">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-secondary mb-4">All Mock Tests</h1>
                    <p className="text-gray-600">Practice with real exam-like tests and get instant AI feedback.</p>
                </div>

                <div className="space-y-16">
                    {allTests.map((category) => (
                        <div key={category.type}>
                            <h2 className="text-2xl font-bold text-secondary mb-8 flex items-center gap-2">
                                {category.type === 'Full Mock' ? (
                                    <ShieldCheck className="text-primary w-7 h-7" />
                                ) : (
                                    <BookOpen className="text-primary" />
                                )}
                                {category.type} Tests
                                {category.type === 'Full Mock' && (
                                    <span className="ml-2 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                                        3 Hours • All Sections
                                    </span>
                                )}
                                {category.status === 'Soon' && (
                                    <span className="ml-2 text-[10px] bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full border border-amber-200 uppercase tracking-widest font-black">
                                        Soon
                                    </span>
                                )}
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {category.type === 'Speaking' && (
                                    <div className="bg-white/50 p-8 rounded-3xl border-2 border-dashed border-gray-100 flex flex-col items-center justify-center text-center space-y-4 lg:col-span-2">
                                        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300">
                                            <Mic2 className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-secondary mb-1 text-lg">Speaking Module</h4>
                                            <p className="text-sm text-gray-400 max-w-[200px]">Real-time AI speaking evaluations are being prepared.</p>
                                        </div>
                                    </div>
                                )}
                                {category.data.map((test) => (
                                    <motion.div
                                        key={test.id}
                                        whileHover={category.status !== 'Soon' ? { y: -5 } : {}}
                                        className={`bg-white p-6 rounded-2xl border transition-all ${category.type === 'Full Mock'
                                            ? 'border-primary/30 ring-4 ring-primary/5 shadow-xl'
                                            : category.status === 'Soon'
                                                ? 'border-gray-100 opacity-75 grayscale-[0.5]'
                                                : 'border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20'
                                            }`}
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex-1">
                                                <h3 className="font-bold text-secondary line-clamp-2 h-12">{test.title}</h3>
                                                {category.status === 'Soon' && (
                                                    <span className="text-[10px] font-black text-amber-500 uppercase tracking-tighter">Under Development</span>
                                                )}
                                            </div>
                                            {category.type === 'Full Mock' && (
                                                <div className="bg-primary text-white p-1.5 rounded-lg shrink-0 ml-2">
                                                    <ShieldCheck className="w-4 h-4" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <Clock className="w-4 h-4" /> {'duration' in test ? test.duration : '60 mins'}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <BarChart3 className="w-4 h-4" /> {'questions' in test ? `${test.questions} questions` : '2 Tasks'}
                                            </div>
                                        </div>
                                        {category.status === 'Soon' ? (
                                            <button
                                                disabled
                                                className="w-full py-3 rounded-xl font-bold bg-gray-50 text-gray-300 cursor-not-allowed flex items-center justify-center gap-2"
                                            >
                                                Coming Soon
                                            </button>
                                        ) : (
                                            <Link
                                                to={category.type === 'Listening' ? `/listening-test/${test.id}` : category.type === 'Reading' ? `/reading-test/${test.id}` : `/test/${test.id}`}
                                                className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group ${category.type === 'Full Mock'
                                                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20'
                                                    : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                                                    }`}>
                                                Start Test <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default MockTests;
