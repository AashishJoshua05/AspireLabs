import React, { useState } from 'react';
import '../styles/threadedChat.css';

function ChatThread({ messages }) {
  return (
    <div className="chat-thread">
      {messages.map((message) => (
        <div key={message.id} className="message">
          <div className="message-header">
            <span className="username">{message.username}</span>
            <span className="timestamp">{message.timestamp}</span>
          </div>
          <div className="message-content">{message.content}</div>
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

  const toggleChat = () => {
    showChat();
  };

  return (
    <div className="threaded-chat">
      <button onClick={toggleChat}>{showChat ? 'Hide Chat' : 'Show Chat'}</button>
      {showChat && (
        <>
          <ChatThread messages={messages} />
          <form className="message-input" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={handleInputChange}
            />
            <button type="submit">Send</button>
          </form>
        </>
      )}
    </div>
  );
}

export default ThreadedChat;
