import React from 'react';

function SignOutButton({ onSignOut }) {
  const handleSignOut = () => {
    // Perform sign out logic, such as clearing session data or updating user authentication state
    // For demonstration purposes, let's simply log a message to the console
    console.log('User signed out');
    // Call the onSignOut function to notify the parent component
    onSignOut();
  };

  return (
    <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
      Sign Out
    </button>
  );
}

export default SignOutButton;
