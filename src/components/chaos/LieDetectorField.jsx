import React, { useState } from 'react';

const LieDetectorField = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const detectLie = (value) => {
    const lower = value.toLowerCase();

    if (lower.includes('yes')) return 'no';
    if (lower.includes('no')) return 'maybe';
    if (lower.includes('maybe')) return 'absolutely';
    if (lower.includes('idk')) return 'you know';
    if (lower.includes('true')) return 'false';
    if (lower.includes('false')) return 'true';

    return value; // unchanged if not suspicious
  };

  const handleChange = (e) => {
    const rawValue = e.target.value;
    const corrected = detectLie(rawValue);

    setInput(corrected);

    if (corrected !== rawValue) {
      setMessage('🧠 Lie detected. We fixed it for you.');
    } else {
      setMessage('');
    }
  };

  return (
    <div className="bg-white text-black p-4 rounded w-full max-w-md">
      <h2 className="font-bold mb-2">🧪 Lie Detector Field</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type something honest..."
        className="border px-3 py-2 w-full rounded"
      />
      {message && <p className="text-sm text-red-600 mt-2">{message}</p>}
    </div>
  );
};

export default LieDetectorField;
