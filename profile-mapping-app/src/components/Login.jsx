// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin, users }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isUser, setIsUser] = useState(true);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        const adminCredentials = {
            email: 'admin@gmail.com',
            password: '123'
        };

        if (!email || !password) {
            setError('Please fill in both email and password.');
            return;
        }

        if (isUser) {
            const user = users.find((user) => user.email === email && user.password === password);
            if (user) {
                onLogin({ isAdmin: false });
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('isAdmin', false);
            } else {
                setError('Invalid user credentials.');
            }
        } else {
            if (email === adminCredentials.email && password === adminCredentials.password) {
                onLogin({ isAdmin: true });
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('isAdmin', true);
            } else {
                setError('Invalid admin credentials.');
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-4 text-blue-600">
                    {isUser ? 'User Login' : 'Admin Login'}
                </h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
                    >
                        Login
                    </button>
                </form>
                <div className="flex items-center justify-center space-x-4 mt-4">
                    <label className="text-sm font-medium text-gray-600">
                        <input
                            type="radio"
                            checked={isUser}
                            onChange={() => setIsUser(true)}
                            className="mr-2"
                        />
                        User
                    </label>
                    <label className="text-sm font-medium text-gray-600">
                        <input
                            type="radio"
                            checked={!isUser}
                            onChange={() => setIsUser(false)}
                            className="mr-2"
                        />
                        Admin
                    </label>
                </div>
                {isUser && (
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">New User?</p>
                        <button
                            onClick={() => navigate('/signup')}
                            className="text-blue-600 hover:underline font-medium"
                        >
                            Sign Up
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
