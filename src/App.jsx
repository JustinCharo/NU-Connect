import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Create from "./pages/Create";
import Navbar from "./components/Navbar";
import { ProfileProvider } from "./contexts/ProfileContext";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <ProfileProvider>
            <Navbar />
        <main className="main-content">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/favorites" element={<Favorites />}/>
                <Route path="/create" element={<Create />}/>
            </Routes>
        </main>
        </ProfileProvider>
    );
}

export default App