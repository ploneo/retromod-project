import React from 'react';

const games = [
  { id: 1, title: 'Pixel Platformer', image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Retro Racer', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Space Invaders 2.0', image: 'https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Neon Tetris', image: 'https://images.unsplash.com/photo-1578377375762-cbcc98d68af0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
];

const GamesPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 neon-text text-center">Games Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {games.map((game) => (
          <div key={game.id} className="retro-card">
            <img src={game.image} alt={game.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">{game.title}</h2>
            <button className="retro-button w-full">Play Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;