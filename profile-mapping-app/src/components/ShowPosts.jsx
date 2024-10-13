import React from 'react';
import { Link } from 'react-router-dom';
import { profiles } from '../constants/ind'; // Adjust the path accordingly

const ShowPosts = ({ posts }) => {
    // Function to get user profile by ID
    const getUserProfile = (profileId) => {
        return profiles.find(profile => profile.id === profileId);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {posts.map(post => {
                const userProfile = getUserProfile(post.profileId); // Get user profile based on post
                return (
                    <div 
                        key={post.id} 
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 transform hover:scale-105"
                    >
                        {/* User Profile Section */}
                        <div className="flex items-center p-4 border-b border-gray-200">
                            <Link to={`/profile/${userProfile.id}`} className="flex items-center">
                                <img
                                    src={userProfile.photo}
                                    alt={userProfile.name}
                                    className="w-12 h-12 rounded-full border-2 border-indigo-500"
                                />
                                <span className="ml-3 text-gray-800 font-semibold text-lg hover:underline">
                                    {userProfile.name}
                                </span>
                            </Link>
                        </div>

                        {/* Post Image Section */}
                        <div className="overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.content}
                                className="w-full h-64 object-cover transition-transform duration-200 hover:scale-105"
                            />
                        </div>

                        {/* Post Content Section */}
                        <div className="p-4">
                            <p className="text-gray-700 font-medium text-base leading-relaxed">
                                {post.content}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ShowPosts;
