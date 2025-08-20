import React, { useState } from 'react';

const RageSlider = () => {
  const [value, setValue] = useState(50);
  const [pos, setPos] = useState(0);

  const handleChange = () => {
    setValue(Math.floor(Math.random() * 100));
    setPos(Math.floor(Math.random() * 60) - 30); // Shift slider left/right
  };

  return (
    <div className="bg-white text-black p-4 rounded w-full max-w-md">
      <h2 className="font-bold mb-2">😡 Rage Slider</h2>
      <div style={{ transform: `translateX(${pos}px)` }} className="transition-all duration-200">
        <input
          type="range"
          value={value}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <p className="text-sm mt-1">Try dragging… if you can.</p>
    </div>
  );
};

export default RageSlider;
