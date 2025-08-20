import React, { useEffect, useRef, useState } from 'react';

const TeleportButton = () => {
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const teleport = () => {
      if (!containerRef.current || !buttonRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = buttonRef.current.getBoundingClientRect();

      const maxLeft = containerRect.width - buttonRect.width;
      const maxTop = containerRect.height - buttonRect.height;

      const newLeft = Math.floor(Math.random() * maxLeft);
      const newTop = Math.floor(Math.random() * maxTop);

      setPosition({ left: newLeft, top: newTop });
    };

    teleport(); // teleport once on mount

    const interval = setInterval(() => {
      teleport();
    }, 3000); // teleport every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[250px] border-2 border-dashed border-gray-500 rounded-lg overflow-hidden"
    >
      <button
        ref={buttonRef}
        style={{ position: 'absolute', left: position.left, top: position.top }}
        className="bg-neon text-black font-bold px-5 py-3 rounded shadow-md transition-all duration-300 hover:bg-white"
      >
        I'm Here Now!
      </button>
    </div>
  );
};

export default TeleportButton;
