import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Default to a guest user so the app feels fully functional
    const [user, setUser] = useState({
        name: 'Guest Trader',
        role: 'buyer',
        mobile: ''
    });

    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const login = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
    };

    const logout = () => {
        // No-op or reset to guest. Let's reset to guest.
        setUser({
            name: 'Guest Trader',
            role: 'buyer',
            mobile: ''
        });
        setIsAuthenticated(true);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
