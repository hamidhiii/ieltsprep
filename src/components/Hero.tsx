import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary-light/30 to-white overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            100% Free to Start
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-secondary leading-tight mb-6">
                            Free IELTS Mock Tests with <span className="text-primary">AI Feedback</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 max-w-xl">
                            Practice Listening, Reading, Writing & Speaking in a real exam-like environment. Get instant AI-powered scoring and personalized feedback.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/20 w-full sm:w-auto">
                                Start Free Mock Test <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="bg-white text-secondary border border-gray-200 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all w-full sm:w-auto">
                                <Play className="w-5 h-5" /> View All Tests
                            </button>
                        </div>
                        <div className="flex items-center gap-8">
                            <div>
                                <p className="text-2xl font-bold text-secondary">50K+</p>
                                <p className="text-gray-500">Students</p>
                            </div>
                            <div className="w-px h-10 bg-gray-200"></div>
                            <div>
                                <p className="text-2xl font-bold text-secondary">200+</p>
                                <p className="text-gray-500">Mock Tests</p>
                            </div>
                            <div className="w-px h-10 bg-gray-200"></div>
                            <div>
                                <p className="text-2xl font-bold text-secondary">4.9</p>
                                <p className="text-gray-500">Rating</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-white p-4 rounded-3xl shadow-2xl relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                                alt="IELTS Preparation"
                                className="rounded-2xl w-full"
                            />
                            <div className="absolute top-4 -right-2 sm:top-10 sm:-right-6 bg-white p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 animate-bounce">
                                <div className="bg-green-100 p-1.5 sm:p-2 rounded-lg">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"></div>
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs text-gray-500">AI Feedback</p>
                                    <p className="text-xs sm:text-sm font-bold">Instant</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl">
                                <p className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1">Band Score</p>
                                <p className="text-xl sm:text-2xl font-bold text-primary">7.5</p>
                            </div>
                        </div>
                        {/* Background elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
