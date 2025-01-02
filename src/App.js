import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';

function App() {

  const [users, setUsers] = useState([]);

  return (
    <div className="app">
      <div className="navbar">
        <div className="navbar-logo">NU CONNECT</div>
        <div className="navbar-search">
          <input type="text" placeholder="Search . . ." className="search-bar"/>
        </div>
        <div className="navbar-links">
          <a href="create-profile-link">Create Profile</a>
          <a href="edit-profile-link">Edit Profile</a>
          <a href="saved-profiles-link">Saved Profiles</a>
        </div>
      </div>
    </div>
  );
}

export default App;
