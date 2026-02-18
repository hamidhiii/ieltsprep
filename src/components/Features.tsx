import { ClipboardCheck, Zap, Layout, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
    const features = [
        {
            icon: <ClipboardCheck className="w-6 h-6 text-primary" />,
            title: "Full-Length IELTS Mock Tests",
            description: "Simulate the real IELTS exam with full-length practice tests covering all four sections under timed conditions."
        },
        {
            icon: <Zap className="w-6 h-6 text-primary" />,
            title: "AI-Powered Instant Scoring",
            description: "Receive detailed AI-generated feedback and band scores within seconds of completing your test."
        },
        {
            icon: <Layout className="w-6 h-6 text-primary" />,
            title: "Section-wise Practice",
            description: "Focus on specific skills with dedicated Listening, Reading, Writing, and Speaking practice modules."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-primary" />,
            title: "Exam Mode with Lockdown",
            description: "Enter a distraction-free, full-screen locked environment that mirrors real test-day conditions."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container-custom text-center">
                <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Key Features</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 text-balance">Everything you need to ace the IELTS</h2>
                <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg text-balance">
                    Our platform combines realistic test simulations with AI technology to give you the best preparation experience.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl border border-gray-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all text-left group"
                        >
                            <div className="bg-primary/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <div className="group-hover:text-white transition-colors">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
