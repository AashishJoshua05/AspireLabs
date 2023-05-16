import React, { useState } from 'react';
import ThreadedChat from './threadedChat';
import '../styles/card.css';

function Card({ designation, companyDescription }) {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen((prevState) => !prevState);
  };

  return (
    <div className="card">
      <h3>{designation}</h3>
      <p>{companyDescription}</p>
      <button onClick={toggleChat}>Open Chat</button>
      {chatOpen && <ThreadedChat showChat={toggleChat} />}
    </div>
  );
}

export default Card;