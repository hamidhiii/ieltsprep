import { motion } from 'framer-motion';
import { BookOpen, Clock, BarChart3, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { readingTests, listeningTests, writingTests, fullMockTests } from '../data/mockTests';

const MockTests = () => {
    const allTests = [
        { type: 'Full Mock', data: fullMockTests, premium: true },
        { type: 'Reading', data: readingTests },
        { type: 'Listening', data: listeningTests },
        { type: 'Writing', data: writingTests },
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
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {category.data.map((test) => (
                                    <motion.div
                                        key={test.id}
                                        whileHover={{ y: -5 }}
                                        className={`bg-white p-6 rounded-2xl border transition-all ${category.type === 'Full Mock'
                                            ? 'border-primary/30 ring-4 ring-primary/5 shadow-xl'
                                            : 'border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20'
                                            }`}
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="font-bold text-secondary line-clamp-2 h-12 flex-1">{test.title}</h3>
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
                                        <Link
                                            to={`/test/${test.id}`}
                                            className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group ${category.type === 'Full Mock'
                                                ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20'
                                                : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                                                }`}>
                                            Start Test <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
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
