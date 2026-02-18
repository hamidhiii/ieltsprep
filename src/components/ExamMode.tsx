import { Monitor, EyeOff, Timer, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const ExamMode = () => {
    const items = [
        {
            icon: <Monitor className="w-5 h-5 text-primary" />,
            title: "Full-Screen Lockdown",
            description: "Tests open in a full-screen locked environment with no distractions."
        },
        {
            icon: <EyeOff className="w-5 h-5 text-primary" />,
            title: "Tab & App Blocking",
            description: "Navigation, tabs, and external apps are completely disabled during the test."
        },
        {
            icon: <Timer className="w-5 h-5 text-primary" />,
            title: "Persistent Timer",
            description: "A visible countdown timer ensures you manage your time effectively."
        },
        {
            icon: <ShieldCheck className="w-5 h-5 text-primary" />,
            title: "Anti-Cheating Protection",
            description: "Prevents switching apps or browsing other websites during your exam."
        }
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Mockup Browser */}
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                            <div className="bg-gray-50 px-4 py-3 border-b flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="bg-white px-3 py-1 rounded-md text-[10px] text-gray-400 border flex items-center gap-2">
                                    <ShieldCheck className="w-3 h-3" /> ielts-exam-mode.secure
                                </div>
                                <div className="w-10"></div>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="flex items-center gap-2 text-primary font-bold">
                                        <ShieldCheck className="w-5 h-5" /> Exam Mode Active
                                    </div>
                                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-lg flex items-center gap-2 text-sm font-bold">
                                        <Timer className="w-4 h-4" /> 58:42
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="h-4 bg-gray-100 rounded-full w-3/4"></div>
                                    <div className="h-4 bg-gray-100 rounded-full w-full"></div>
                                    <div className="h-4 bg-gray-100 rounded-full w-2/3"></div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="border rounded-xl p-4 text-sm text-gray-500 flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-gray-100 text-[10px] flex items-center justify-center font-bold">A</div>
                                        Option A
                                    </div>
                                    <div className="border-2 border-primary bg-primary/5 rounded-xl p-4 text-sm text-secondary font-bold flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary text-white text-[10px] flex items-center justify-center font-bold">B</div>
                                        Option B
                                    </div>
                                    <div className="border rounded-xl p-4 text-sm text-gray-500 flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-gray-100 text-[10px] flex items-center justify-center font-bold">C</div>
                                        Option C
                                    </div>
                                    <div className="border rounded-xl p-4 text-sm text-gray-500 flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-gray-100 text-[10px] flex items-center justify-center font-bold">D</div>
                                        Option D
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Glow backdrop */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Focus Environment</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-8 text-balance">Distraction-Free Exam Mode</h2>
                        <p className="text-gray-600 mb-10 text-lg leading-relaxed text-balance">
                            Experience the real pressure and focus of exam day. Our lockdown mode creates a controlled environment so you can practice exactly like the actual IELTS test.
                        </p>

                        <div className="space-y-6">
                            {items.map((item, index) => (
                                <div key={index} className="flex gap-4 group">
                                    <div className="bg-white shadow-sm w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary mb-1">{item.title}</h4>
                                        <p className="text-gray-500">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ExamMode;
