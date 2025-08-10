import React from 'react';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: ReactNode;
    }

    const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        //if User is not logged in, redirect to login page
        return <Navigate to="/login" replace />;
    }

    // User is logged in, render the children 
    return <>{children}</>;
};

export default ProtectedRoute;
