import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8 welcome-title">Welcome to RetroMod Gaming</h1>
      <p className="mb-8">Experience the nostalgia of retro games with a modern twist!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="retro-card">
          <h2 className="text-2xl font-bold mb-4">Featured Game</h2>
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Featured Game" className="w-full h-48 object-cover rounded-lg mb-4" />
          <p className="mb-4">Dive into our latest retro-inspired masterpiece!</p>
          <Link to="/games" className="retro-button inline-block">Play Now</Link>
        </div>
        <div className="retro-card">
          <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
          <ul className="mb-4">
            <li>1. RetroKing - 10,000 pts</li>
            <li>2. PixelQueen - 9,500 pts</li>
            <li>3. ArcadeMaster - 9,000 pts</li>
          </ul>
          <Link to="/leaderboard" className="retro-button inline-block">View Full Leaderboard</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;