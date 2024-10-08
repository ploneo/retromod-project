import React from 'react';
import { User, Trophy, Star } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 neon-text text-center">Player Profile</h1>
      <div className="retro-card">
        <div className="flex items-center mb-6">
          <User size={64} className="mr-4" />
          <div>
            <h2 className="text-2xl font-bold">RetroGamer42</h2>
            <p className="text-purple-400">Level 15 Arcade Master</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <Trophy className="mr-2" /> Achievements
            </h3>
            <ul className="list-disc list-inside">
              <li>Perfect Score in Pixel Platformer</li>
              <li>Undefeated Champion in Retro Racer</li>
              <li>Saved the Galaxy in Space Invaders 2.0</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <Star className="mr-2" /> Stats
            </h3>
            <ul>
              <li>Total Score: 87,500</li>
              <li>Games Played: 142</li>
              <li>Time Played: 73 hours</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;