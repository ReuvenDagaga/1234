import React, { useState } from 'react';

const Gun: React.FC = () => {
  const [gunPosition, setGunPosition] = useState({ x: 250, y: 350 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const newX = e.clientX - 50; // 50 is the width of the gun (centered)
    setGunPosition((prevPosition) => ({
      ...prevPosition,
      x: newX < 0 ? 0 : newX > 550 ? 550 : newX, // Boundary checks
    }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: '#f0f0f0',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: `${gunPosition.x}px`,
          width: '50px',
          height: '20px',
          backgroundColor: 'black',
        }}
      ></div>
    </div>
  );
};

export default Gun;
