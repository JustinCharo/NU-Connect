import "../css/ProfileCard.css";

function ProfileCard({profile}) {

  function saveProfile() {
    console.log('Profile Saved!');
  }
  
  return (
    <div className="userProfile">
      <div className="profile-card">
        <img
          src={profile.picture_url}
          alt={profile.name}
          className="profile-picture"
        />
        <div className="profile-name">
          <h2>{profile.name}</h2>
        </div>
        <div className="profile-description">
          <div>{profile.description}</div>
        </div>
        <div className="button-container">
          <button className="button" onClick={saveProfile}>Make a new friend!</button>
        </div>
      </div>
    </div>
    )
}

export default ProfileCard