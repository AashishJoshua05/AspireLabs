import React, { useState } from 'react';
import '../styles/main.css';

function ChatThread({ messages }) {
  return (
    <div className="chat-thread overflow-y-auto h-80 bg-gray-100">
      {messages.map((message) => (
        <div key={message.id} className="message mb-4">
          <div className="message-header flex items-center justify-between">
            <span className="username font-bold">{message.username}</span>
            <span className="timestamp text-gray-600 text-sm">{message.timestamp}</span>
          </div>
          <div className="message-content bg-gray-200 text-gray-800 p-2 rounded-lg mt-2">
            {message.content}
          </div>
        </div>
      ))}
    </div>
  );
}

function ThreadedChat({ showChat }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    const newMessage = {
      id: Date.now(),
      username: 'John', // Replace with current user's username
      timestamp: new Date().toLocaleTimeString(), // Replace with timestamp logic
      content: inputValue,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputValue('');
  };

  return (
    <div className="threaded-chat flex flex-col">
      {showChat && (
        <>
          <div className="chat-box">
            <ChatThread messages={messages} />
          </div>
          <form className="message-input flex items-center mt-4" onSubmit={handleSendMessage}>
            <input
              type="text"
              className="flex-grow px-4 py-2 rounded-l-lg outline-4 bg-gray-200"
              placeholder="Type your message..."
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-r-lg outline-4"
            >
              Send
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default ThreadedChat;
