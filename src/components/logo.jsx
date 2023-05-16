import React from 'react';
import '../styles/main.css';

function Logo() {
  return (
    <div className="fixed top-0 left-0 m-4">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7B_20bFdLt1v7iyxUAbwFFIsl698olSLdPt-UAXwJbTXLtQy17HAwBEAaSzXH45VLXes&usqp=CAU" // Replace with the actual path to your logo image
        alt="Logo"
        className="w-16 h-16 rounded-full"
      />
    </div>
  );
}

export default Logo;
