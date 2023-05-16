import React, { useState } from 'react';
import '../styles/main.css';

function ProfileTags() {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <div
          className="rounded-lg bg-gray-100 p-4 mb-4 flex justify-center items-center"
          style={{ position: 'relative' }}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden">
            {profilePicture ? (
              <img className="w-full h-full object-cover" src={profilePicture} alt="Profile" />
            ) : (
              <div className="flex justify-center items-center bg-gray-300 w-full h-full">
                <span className="text-gray-500">No Profile Picture</span>
              </div>
            )}
          </div>
          <label
            className="font-bold ml-4"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              opacity: 0,
            }}
          >
            <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
          </label>
        </div>
      </div>

      <div className="col-span-1">
        <div className="rounded-lg bg-gray-100 p-4 mb-4">
          <label className="font-bold">Name:</label>
          <input className="w-full" type="text" placeholder="Enter your name" />
        </div>
      </div>
      <div className="col-span-1">
        <div className="rounded-lg bg-gray-100 p-4 mb-4">
          <label className="font-bold">Date of Birth:</label>
          <input className="w-full" type="text" placeholder="Enter your date of birth" />
        </div>
      </div>
      <div className="col-span-1">
        <div className="rounded-lg bg-gray-100 p-4 mb-4">
          <label className="font-bold">Primary Education:</label>
          <input className="w-full" type="text" placeholder="Enter your primary education" />
        </div>
      </div>
      <div className="col-span-1">
        <div className="rounded-lg bg-gray-100 p-4 mb-4">
          <label className="font-bold">Secondary Education:</label>
          <input className="w-full" type="text" placeholder="Enter your secondary education" />
        </div>
      </div>
      <div className="col-span-1">
        <div className="rounded-lg bg-gray-100 p-4 mb-4">
          <label className="font-bold">Personal Website:</label>
          <input className="w-full" type="text" placeholder="Enter your personal website URL" />
        </div>
      </div>
      <div className="col-span-1">
        <div className="rounded-lg bg-gray-100 p-4 mb-4">
          <label className="font-bold">Github Link:</label>
          <input className="w-full" type="text" placeholder="Enter your GitHub profile URL" />
        </div>
      </div>
      <div className="col-span-1">
        <div className="rounded-lg bg-gray-100 p-4 mb-4">
          <label className="font-bold">LinkedIn:</label>
          <input className="w-full" type="text" placeholder="Enter your LinkedIn profile URL" />
        </div>
      </div>
      <div className="col-span-1">
        <div className="rounded-lg bg-gray-100 p-4 mb-4">
          <label className="font-bold">Skills:</label>
          <select className="w-full">
            <option value="">Select a skill</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            {/* Add more skills as needed */}
          </select>
        </div>
      </div>
      <div className="col-span-2 flex justify-center">
        <div className="rounded-full bg-gray-100 p-4 mb-4 flex items-center cursor-pointer border border-blue-500 hover:bg-blue-500 hover:text-white">
          <label className="font-bold text-blue-500">
            Upload Resume
            <input className="hidden" type="file" accept=".pdf" multiple />
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProfileTags;