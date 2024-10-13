import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import navigationicon from './images/Location.png';
import navigationIcon from './images/profile.png';
import ProfileList from './components/SerachProfile';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile'; 
import ShowPosts from './components/ShowPosts';
import './App.css';
import { posts } from './constants/ind';

function App() {
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true');
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem('users')) || [
            { email: 'johnDoe@gmail.com', password: 'password123' },
            { email: 'janeSmith@gmail.com', password: 'securepass' },
            { email: 'maryJohn@gmail.com', password: 'mypassword' },
            { email: 'virat@gmail.com', password: 'virat' },
        ]
    );

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const handleLogin = (user) => {
        setIsLoggedIn(true);
        setIsAdmin(user.isAdmin); 
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('isAdmin');
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            !isLoggedIn ? (
                                <Login onLogin={handleLogin} users={users} setUsers={setUsers} />
                            ) : isAdmin ? (
                                <AdminPanel setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />
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
                                            <button onClick={handleLogout}>Logout</button>
                                        </div>
                                    </header>
                                    <div className="app-title">
                                        <h1>Discover Profiles Around You</h1>
                                    </div>
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
                        element={ <SignUp
                            onSignUp={(user) => {
                                setUsers(prevUsers => [...prevUsers, user]); // Update the users state
                            }}
                        />}
                    />
                    <Route path="/profile/:id" element={<UserProfile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
