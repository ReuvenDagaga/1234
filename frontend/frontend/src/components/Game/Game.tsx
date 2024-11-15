import React, { useEffect, useState } from 'react';
import Gun from './Gun';
import Ball from './Ball';

const Game: React.FC = () => {
  const [balls, setBalls] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalls((prevBalls) => [
        ...prevBalls,
        { x: Math.random() * 600, y: 0 },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', width: '600px', height: '400px' }}>
      {balls.map((ball, index) => (
        <Ball key={index} />
      ))}
      <Gun />
    </div>
  );
};

export default Game;
