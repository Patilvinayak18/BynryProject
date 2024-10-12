import './login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isUser, setIsUser] = useState(true); // To track if it's a user or admin
    const navigate = useNavigate(); // Initialize the navigate function

    const handleLogin = (e) => {
        e.preventDefault();

        // Clear previous errors
        setError('');

        // Admin credentials
        const adminCredentials = {
            email: 'vp464068@gmail.com',
            password: '123'
        };

        // Check if the fields are filled
        if (!email || !password) {
            setError('Please fill in both email and password.');
            return;
        }

        if (isUser) {
            // Simulate user login check
            if (email && password) {
                onLogin({ isAdmin: false });
            } else {
                setError('Please provide valid user credentials.');
            }
        } else {
            // Admin login check
            if (email === adminCredentials.email && password === adminCredentials.password) {
                onLogin({ isAdmin: true });
            } else {
                setError('Invalid admin credentials.');
            }
        }
    };

    return (
        <div className="login-container">
            {/* Background image is now handled in CSS */}
            <header className="login-header">
                <h1>Location Finder App</h1> {/* Website name */}
            </header>
            <h2>{isUser ? 'User Login' : 'Admin Login'}</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>

            <div className="role-toggle">
                <label>
                    <input
                        type="radio"
                        checked={isUser}
                        onChange={() => setIsUser(true)}
                    />
                    User
                </label>
                <label>
                    <input
                        type="radio"
                        checked={!isUser}
                        onChange={() => setIsUser(false)}
                    />
                    Admin
                </label>
            </div>

            {isUser && (
                <p>
                    New User? <button onClick={() => navigate('/signup')}>Sign Up</button>
                </p>
            )}
        </div>
    );
};

export default Login;





