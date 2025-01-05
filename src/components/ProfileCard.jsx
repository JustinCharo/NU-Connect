import "../css/ProfileCard.css";
import { useProfileContext } from "../contexts/ProfileContext";

function ProfileCard({profile}) {
  
  // Creates state variables
  const {isFavorite, addToFavorites, removeFromFavorites} = useProfileContext();
  const favorite = isFavorite(profile.id);

  // Saves or removes profile from favorites depending on the current state
  function saveProfile(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(profile.id);
    } else {
      addToFavorites(profile);
    }
  }
  
  // Returns the profile card
  return (
    <div className="userProfile">
      <div className="profile-card">
        <img
          src={profile.profilepicture}
          alt={profile.firstname}
          className="profile-picture"
        />
        <div className="profile-name">
          <h2>{profile.firstname} {profile.lastname}</h2>
        </div>
        <div className="profile-description">
          <div>
            Email: {profile.email}{"\n"}
            Bio: {profile.bio}{"\n"}
            Major: {profile.major}{"\n"}
            Graduation Year: {profile.graduationyear}
          </div>
        </div>
        <div className="button-container">
          <button className={`favorite-button ${favorite ? "button-pressed" : ""}`} onClick={saveProfile}>{`${favorite ? "Unsave Profile!" : "Make a new friend!"}`}</button>
        </div>
      </div>
    </div>
    )
}

export default ProfileCard