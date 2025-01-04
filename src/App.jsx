import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Create from "./pages/Create"
import {Routes, Route} from "react-router-dom"

function App() {
    return (
        <main className="main-content">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/favorites" element={<Favorites />}/>
                <Route path="/create" element={<Create />}/>
            </Routes>
        </main>
    );
}

export default App