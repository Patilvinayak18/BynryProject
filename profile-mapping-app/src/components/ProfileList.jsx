import React, { useState } from "react";
import axios from "axios"; // Import axios for making API calls
import ProfileCard from "./ProfileCard";
import MapComponent from "./MapComponent"; // Import the map component
import { profiles } from "../constants/ind";

const ProfileList = ({ setSelectedProfile, selectedProfile }) => {
    const [coordinates, setCoordinates] = useState(null); // To store fetched coordinates

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

    // Function to handle the profile click
    const handleProfileClick = (profile) => {
        setSelectedProfile(profile); // Update the selected profile
        fetchCoordinates(profile.location); // Fetch coordinates based on location (city/country name)
    };

    return (
        <div className="profile-list">
            <div className="profile-cards">
                {profiles.map((profile) => (
                    <div
                        key={profile.id}
                        onClick={() => handleProfileClick(profile)}
                        className={selectedProfile?.id === profile.id ? "selected" : ""}
                    >
                        <ProfileCard
                            name={profile.name}
                            photo={profile.photo}
                            description={profile.description}
                        />
                    </div>
                ))}
            </div>

            {/* Conditionally render the MapComponent when coordinates are available */}
            {coordinates && (
                <div className="map-container">
                    <h3>Location for {selectedProfile.name}</h3>
                    <MapComponent position={coordinates} address={selectedProfile.address} />
                </div>
            )}
        </div>
    );
};

export default ProfileList;


