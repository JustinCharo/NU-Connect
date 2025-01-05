import {createContext, useState, useEffect, useContext } from "react"

const ProfileContext = createContext();

export const useProfileContext = () => useContext(ProfileContext)

export const ProfileProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = localStorage.getItem("favorites");
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites])

    const addToFavorites = (profile) => {
        setFavorites(prev => [...prev, profile]);
    }

    const removeFromFavorites = (profileID) => {
        setFavorites(prev => prev.filter(profile => profile.id !== profileID));
    }

    const isFavorite = (profileID) => {
        return favorites.some(profile => profile.id === profileID);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <ProfileContext.Provider value={value}>
        {children}
    </ProfileContext.Provider>
}