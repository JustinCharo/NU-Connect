import './css/App.css';
import ProfileCard from './components/ProfileCard';
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
      description: <div>From: Evanston, IL<br/>Hobbies: Reading, Writing, Hiking<br/>Traits: Funny, Outgoing, Adventurous<br/>Major: Theater</div>
    },
    {
      picture_url: "https://via.placeholder.com/300x300?text=Default+Profile+Picture",
      id: 2,
      name: "Jane Doe",
      description: <div>From: Dallas, TX<br/>Hobbies: Coding, Running, Watching Movies<br/>Traits: Charismatic, Brave, Annoying<br/>Major: Computer Science</div>
    },
    {
      picture_url: "https://via.placeholder.com/300x300?text=Default+Profile+Picture",
      id: 3,
      name: "Chad Powers",
      description: <div>From: Los Angeles, CA<br/>Hobbies: Reading, Writing, Hiking<br/>Traits: Perfect, Amazing, Humble<br/>Major: Economics</div>
    },
    {
      picture_url: "https://via.placeholder.com/300x300?text=Default+Profile+Picture",
      id: 4,
      name: "LeBron James",
      description: <div>From: Akron, OH<br/>Hobbies: Playing Basketball<br/>Traits: Athletic, GOAT, Perfect Human<br/>Major: Learning and Organizational Change</div>
    },
    {
      picture_url: "https://via.placeholder.com/300x300?text=Default+Profile+Picture",
      id: 5,
      name: "Cool Guy",
      description: <div>From: Idk<br/>Hobbies: Being Cool<br/>Traits: Cool<br/>Major: French</div>
    },
    {
      picture_url: "https://via.placeholder.com/300x300?text=Default+Profile+Picture",
      id: 6,
      name: "Really Cool Guy",
      description: <div>From: Idk<br/>Hobbies: Being Really Cool<br/>Traits: Really Cool<br/>Major: French</div>
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
    </div>
  );
}

export default App;
