import "../css/Favorites.css";
import { useProfileContext } from "../contexts/ProfileContext";
import ProfileCard from "../components/ProfileCard";

function Favorites() {
    const {favorites} = useProfileContext();

    // Renders each of the favorited profiles
    if (favorites) {
        return (
            <div>
                <div className="favorites-header">
                    <div>Saved Profiles</div>
                </div>
                <div className="profiles-grid">
                    {favorites.map((profile) => (
                    <ProfileCard profile={profile} key={profile.id} />
                    )
                )}
                </div>
            </div>
           
        );
    }

    // If there are no favorited profiles, returns
    return (
        <div className="favorites-empty">
            <div>No Saved Profiles Yet</div>
        </div>
    )
}

export default Favorites