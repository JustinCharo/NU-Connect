import './css/App.css';
import ProfileCard from './components/ProfileCard';
import Buttons from './components/Buttons';
import Navbar from './components/Navbar';
import React from 'react';
import { useState, useEffect } from 'react';

function App() {

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    setProfiles(users);
  }, []);
  const users = [
    {
      picture_url: "https://via.placeholder.com/300x300?text=Default+Profile+Picture",
      id: 1,
      name: "John Doe",
      description: `From: Evanston, IL<br/>
            Hobbies: Reading, Writing, Hiking<br/>
            Traits: Funny, Outgoing, Adventurous<br/>
            Major: Theater`
    },
    {
      picture_url: "https://via.placeholder.com/300x300?text=Default+Profile+Picture",
      id: 2,
      name: "Jane Doe",
      description: `From: Dallas, TX<br/>
            Hobbies: Coding, Running, Watching Movies<br/>
            Traits: Charismatic, Brave, Annoying<br/>
            Major: Computer Science`
    },
    {
      picture_url: "https://via.placeholder.com/300x300?text=Default+Profile+Picture",
      id: 3,
      name: "Chad Powers",
      description: `From: Los Angeles, CA<br/>
            Hobbies: Reading, Writing, Hiking<br/>
            Traits: Perfect, Amazing, Humble<br/>
            Major: Economics`
    },
    {
      picture_url: "https://via.placeholder.com/300x300?text=Default+Profile+Picture",
      id: 4,
      name: "LeBron James",
      description: `From: Akron, OH<br/>
            Hobbies: Reading, Writing, Hiking<br/>
            Traits: Athletic, GOAT, Perfect Human<br/>
            Major: Learning and Organizational Change`
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="profiles-grid">
        {profiles.map((profile) => (
          <ProfileCard profile={profile} key={profile.id} />
        ))}
      </div>
      <Buttons />
    </div>
  );
}

export default App;
