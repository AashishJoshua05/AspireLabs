import React from 'react';
import '../styles/profileTags.css'; // Import the CSS file for styling

function ProfileTags() {
  return (
    <div className="profile-tags">
      <div className="column">
        <div className="rounded-rectangle">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="rounded-rectangle">
          <label>Date of Birth:</label>
          <input type="text" placeholder="Enter your date of birth" />
        </div>
        <div className="rounded-rectangle">
          <label>Primary Education:</label>
          <input type="text" placeholder="Enter your primary education" />
        </div>
        <div className="rounded-rectangle">
          <label>Secondary Education:</label>
          <input type="text" placeholder="Enter your secondary education" />
        </div>
      </div>
      <div className="column">
        <div className="rounded-rectangle">
          <label>Personal Website:</label>
          <input type="text" placeholder="Enter your personal website URL" />
        </div>
        <div className="rounded-rectangle">
          <label>Github Link:</label>
          <input type="text" placeholder="Enter your GitHub profile URL" />
        </div>
        <div className="rounded-rectangle">
          <label>LinkedIn:</label>
          <input type="text" placeholder="Enter your LinkedIn profile URL" />
        </div>
        <div className="rounded-rectangle">
          <label>Skills:</label>
          <select>
            <option value="">Select a skill</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            {/* Add more skills as needed */}
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProfileTags;
