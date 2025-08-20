import React, { useState } from 'react';

const InfiniteModal = () => {
  const [modals, setModals] = useState(1);

  const closeModal = () => {
    setModals(modals + 2); // 1 closed = 2 more appear
  };

  return (
    <div className="p-4">
      <h2 className="font-bold text-white mb-2">🌀 Infinite Modal</h2>
      {Array.from({ length: modals }).map((_, i) => (
        <div key={i} className="fixed top-[20%] left-[20%] bg-white text-black shadow-xl p-4 rounded z-50">
          <p>This is modal #{i + 1}</p>
          <button onClick={closeModal} className="bg-black text-white px-3 py-1 mt-2 rounded">
            Close
          </button>
        </div>
      ))}
    </div>
  );
};

export default InfiniteModal;
