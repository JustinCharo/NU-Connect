import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">NU CONNECT</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/create">Create Profile</Link>
        <Link to="/favorites">Saved Profiles</Link>
      </div>
    </div>
  )
}

export default Navbar

