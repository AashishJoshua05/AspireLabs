import React from 'react';
import '../styles/main.css';

function ProfilePicture({ imageUrl }) {
  return (
    <div className="fixed top-0 right-0 m-4">
      <img
        src={imageUrl}
        alt="Greatest Face Of All Time"
        className="w-16 h-16 rounded-full border-2 border-white"
      />
    </div>
  );
}

export default ProfilePicture;
