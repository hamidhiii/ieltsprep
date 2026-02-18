import { motion } from 'framer-motion';
import { Headphones, BookOpen, PenTool, Mic2, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Practice = () => {
    const sections = [
        {
            id: 'listening',
            icon: <Headphones className="w-8 h-8 text-blue-500" />,
            bg: "bg-blue-50",
            title: "Listening",
            count: "50+ Tests",
            description: "Authentic audio recordings for all question types.",
            topics: ['Multiple Choice', 'Note Completion', 'Matching', 'Labeling']
        },
        {
            id: 'reading',
            icon: <BookOpen className="w-8 h-8 text-emerald-500" />,
            bg: "bg-emerald-50",
            title: "Reading",
            count: "60+ Tests",
            description: "Academic and General Training passage sets.",
            topics: ['True/False/Not Given', 'Matching Headings', 'Summary Completion']
        },
        {
            id: 'writing',
            icon: <PenTool className="w-8 h-8 text-amber-500" />,
            bg: "bg-amber-50",
            title: "Writing",
            count: "40+ Tasks",
            description: "AI feedback on Task 1 and Task 2 essays.",
            topics: ['Report Writing', 'Letter Writing', 'Opinion Essays', 'Discussion']
        },
        {
            id: 'speaking',
            icon: <Mic2 className="w-8 h-8 text-pink-500" />,
            bg: "bg-pink-50",
            title: "Speaking",
            count: "30+ Sessions",
            description: "Real-time AI evaluation of your pronunciation.",
            topics: ['Introduction', 'Cue Card', 'Follow-up Questions']
        }
    ];

    return (
        <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold text-secondary mb-4">Practice Mode</h1>
                        <p className="text-gray-600">Focus on specific sections to master each skill individually. Every practice session includes detailed AI feedback.</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center gap-4 border border-gray-100">
                        <div className="bg-amber-100 p-2 rounded-xl text-amber-600"><Star className="w-5 h-5 fill-current" /></div>
                        <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Current Streak</p>
                            <p className="text-xl font-bold text-secondary">12 Days 🔥</p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[32px] border border-gray-100 flex flex-col sm:flex-row gap-8 hover:shadow-xl hover:border-primary/20 transition-all transition-duration-500"
                        >
                            <div className={`${section.bg} w-20 h-20 rounded-3xl flex items-center justify-center shrink-0`}>
                                {section.icon}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-2xl font-bold text-secondary">{section.title}</h3>
                                    <span className="text-xs font-bold text-primary bg-primary/5 px-3 py-1 rounded-full">{section.count}</span>
                                </div>
                                <p className="text-gray-500 mb-6">{section.description}</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {section.topics.map((topic, tIndex) => (
                                        <span key={tIndex} className="text-[10px] font-bold text-gray-400 bg-gray-50 border border-gray-100 px-2 py-1 rounded-md">
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                                <Link to="/mock-tests" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                                    Browse Tests <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Practice;
