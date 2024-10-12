import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { profiles } from '../constants/ind'; // Make sure to import your profiles data

const SearchProfile = ({ setSelectedProfile, selectedProfile }) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter profiles based on the search term
    const filteredProfiles = profiles.filter(profile =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative flex-grow-[1]">
            <input
                type="text"
                placeholder="Search for users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-1/2 p-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {searchTerm && filteredProfiles.length > 0 && (
                <ul className="absolute z-10 w-1/2 mt-2 left-[25%] bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto ">
                    {filteredProfiles.map(profile => (
                        <li key={profile.id} className="flex items-center p-2 hover:bg-gray-100 transition duration-200">
                            <Link
                                to={`/profile/${profile.id}`} // Link to the user profile
                                onClick={() => setSelectedProfile(profile)} // Set selected profile on click
                                className="flex items-center w-full"
                            >
                                <img src={profile.photo} alt={`${profile.name}'s profile`} className="w-10 h-10 rounded-full mr-3" />
                                <span className="font-semibold text-gray-800">{profile.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            {searchTerm && filteredProfiles.length === 0 && (
                <p className="absolute z-10 w-full mt-2 text-gray-500">No results found</p>
            )}
        </div>
    );
};

export default SearchProfile;
