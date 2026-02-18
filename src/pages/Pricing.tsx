import { motion } from 'framer-motion';
import { Check, Shield } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: 'Free',
            price: '0',
            description: 'Perfect for getting started',
            features: ['1 Full Mock Test', 'Basic AI Feedback', 'Reading & Listening practice', 'Community Support'],
            button: 'Start Free',
            highlight: false
        },
        {
            name: 'Pro',
            price: '29',
            description: 'Most popular for serious students',
            features: ['Unlimited Mock Tests', 'Detailed AI Feedback', 'Writing & Speaking tasks', 'Performance Analysis', 'Priority Support'],
            button: 'Get Pro',
            highlight: true
        },
        {
            name: 'Premium',
            price: '49',
            description: 'Best for intensive preparation',
            features: ['Everything in Pro', 'Personalized Study Plan', '1-on-1 AI Tutoring', 'Mock Exam Lockdown Mode', 'Score Guarantee'],
            button: 'Go Premium',
            highlight: false
        }
    ];

    return (
        <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-secondary mb-4">Simple, Transparent Pricing</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that fits your preparation needs. No hidden fees.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-3xl border ${plan.highlight ? 'border-primary ring-4 ring-primary/5 bg-white shadow-xl bg-primary/5' : 'border-gray-100 bg-white'} relative overflow-hidden`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest flex items-center gap-1">
                                    <Shield className="w-3 h-3" /> Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-secondary mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-bold text-secondary">${plan.price}</span>
                                <span className="text-gray-500">/month</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-8">{plan.description}</p>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="bg-primary/10 p-1 rounded-full"><Check className="w-3 h-3 text-primary" /></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20' : 'bg-gray-100 text-secondary hover:bg-gray-200'}`}>
                                {plan.button}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Pricing;
