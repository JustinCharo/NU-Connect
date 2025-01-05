import ProfileCard from './ProfileCard.jsx';
import { useState, useEffect } from 'react';
import { getAllUsers } from '../services/api.js';
function Profiles () {

    const [profiles, setProfiles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Loads all users/profiles
    useEffect(() => {
        const loadAllUsers = async () => {
            try {
                const allUsers = await getAllUsers();
                setProfiles(allUsers);
            }
            catch (error) {
                console.log(error);
                setError("Failed to load profiles");
            }
            finally {
                setLoading(false);
            }
        };
    
        loadAllUsers();
    }, []);

    // Returns each profile as a ProfileCard component
    return (
        <div className="profiles-grid">
            {profiles.map((profile) => (
                <ProfileCard profile={profile} key={profile.id} />
            )
        )}
        </div>
    )
}

export default Profiles