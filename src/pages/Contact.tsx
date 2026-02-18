import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h1 className="text-4xl font-bold text-secondary mb-6">Get in Touch</h1>
                        <p className="text-gray-600 mb-12 text-lg">
                            Have questions about our mock tests or AI feedback? We're here to help you achieve your IELTS goals.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-4 rounded-2xl text-primary"><Mail className="w-6 h-6" /></div>
                                <div>
                                    <h4 className="font-bold text-secondary mb-1">Email Us</h4>
                                    <p className="text-gray-500">support@ieltsprep.ai</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-4 rounded-2xl text-primary"><Phone className="w-6 h-6" /></div>
                                <div>
                                    <h4 className="font-bold text-secondary mb-1">Call Us</h4>
                                    <p className="text-gray-500">+1 (555) 000-0000</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-4 rounded-2xl text-primary"><MapPin className="w-6 h-6" /></div>
                                <div>
                                    <h4 className="font-bold text-secondary mb-1">Visit Us</h4>
                                    <p className="text-gray-500">123 Tech Avenue, Silicon Valley, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 sm:p-10 rounded-[32px] border border-gray-100 shadow-xl"
                    >
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-secondary uppercase tracking-wider">First Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-secondary uppercase tracking-wider">Last Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-secondary uppercase tracking-wider">Email Address</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-secondary uppercase tracking-wider">Message</label>
                                <textarea rows={4} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" placeholder="How can we help?"></textarea>
                            </div>
                            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
