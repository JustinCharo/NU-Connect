import "../css/ProfileCard.css";

function ProfileCard({profile}) {

  function saveProfile() {
    console.log('Profile Saved!');
  }
  
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
            Email: {profile.email}
            Bio: {profile.bio}
            Major: {profile.major}
            Graduation Year: {profile.graduationyear}
          </div>
        </div>
        <div className="button-container">
          <button className="button" onClick={saveProfile}>Make a new friend!</button>
        </div>
      </div>
    </div>
    )
}

export default ProfileCard