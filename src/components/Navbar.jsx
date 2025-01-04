import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">NU CONNECT</div>
      <div className="navbar-search">
        <input type="text" placeholder="Search for profile..." className="search-bar"/>
      </div>
      <div className="navbar-links">
        <a href="create-profile-link">Create Profile</a>
        <a href="edit-profile-link">Edit Profile</a>
        <a href="favorites-link">Saved Profiles</a>
      </div>
    </div>
  )
}

export default Navbar

