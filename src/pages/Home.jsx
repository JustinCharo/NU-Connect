import '../css/Home.css';
import Profiles from '../components/Profiles';
import React from 'react';

function Home() {

  const search = () => {};

  return (
    <div className="HomePage">
      <form onSubmit={search} className="search-form">
        <input type="text" className="search-input" placeholder="Search..."/>
      </form>
      <Profiles />
    </div>
  );
}

export default Home;