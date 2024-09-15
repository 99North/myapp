import React, { useState, useContext, createContext } from "react";

// Create a Context object
const AuthContext = createContext();

// Define a provider component for the AuthContext
export function AuthProvider({ children }) {
    // State to manage the authentication status
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Function to log in the user
    const login = () => setIsAuthenticated(true);

    // Function to log out the user
    const logout = () => setIsAuthenticated(false);

    return (
        // Provide the context value to the component tree
        // The value includes isAuthenticated state and login/logout functions
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children} {/* Render child components that will have access to the context */}
        </AuthContext.Provider>
    );
}

// Export the context object to be used by other components
export default AuthContext;
