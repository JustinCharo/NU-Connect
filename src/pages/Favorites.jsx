import "../css/Favorites.css";
import { useProfileContext } from "../contexts/ProfileContext";
import ProfileCard from "../components/ProfileCard";

function Favorites() {
    const {favorites} = useProfileContext();

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

    return (
        <div className="favorites-empty">
            <div>No Saved Profiles Yet</div>
        </div>
    )
}

export default Favorites