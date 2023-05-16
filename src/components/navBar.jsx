import React from 'react';
import ProfilePicture from '../components/profilePicture.jsx';
import SearchBar from '../components/searchBar.jsx';
import Logo from "../components/logo.jsx";

function NavBar() {
  const profileImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7B_20bFdLt1v7iyxUAbwFFIsl698olSLdPt-UAXwJbTXLtQy17HAwBEAaSzXH45VLXes&usqp=CAU";

  return (
    <div className="flex items-center justify-between bg-blue-200 shadow-md p-4">
      <Logo />
      <SearchBar />
      <ProfilePicture imageUrl={profileImageURL} />
    </div>
  );
}

export default NavBar;
