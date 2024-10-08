import React from 'react';

const leaderboardData = [
  { rank: 1, username: 'RetroKing', score: 10000 },
  { rank: 2, username: 'PixelQueen', score: 9500 },
  { rank: 3, username: 'ArcadeMaster', score: 9000 },
  { rank: 4, username: 'NeonNinja', score: 8500 },
  { rank: 5, username: 'BitCrusher', score: 8000 },
];

const LeaderboardPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 neon-text text-center">Leaderboard</h1>
      <div className="retro-card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-purple-500">
              <th className="p-2 text-left">Rank</th>
              <th className="p-2 text-left">Username</th>
              <th className="p-2 text-left">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry) => (
              <tr key={entry.rank} className="border-b border-purple-500">
                <td className="p-2">{entry.rank}</td>
                <td className="p-2">{entry.username}</td>
                <td className="p-2">{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardPage;