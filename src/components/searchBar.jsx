import React, { useState } from 'react';
import '../styles/main.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSearch(searchTerm);
  // };

  return (
    <form className="container mx-auto flex items-center justify-center w-3/5 mt-4">
      <input
        type="text"
        className="flex-grow px-2 py-2 rounded-l-md focus:outline-4" // Updated py-1 to py-2
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
