// components/AdminPanel.jsx
import React, { useState } from 'react';
import './AdminPanel.css';
import { profiles } from '../constants/ind';

const AdminPanel = () => {
    const [adminProfiles, setAdminProfiles] = useState(profiles);
    const [newProfile, setNewProfile] = useState({ name: '', photo: '', description: '', address: '', location: '' });

    const handleAddProfile = () => {
        setAdminProfiles([...adminProfiles, { id: adminProfiles.length + 1, ...newProfile }]);
        setNewProfile({ name: '', photo: '', description: '', address: '', location: '' });
    };

    const handleDeleteProfile = (id) => {
        setAdminProfiles(adminProfiles.filter(profile => profile.id !== id));
    };

    return (
        <div className="admin-panel">
            <h2>Admin Panel</h2>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={newProfile.name}
                    onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Photo URL"
                    value={newProfile.photo}
                    onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newProfile.description}
                    onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={newProfile.address}
                    onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={newProfile.location}
                    onChange={(e) => setNewProfile({ ...newProfile, location: e.target.value })}
                />
                <button onClick={handleAddProfile}>Add Profile</button>
            </div>

            <h3>Current Profiles</h3>
            <ul>
                {adminProfiles.map((profile) => (
                    <li key={profile.id}>
                        {profile.name} - {profile.location}
                        <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;

