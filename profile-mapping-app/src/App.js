import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import navigationicon from './images/navigation.svg';
import navigationIcon from './images/profile.png';
import ProfileList from './components/ProfileList';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import SignUp from './components/SignUp';
import './App.css';

function App() {
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const handleLogin = (user) => {
        setIsLoggedIn(true);
        setIsAdmin(user.isAdmin); // Determine if user is an admin
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            !isLoggedIn ? (
                                <Login onLogin={handleLogin} />
                            ) : isAdmin ? (
                                <AdminPanel />
                            ) : (
                                <>
                                    <header className="app-header">
                                        <img src={navigationicon} alt="Website Icon" className="website-icon" />
                                        <div className="search-box">
                                            <input
                                                type="text"
                                                placeholder="Search for users..."
                                                className="search-input"
                                            />
                                        </div>
                                        <div className="auth-buttons">
                                            <img
                                                src={navigationIcon}
                                                alt="Profile Icon"
                                                className="profile-icon"
                                            />
                                        </div>
                                    </header>
                                    <div className="app-title">
                                        <h1>Discover Profiles Around You</h1>
                                    </div>
                                    <ProfileList
                                        setSelectedProfile={setSelectedProfile}
                                        selectedProfile={selectedProfile}
                                    />
                                    <footer className="app-footer">
                                        <p>© 2024 Profile Mapping App. All rights reserved.</p>
                                    </footer>
                                </>
                            )
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <SignUp
                                onSignUp={(user) => {
                                    alert(`User signed up with email: ${user.email}`);
                                }}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;













