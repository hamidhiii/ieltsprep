import { UserPlus, ClipboardList, Monitor, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        {
            icon: <UserPlus className="w-8 h-8" />,
            title: "Create an Account",
            description: "Sign up in seconds with your email. No credit card required."
        },
        {
            icon: <ClipboardList className="w-8 h-8" />,
            title: "Select a Test",
            description: "Choose a full mock test or practice a specific section at your own pace."
        },
        {
            icon: <Monitor className="w-8 h-8" />,
            title: "Enter Exam Mode",
            description: "Start the lockdown exam mode and complete the test in a distraction-free environment."
        },
        {
            icon: <LineChart className="w-8 h-8" />,
            title: "Get AI Feedback",
            description: "Receive instant band scores, detailed feedback, and improvement tips powered by AI."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container-custom text-center">
                <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">How it works</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 text-balance">Get started in 4 simple steps</h2>
                <p className="text-gray-600 mb-20 max-w-2xl mx-auto text-lg">
                    From signing up to receiving your AI-generated score - it only takes minutes.
                </p>

                <div className="relative">
                    {/* Connector Line */}
                    <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-px bg-gray-100 -z-10"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center group"
                            >
                                <div className="mb-4 text-xs font-bold text-primary bg-primary/5 px-2 py-1 rounded">0{index + 1}</div>
                                <div className="w-24 h-24 rounded-3xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300">
                                    <div className="text-secondary group-hover:text-primary transition-colors">
                                        {step.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-balance">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
