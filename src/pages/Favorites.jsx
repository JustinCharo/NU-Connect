import Navbar from "../components/Navbar"

function Favorites() {
    return (
        <div className="saved-empty">
            <Navbar />
            <h1>No Saved Profiles Yet</h1>
        </div>
    )
}

export default Favorites