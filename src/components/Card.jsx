import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import ThreadedChat from './threadedChat.jsx';
import '../styles/main.css';

function Card({ designation, location, companyName }) {
  const [chatOpen, setChatOpen] = useState(false);
  const companyImageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7B_20bFdLt1v7iyxUAbwFFIsl698olSLdPt-UAXwJbTXLtQy17HAwBEAaSzXH45VLXes&usqp=CAU';

  const toggleChat = () => {
    setChatOpen((prevState) => !prevState);
  };

  const duration = 300; // Duration of the animation in milliseconds

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display: 'none',
  };

  const transitionStyles = {
    entering: { opacity: 0, display: 'block' },
    entered: { opacity: 1, display: 'block' },
    exiting: { opacity: 0, display: 'block' },
    exited: { opacity: 0, display: 'none' },
  };

  return (
    <div className="card bg-white rounded shadow p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={companyImageURL} alt="pfp" className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <h2 className="text-lg font-bold">{designation}</h2>
            <h3 className="text-gray-600">{companyName}</h3>
            <p className="text-gray-500">{location}</p>
          </div>
        </div>
        <div className="relative">
          <button
            onClick={toggleChat}
            className={`bg-blue-500 text-white rounded py-2 px-4 transition-opacity ${
              chatOpen ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Open Chat
          </button>
          <button
            onClick={toggleChat}
            className={`absolute top-0 right-0 bg-blue-500 text-white rounded py-2 px-4 transition-opacity ${
              chatOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Hide Chat
          </button>
        </div>
      </div>
      <Transition in={chatOpen} timeout={duration}>
        {(state) => (
          <div
            className="mt-4"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <div className="bg-gray-100 rounded p-4 bg-gray-200">
              <h2 className="text-lg font-bold mb-2">{designation}</h2>
              <h3 className="text-gray-600">{companyName}</h3>
            </div>
            <ThreadedChat showChat={toggleChat} />
          </div>
        )}
      </Transition>
    </div>
  );
}

export default Card;
