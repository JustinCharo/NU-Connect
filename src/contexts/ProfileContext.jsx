import {createContext, useState, useEffect, useContext, useMemo } from "react"

const ProfileContext = createContext();

export const useProfileContext = () => useContext(ProfileContext)

export const ProfileProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from local storage
    useEffect(() => {
        const savedFavorites = localStorage.getItem("favorites");
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    // Save favorites to local storage
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

    const value = useMemo (() => ({
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }),
    [favorites]);

    return <ProfileContext.Provider value={value}>
        {children}
    </ProfileContext.Provider>
}