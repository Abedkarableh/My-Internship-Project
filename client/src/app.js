// App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Haptic from './pages/Haptic';
import OhStudio from './pages/Oh.studio';

function NotFound() {
    return (
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <Link to="/" className="home-link">Return Home</Link>
        </div>
    );
}

function Home() {
    return <h1>Welcome! Choose a page:</h1>;
}

function App() {
    return (
        <Router>
            <nav className="general-nav">
                <Link to="/haptic">Haptic</Link>
                <Link to="/oh-studio">OH.STUDIO</Link>
            </nav>

            <Routes>
                <Route path="/haptic" element={<Haptic />} />
                <Route path="/oh-studio" element={<OhStudio />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}



export default App;