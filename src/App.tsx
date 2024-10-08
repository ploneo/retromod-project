import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home, Joystick, Trophy, User } from 'lucide-react';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import LeaderboardPage from './pages/LeaderboardPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-green-400">
        <nav className="bg-gradient-to-r from-purple-900 to-indigo-900 p-4 shadow-lg">
          <div className="retro-container flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold retro-title">RetroMod Gaming</Link>
            <div className="flex space-x-4">
              <Link to="/" className="flex items-center text-cyan-300 hover:text-yellow-300 transition-colors"><Home className="mr-1" /> Home</Link>
              <Link to="/games" className="flex items-center text-cyan-300 hover:text-yellow-300 transition-colors"><Joystick className="mr-1" /> Games</Link>
              <Link to="/leaderboard" className="flex items-center text-cyan-300 hover:text-yellow-300 transition-colors"><Trophy className="mr-1" /> Leaderboard</Link>
              <Link to="/profile" className="flex items-center text-cyan-300 hover:text-yellow-300 transition-colors"><User className="mr-1" /> Profile</Link>
            </div>
          </div>
        </nav>

        <main className="retro-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>

        <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-4 mt-8">
          <div className="retro-container text-center">
            <p>&copy; 2024 RetroMod Gaming. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;