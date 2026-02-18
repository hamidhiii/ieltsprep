import React from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();
    const { user, isAuthenticated, logout } = useAuth();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Mock Tests', path: '/mock-tests' },
        { name: 'Practice', path: '/practice' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="container-custom">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-primary p-2 rounded-lg">
                            <BookOpen className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold text-secondary tracking-tight">IELTSPrep</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`transition-colors font-medium ${isActive(link.path) ? 'text-primary' : 'text-gray-600 hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        {isAuthenticated ? (
                            <div className="flex items-center gap-4">
                                <span className="text-secondary font-bold">Hi, {user?.name}!</span>
                                <button
                                    onClick={logout}
                                    className="bg-gray-100 text-secondary px-6 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-all font-bold"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-4">
                                <Link to="/login" className="text-secondary font-medium hover:text-primary transition-colors">Log in</Link>
                                <Link to="/signup" className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-all shadow-sm">
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>

                    <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block transition-colors font-medium ${isActive(link.path) ? 'text-primary' : 'text-gray-600'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 flex flex-col gap-4">
                        {isAuthenticated ? (
                            <div className="flex flex-col gap-4">
                                <span className="text-secondary font-bold px-2">Hi, {user?.name}!</span>
                                <button
                                    onClick={() => { logout(); setIsOpen(false); }}
                                    className="bg-gray-100 text-secondary w-full py-3 rounded-lg font-bold"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                <Link
                                    to="/login"
                                    onClick={() => setIsOpen(false)}
                                    className="text-secondary font-medium text-center"
                                >
                                    Log in
                                </Link>
                                <Link
                                    to="/signup"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-primary text-white w-full py-3 rounded-lg font-medium text-center"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
