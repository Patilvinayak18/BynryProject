import React from "react";
import './ProfileCard.css';

const ProfileCard = ({ name, photo, description }) => {
  return (
    <div className="profile-card">
      <img src={photo} alt={`${name}'s photo`} className="profile-photo" />
      <h3 className="profile-name">{name}</h3>
      <p className="profile-description">{description}</p>
    </div>
  );
};

export default ProfileCard;





