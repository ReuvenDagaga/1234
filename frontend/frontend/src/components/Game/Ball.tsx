import React, { useState, useEffect } from 'react';

const Ball: React.FC = () => {
  const [position, setPosition] = useState({ x: Math.random() * 6000, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => ({
        ...prevPosition,
        y: prevPosition.y + 5,
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'red',
      }}
    ></div>
  );
};

export default Ball;
