// src/components/SecureRoute.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const SecureRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            navigate("/login");
        }
    }, [navigate]);

    if (!isAuthenticated) {
        return null; // Optionally, show a loading spinner or message
    }

    return (
        <div>
            {children}
        </div>
    );
}

export default SecureRoute;
