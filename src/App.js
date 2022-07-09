import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import NavMenu from "./components/NavMenu/NavMenu";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
    return (
        <Router>
            <NavMenu></NavMenu>

            <Routes>
                <Route path="/" element={<Home />}></Route>;
                <Route path="/about" element={<About />}></Route>;
                <Route path="/portfolio" element={<Portfolio />}></Route>;
            </Routes>
        </Router>
    );
}

export default App;
