import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    email: string;
    name: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (email: string, password: string, name: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('ielts_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email: string, _password: string) => {
        // Simulated JSON-based auth
        const mockUser = { email, name: email.split('@')[0] };
        setUser(mockUser);
        localStorage.setItem('ielts_user', JSON.stringify(mockUser));
    };

    const signup = async (email: string, _password: string, name: string) => {
        const mockUser = { email, name };
        setUser(mockUser);
        localStorage.setItem('ielts_user', JSON.stringify(mockUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('ielts_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
