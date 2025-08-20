import React, { useRef, useState } from 'react';

const RunawayButton = () => {
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const [hoverCount, setHoverCount] = useState(0);

  const moveButton = () => {
    if (!buttonRef.current || !containerRef.current) return;

    const button = buttonRef.current;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    const maxLeft = containerRect.width - button.offsetWidth;
    const maxTop = containerRect.height - button.offsetHeight;

    const newLeft = Math.floor(Math.random() * maxLeft);
    const newTop = Math.floor(Math.random() * maxTop);

    button.style.position = 'absolute';
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;

    setHoverCount((prev) => prev + 1);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden"
    >
      <button
        ref={buttonRef}
        onMouseEnter={moveButton}
        className="px-6 py-3 bg-red-600 text-white font-bold rounded transition-all duration-300 hover:bg-red-700 z-10"
      >
        Catch Me! 😈
      </button>

      <p className="absolute bottom-4 text-sm text-gray-400 font-mono">
        Hover attempts: {hoverCount}
      </p>
    </div>
  );
};

export default RunawayButton;
