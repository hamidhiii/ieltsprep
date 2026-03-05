import React from 'react';
import { Headphones, BookOpen, PenTool, Mic2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TestSections = () => {
    const sections = [
        {
            icon: <Headphones className="w-6 h-6 text-blue-500" />,
            bg: "bg-blue-50",
            title: "Listening Tests",
            count: "50+ Tests",
            description: "Practice with authentic audio recordings and improve your listening comprehension under timed conditions."
        },
        {
            icon: <BookOpen className="w-6 h-6 text-emerald-500" />,
            bg: "bg-emerald-50",
            title: "Reading Tests",
            count: "60+ Tests",
            description: "Sharpen your reading skills with diverse passages from academic and general training modules."
        },
        {
            icon: <PenTool className="w-6 h-6 text-amber-500" />,
            bg: "bg-amber-50",
            title: "Writing Tasks",
            count: "Under Dev",
            isSoon: true,
            description: "Improve your Task 1 and Task 2 writing with AI feedback on coherence, grammar, and vocabulary."
        },
        {
            icon: <Mic2 className="w-6 h-6 text-pink-500" />,
            bg: "bg-pink-50",
            title: "Speaking Practice",
            count: "Under Dev",
            isSoon: true,
            description: "Record your responses to real IELTS speaking prompts and receive detailed AI pronunciation feedback."
        }
    ];

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container-custom text-center">
                <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Test Sections</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 text-balance">Practice every section of the IELTS</h2>
                <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
                    Target your weak areas or practice specific modules. Each section is carefully crafted to mirror real IELTS questions.
                </p>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 sm:p-10 rounded-[32px] border bg-white transition-all group relative overflow-hidden ${section.isSoon ? 'border-gray-100 opacity-80' : 'border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5'}`}
                        >
                            {section.isSoon && (
                                <div className="absolute top-6 right-6 z-10">
                                    <span className="bg-amber-100 text-amber-600 text-[10px] font-black px-4 py-1.5 rounded-full border border-amber-200 uppercase tracking-widest shadow-sm">
                                        COMING SOON
                                    </span>
                                </div>
                            )}
                            <div className="flex justify-between items-start mb-8">
                                <div className={`${section.bg} p-4 rounded-2xl`}>
                                    {section.icon}
                                </div>
                                {!section.isSoon && (
                                    <div className="text-sm font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                                        {section.count}
                                    </div>
                                )}
                            </div>
                            <h3 className="text-2xl font-bold text-secondary mb-4">{section.title}</h3>
                            <p className="text-gray-600 mb-10 leading-relaxed text-lg">{section.description}</p>

                            {section.isSoon ? (
                                <span className="flex items-center gap-2 text-gray-300 font-bold">
                                    Under Development <ArrowRight className="w-5 h-5" />
                                </span>
                            ) : (
                                <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group-hover:text-primary-dark">
                                    Start practicing <ArrowRight className="w-5 h-5" />
                                </button>
                            )}

                            {/* Decorative faint background icon */}
                            <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:scale-110 transition-transform duration-500">
                                {React.cloneElement(section.icon, { size: 200 })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestSections;
