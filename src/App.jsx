import React from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile'
import LoginPage from './components/login';
import SignupPage from './components/signUp';


function App() {
  return(
    <div>
      <Home />
      <Profile />
      <LoginPage />
      <SignupPage />
    </div>
  );
}

export default App;
