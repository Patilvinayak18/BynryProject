import React from 'react';
import { Link } from 'react-router-dom';
import { profiles } from '../constants/ind'; // Adjust the path accordingly

const ShowPosts = ({ posts }) => {
    const getUserProfile = (profileId) => {
        return profiles.find(profile => profile.id === profileId);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {posts.map(post => {
                const userProfile = getUserProfile(post.profileId);
                return (
                    <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="flex items-center p-4">
                            <Link to={`/profile/${userProfile.id}`} className="flex items-center">
                                <img
                                    src={userProfile.photo}
                                    alt={userProfile.name}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <span className="font-semibold text-gray-800 hover:underline">
                                    {userProfile.name}
                                </span>
                            </Link>
                        </div>
                        <img
                            src={post.image}
                            alt={post.content}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-lg font-semibold">{post.content}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ShowPosts;




