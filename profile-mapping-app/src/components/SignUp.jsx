// SignUp.js
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const SignUp = ({ onSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (!email || !password || !confirmPassword) {
            setError('Please fill all fields');
            return;
        }

        const newUser = { email, password };
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const isUserExist = existingUsers.some(user => user.email === email);

        if (isUserExist) {
            setError('User already exists with this email.');
            return;
        }

        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        onSignUp(newUser);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');

        alert('User signed up successfully!');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-4 text-blue-600">Sign Up</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={handleSignUp} className="space-y-4">
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
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">Already have an account?</p>
                    <button
                        onClick={() => navigate('/')}
                        className="text-blue-600 hover:underline font-medium"
                    >
                        Log in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
