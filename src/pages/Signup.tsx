import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, BookOpen, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await signup(email, password, name);
        navigate('/mock-tests');
    };

    return (
        <main className="min-h-screen pt-32 pb-20 bg-gray-50 flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full"
            >
                <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-gray-100 shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>

                    <div className="flex flex-col items-center mb-8">
                        <div className="bg-primary/10 p-4 rounded-2xl text-primary mb-4">
                            <BookOpen className="w-8 h-8" />
                        </div>
                        <h1 className="text-3xl font-bold text-secondary">Join IELTSPrep</h1>
                        <p className="text-gray-500 text-center mt-2">Start your journey to a band 8.0+ score today.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-secondary uppercase tracking-wider">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-secondary uppercase tracking-wider">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-secondary uppercase tracking-wider">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 mt-8"
                        >
                            Create Account <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>

                    <p className="text-center text-gray-500 mt-8 text-sm">
                        Already have an account? <Link to="/login" className="text-primary font-bold hover:text-primary-dark">Sign In</Link>
                    </p>
                </div>
            </motion.div>
        </main>
    );
};

export default Signup;
