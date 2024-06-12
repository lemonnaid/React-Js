import React, { useState } from 'react';

const Colors = () => {
  const [bgColor, setBgColor] = useState('white'); 

  const handleClick = (color) => {
    setBgColor(color.value);
    document.body.style.backgroundColor = color.value;
  };

  return (
    <div className="color-switch">
      {colorpick.map((color) => (
        <button key={color.name} className="color-btn" onClick={() => handleClick(color)}>
          {color.name}
        </button>
      ))}
      <button className="color-btn" onClick={() => setBgColor('white')}>Reset</button>
    </div>
  );
};

const colorpick = [
  { name: 'red', value: '#AA1C1C' },
  { name: 'blue', value: '#321D8B' },
  { name: 'green', value: '#1C5B21' },
  { name: 'yellow', value: '#F3D036' },
];

export default Colors;
