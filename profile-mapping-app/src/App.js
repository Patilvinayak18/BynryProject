import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import navigationicon from './images/Location.png';
import navigationIcon from './images/profile.png';
import ProfileList from './components/SerachProfile';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile'; 
import ShowPosts from './components/ShowPosts'; // Import ShowPosts component
import './App.css';
import { posts } from './constants/ind';

function App() {
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [users, setUsers] = useState([
        { username: 'johnDoe', password: 'password123' },
        { username: 'janeSmith', password: 'securepass' },
        { username: 'maryJohn', password: 'mypassword' },
        { username: 'virat', password: 'virat' },
        // Add more users as needed
    ]);
    const handleLogin = (user) => {
        setIsLoggedIn(true);
        setIsAdmin(user.isAdmin); 
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
                                <div>
                                    <header className="app-header">
                                        <img src={navigationicon} alt="Website Icon" className="website-icon" />
                                        <ProfileList
                                        setSelectedProfile={setSelectedProfile}
                                        selectedProfile={selectedProfile}
                                        
                                        />
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
                                    
                                    {/* Show posts section */}
                                    <ShowPosts posts={posts} />
                                    <footer className="app-footer">
                                        <p>© 2024 Profile Mapping App. All rights reserved.</p>
                                    </footer>
                                </div>
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
                    <Route path="/profile/:id" element={<UserProfile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
