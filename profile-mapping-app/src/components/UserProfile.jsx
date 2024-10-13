import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { profiles, posts } from '../constants/ind'; // Import your profiles and posts data
import ShowPosts from './ShowPosts'; // Import the ShowPosts component
import axios from 'axios';
import MapComponent from './MapComponent';

const UserProfile = () => {
    const { id } = useParams(); // Get the profile ID from the URL
    const profile = profiles.find(p => p.id === parseInt(id)); // Find the profile by ID

    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        // Fetch coordinates when the profile is found
        if (profile) {
            fetchCoordinates(profile.location);
        }
    }, [profile]);

    // Function to fetch coordinates based on city/country name
    const fetchCoordinates = async (location) => {
        try {
            const response = await axios.get("https://nominatim.openstreetmap.org/search", {
                params: {
                    q: location, // The location name
                    format: 'json',
                    limit: 1,
                }
            });
            const data = response.data[0];
            if (data) {
                setCoordinates([data.lat, data.lon]); // Set coordinates (latitude, longitude)
            }
        } catch (error) {
            console.error("Error fetching coordinates:", error);
        }
    };

    // Get posts for the selected profile
    const userPosts = posts.filter(post => post.profileId === profile.id);

    return (
        <div className="user-profile w-full flex flex-col md:flex-row p-4 space-x-4">
            {profile ? (
                <>
                    <div className='flex w-full'>
                        <div className="profile-info flex-1 p-4 bg-white rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold">{profile.name}</h2>
                            <img src={profile.photo} alt={`${profile.name}'s profile`} className="w-24 h-24 rounded-full mt-2" />
                            <p className="mt-2">{profile.description}</p>
                            <p className="mt-2 text-gray-600">Address: {profile.address}</p>
                            <h3 className="mt-4 text-xl font-semibold">Posts:</h3>
                            <ShowPosts posts={userPosts} /> {/* Display user posts */}
                        </div>
                        <div className=" w-1/2  p-4 bg-gray-100 rounded-lg shadow-md">
                            {coordinates ? (
                                <MapComponent position={coordinates} address={profile.address} />
                            ) : (
                                <p>Loading map...</p>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <p>Profile not found.</p>
            )}
        </div>
    );
};

export default UserProfile;
