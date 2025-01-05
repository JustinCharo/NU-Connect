import ProfileCard from './ProfileCard.jsx';
import { useState, useEffect } from 'react';
import { getAllUsers } from '../services/api.js';
function Profiles () {

    const [profiles, setProfiles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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