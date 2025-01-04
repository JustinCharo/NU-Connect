import ProfileCard from './ProfileCard.jsx';
import { useState, useEffect } from 'react';
import { getAllUsers, getUserByID } from '../services/api.js';
export default function Profiles () {

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
        ))}
        </div>
    )
}