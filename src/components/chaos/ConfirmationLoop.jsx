import React, { useState } from 'react';

const ConfirmationLoop = () => {
  const [level, setLevel] = useState(0);
  const [show, setShow] = useState(false);

  const phrases = [
    'Are you sure?',
    'Are you really sure?',
    'Are you REALLY really sure?',
    'Are you 100% absolutely sure?',
    'Do you swear on your code?',
    'Do you pinky promise?',
    'Final confirmation (just kidding)',
  ];

  const getPhrase = () => {
    const capped = level % phrases.length;
    return phrases[capped];
  };

  return (
    <div className="bg-white text-black p-4 rounded w-full max-w-md relative">
      <h2 className="font-bold mb-4">🔁 Confirmation Loop</h2>
      <button
        onClick={() => {
          setShow(true);
          setLevel(0);
        }}
        className="bg-chaos text-black px-4 py-2 rounded shadow"
      >
        Delete Account 😬
      </button>

      {show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg p-6 w-[90%] max-w-sm shadow-xl text-center">
            <p className="text-lg font-semibold">{getPhrase()}</p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShow(false)}
              >
                Cancel
              </button>
              <button
                className="bg-chaos text-white px-4 py-2 rounded bg-red-500 hover:bg-red-800"
                onClick={() => setLevel(level + 1)}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmationLoop;
