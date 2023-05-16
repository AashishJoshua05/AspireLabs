import React, { useState } from 'react';
import '../styles/main.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="flex items-center bg-gray-200 rounded-lg p-2" onSubmit={handleSubmit}>
      <input
        type="text"
        className="flex-grow px-2 py-1 rounded-l-md focus:outline-none"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
