import React, { useState } from 'react';
import './AdminPanel.css'; // If you still have additional custom styles
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
        <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-64  bg-gray-800 text-white flex flex-col">
                <div className="p-4 text-lg font-semibold">Admin Dashboard</div>
                <nav className="flex-1">
                    <ul className="space-y-2 p-4">
                        <li><a href="#" className="block p-2 hover:bg-gray-700 rounded">Home</a></li>
                        <li><a href="#" className="block p-2 hover:bg-gray-700 rounded">Profiles</a></li>
                        <li><a href="#" className="block p-2 hover:bg-gray-700 rounded">Settings</a></li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100">
                <h2 className="text-2xl font-bold mb-4 text-black"> Admin Panel</h2>
                <div className="mb-6 flex flex-wrap gap-3">
                    <input
                        type="text"
                        placeholder="Name"
                        className="block w-1/3 p-2 border border-gray-300 rounded mb-2"
                        value={newProfile.name}
                        onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Photo URL"
                        className="block w-1/3 p-2 border border-gray-300 rounded mb-2"
                        value={newProfile.photo}
                        onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        className="block w-1/3 p-2 border border-gray-300 rounded mb-2"
                        value={newProfile.description}
                        onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="block w-1/3 p-2 border border-gray-300 rounded mb-2"
                        value={newProfile.address}
                        onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        className="block w-1/3 p-2 border border-gray-300 rounded mb-4"
                        value={newProfile.location}
                        onChange={(e) => setNewProfile({ ...newProfile, location: e.target.value })}
                    />
                </div>
                <button
                    onClick={handleAddProfile}
                    className="bg-blue-500 w-1/5 flex text-center justify-center text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Profile
                </button>

                <h3 className="text-xl font-semibold mb-2 mt-6">Current Profiles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {adminProfiles.map((profile) => (
                        <div key={profile.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                            <div className="flex items-center mb-4">
                                <img
                                    src={profile.photo}
                                    alt={profile.name}
                                    className="w-16 h-16 rounded-full border-2 border-gray-300 mr-4"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold">{profile.name}</h4>
                                    <p className="text-gray-500">{profile.location}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-2">{profile.description}</p>
                            <p className="text-gray-500 text-sm">{profile.address}</p>
                            <button
                                onClick={() => handleDeleteProfile(profile.id)}
                                className="mt-auto bg-blue-500 hover:bg-red-700 rounded text-grey-500 hover:text-grey-600"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
