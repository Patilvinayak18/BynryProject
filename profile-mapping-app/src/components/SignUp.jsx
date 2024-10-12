import './SignUp.css';
import React, { useState } from 'react';

const SignUp = ({ onSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Simulate sign-up process (you can replace this with an API call)
        if (email && password) {
            onSignUp({ email, password });
            alert('User signed up successfully!');
        } else {
            setError('Please fill all fields');
        }
    };

    return (
        <div className="signup-container">
            <header className="signup-header">
                <h1>Sign Up</h1> {/* Title */}
            </header>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSignUp}>
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
