import React, { useState } from 'react';
import ThreadedChat from './threadedChat.jsx';
import "../styles/main.css";

function Card({ designation, location, companyName }) {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen((prevState) => !prevState);
  };

  return (
    <div className="card bg-white rounded shadow p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="" alt="pfp" className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <h2 className="text-lg font-bold">{designation}</h2>
            <h3 className="text-gray-600">{companyName}</h3>
            <p className="text-gray-500">{location}</p>
          </div>
        </div>
        <button
          onClick={toggleChat}
          className="bg-blue-500 text-white rounded py-2 px-4"
        >
          {chatOpen ? 'Hide Chat' : 'Open Chat'}
        </button>
      </div>
      {chatOpen && (
        <div className="mt-4">
          <ThreadedChat showChat={toggleChat} />
        </div>
      )}
    </div>
  );
}

export default Card;