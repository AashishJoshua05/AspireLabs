import React, { useState } from 'react';
import ThreadedChat from './threadedChat';
import '../styles/card.css';

function Card({ designation, location, companyName }) {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen((prevState) => !prevState);
  };

  return (
    <div className={`card ${chatOpen ? 'open' : ''}`}>
      <div className="profile">
        <img src="" alt="pfp" className="profile-picture" />
        <div className="company-info">
          <h2>{designation}</h2>
          <h3>{companyName}</h3>
          <p>{location}</p>
        </div>
      </div>
      <button onClick={toggleChat} className='chat-button'>{chatOpen ? 'Hide Chat' : 'Open Chat'}</button>
      <div className="chat-container">
        {chatOpen && <ThreadedChat showChat={toggleChat} />}
      </div>
    </div>
  );
}

export default Card;