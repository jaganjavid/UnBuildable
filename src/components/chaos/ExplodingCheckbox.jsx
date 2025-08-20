import React, { useState } from 'react';

const ExplodingCheckbox = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="bg-white text-black p-4 rounded w-full max-w-md">
      <h2 className="font-bold mb-2">💥 Exploding Checkbox</h2>
      {show ? (
        <label className="flex items-center gap-2">
          <input type="checkbox" onClick={() => setShow(false)} />
          Click me… I dare you
        </label>
      ) : (
        <p className="text-red-600">☠️ It exploded!</p>
      )}
    </div>
  );
};

export default ExplodingCheckbox;
