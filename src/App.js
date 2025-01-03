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
          <input type="text" placeholder="Search..." className="search-bar"/>
        </div>
        <div className="navbar-links">
          <a href="create-profile-link">Create Profile</a>
          <a href="edit-profile-link">Edit Profile</a>
          <a href="saved-profiles-link">Saved Profiles</a>
        </div>
      </div>
      <div className="userProfile">
        <div className="profile-card">
          <img
            src="https://via.placeholder.com/300x300?text=Default+Profile+Picture"
            alt="Profile-Picture"
            className="profile-picture"
          />
          <h2 className="profile-name">John Doe</h2>
          <p className="profile-description">
            From: Evanston, IL<br/>
            Hobbies: Reading, Writing, Hiking<br/>
            Traits: Funny, Outgoing, Adventurous<br/>
            Major: Economics
          </p>
        </div>
        <div className="button-container">
          <button className="button">Make a new friend!</button>
          <button className="button">Next Person</button>
        </div>
      </div>
    </div>
  );
}

export default App;
