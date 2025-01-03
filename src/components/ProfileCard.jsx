import "../css/ProfileCard.css";

function ProfileCard({profile}) {
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
            <p>{profile.description}</p>
          </div>
        </div>
      </div>
    )
}

export default ProfileCard