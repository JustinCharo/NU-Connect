import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Create from "./pages/Create"
import SpecificProfiles from "./pages/SpecificProfiles"
import Navbar from "./components/Navbar"
import {Routes, Route} from "react-router-dom"

function App() {
    return (
        <div>
            <Navbar />
        <main className="main-content">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/favorites" element={<Favorites />}/>
                <Route path="/create" element={<Create />}/>
                <Route path="/search" element={<SpecificProfiles />}/>
            </Routes>
        </main>
        </div>
    );
}

export default App