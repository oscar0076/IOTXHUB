import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Vérifie si l'utilisateur est authentifié
    return isLoggedIn ? children : <Navigate to="/LogIn" />;
};

export default ProtectedRoute;

