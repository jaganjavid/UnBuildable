import React, { useState } from 'react';

const ReverseInput = () => {
  const [text, setText] = useState('');

  return (
    <div className="bg-white text-black p-4 rounded w-full max-w-md">
      <h2 className="font-bold mb-2">🔁 Reverse Input</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value.split('').reverse().join(''))}
        placeholder="Type something..."
        className="border px-2 py-1 w-full rounded"
      />
      <p className="mt-2 text-xs text-gray-500">Everything you type flips 👀</p>
    </div>
  );
};

export default ReverseInput;
