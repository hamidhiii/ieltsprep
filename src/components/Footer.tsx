import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary p-2 rounded-lg">
                                <BookOpen className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold">IELTSPrep</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            The world's first AI-powered IELTS preparation platform. Helping students achieve their dream band scores since 2024.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8">Platform</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">All Mock Tests</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Practice Materials</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">AI Feedback</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Pricing Plans</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8">Resources</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">IELTS Guide 2024</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Success Stories</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Study Tips</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">FAQS</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8">Newsletter</h4>
                        <p className="text-gray-400 mb-6 font-medium">Get the latest IELTS tips and updates delivered to your inbox.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-gray-800 border-none rounded-xl py-4 pl-4 pr-12 text-sm focus:ring-2 focus:ring-primary outline-none"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-primary px-3 rounded-lg hover:bg-primary-dark transition-colors">
                                <Mail className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>© 2024 IELTSPrep AI. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
