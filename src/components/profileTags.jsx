import React, { useState } from 'react';
import '../styles/main.css';

function ProfileTags() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [skills, setSkills] = useState(['React', 'JavaScript', 'CSS']);
  const [newSkill, setNewSkill] = useState('');
  const [name, setName] = useState('John Doe');
  const [dateOfBirth, setDateOfBirth] = useState('1990-01-01');
  const [primaryEducation, setPrimaryEducation] = useState('University of ABC');
  const [secondaryEducation, setSecondaryEducation] = useState('High School XYZ');
  const [personalWebsite, setPersonalWebsite] = useState('https://example.com');
  const [githubLink, setGithubLink] = useState('https://github.com/johndoe');
  const [linkedin, setLinkedin] = useState('https://linkedin.com/in/johndoe');

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  const handleNewSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  const addSkill = () => {
    if (newSkill) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <div
          className="rounded-lg bg-gray-100 p-4 mb-4 flex justify-center items-center"
          style={{ position: 'relative' }}
        >
          <div className="w-40 h-40 rounded-full overflow-hidden">
            {profilePicture ? (
              <img className="w-full h-full object-cover" src={profilePicture} alt="Profile" />
            ) : (
              <div className="flex justify-center items-center bg-blue-300 w-full h-full">
                <span className="text-black-500 text-center">Click to Add Profile Picture</span>
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
          <input
            className="w-full px-4 py-2 rounded border border-gray-500 bg-white focus:outline-none focust:border-blue-500"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
      </div>
      <div className="col-span-1">
        <div className="rounded-lg bg-gray-100 p-4 mb-4">
          <label className="font-bold">Date of Birth:</label>
          <input
            className="w-full px-4 py-2 rounded border border-gray-500 bg-white focus:outline-none focust:border-blue-500"
            type="text"
            placeholder="Enter your date of birth"
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
          />
        </div>
        </div>
        <div className="col-span-1">
        <div className="rounded-lg bg-gray-100 p-4 mb-4">
        <label className="font-bold">Primary Education:</label>
        <input
        className="w-full px-4 py-2 rounded border border-gray-500 bg-white focus:outline-none focust:border-blue-500"
        type="text"
        placeholder="Enter your primary education"
        value={primaryEducation}
        onChange={(event) => setPrimaryEducation(event.target.value)}
        />
        </div>
        </div>
        <div className="col-span-1">
        <div className="rounded-lg bg-gray-100 p-4 mb-4">
        <label className="font-bold">Secondary Education:</label>
        <input
        className="w-full px-4 py-2 rounded border border-gray-500 bg-white focus:outline-none focust:border-blue-500"
        type="text"
        placeholder="Enter your secondary education"
        value={secondaryEducation}
        onChange={(event) => setSecondaryEducation(event.target.value)}
        />
        </div>
        </div>
        <div className="col-span-1">
        <div className="rounded-lg bg-gray-100 p-4 mb-4">
        <label className="font-bold">Personal Website:</label>
        <input
        className="w-full px-4 py-2 rounded border border-gray-500 bg-white focus:outline-none focust:border-blue-500"
        type="text"
        placeholder="Enter your personal website URL"
        value={personalWebsite}
        onChange={(event) => setPersonalWebsite(event.target.value)}
        />
        </div>
        </div>
        <div className="col-span-1">
        <div className="rounded-lg bg-gray-100 p-4 mb-4">
        <label className="font-bold">Github Link:</label>
        <input
        className="w-full px-4 py-2 rounded border border-gray-500 bg-white focus:outline-none focust:border-blue-500"
        type="text"
        placeholder="Enter your GitHub profile URL"
        value={githubLink}
        onChange={(event) => setGithubLink(event.target.value)}
        />
        </div>
        </div>
        <div className="col-span-1">
          <div className="rounded-lg bg-gray-100 p-4 mb-4">
            <label className="font-bold">LinkedIn:</label>
              <input
              className="w-full px-4 py-2 rounded border border-gray-500 bg-white focus:outline-none focust:border-blue-500"
              type="text"
              placeholder="Enter your LinkedIn profile URL"
              value={linkedin}
              onChange={(event) => setLinkedin(event.target.value)}
              />
            </div>
          </div>
        <div className="col-span-1">
        <div className="rounded-lg bg-gray-100 p-4 mb-4">
        <label className="font-bold">Skills:</label>
        <div className="flex">
        <input
          className="w-full px-4 py-2 rounded border border-gray-500 bg-white focus:outline-none focust:border-blue-500"
          type="text"
          placeholder="Enter a skill"
          value={newSkill}
          onChange={handleNewSkillChange}
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={addSkill}>
        Add
        </button>
        </div>
        <div className="mt-2">
        {skills.map((skill, index) => (
        <div
            key={index}
                     className="inline-block bg-blue-500 text-white px-2 py-1 rounded mr-2 mb-2"
                   >
        {skill}
        </div>
        ))}
        </div>
        </div>
        </div>

        <div className="col-span-2 flex justify-center">
      <label htmlFor="resumeUpload" className="rounded-full bg-gray-100 p-4 mb-4 flex items-center cursor-pointer border border-blue-500 hover:bg-blue-300 hover:text-white">
        <span className="font-bold text-blue-500 hover:text-white">Upload Resume</span>
        <input id="resumeUpload" className="hidden" type="file" accept=".pdf" multiple />
      </label>
    </div>
        </div>
          );
        }
        export default ProfileTags;
