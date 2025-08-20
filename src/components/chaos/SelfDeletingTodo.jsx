import React, { useState, useEffect } from 'react';

const SelfDeletingTodo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (!text.trim()) return;
    const id = Date.now();
    setTodos([...todos, { id, text }]);
    setText('');

    // Delete after 3 seconds
    setTimeout(() => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }, 3000);
  };

  return (
    <div className="bg-white text-black p-4 rounded w-full max-w-md">
      <h2 className="font-bold mb-2">🗑️ Self-Deleting Todo</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
        className="border px-2 py-1 w-full mb-2 rounded"
      />
      <button onClick={addTodo} className="bg-black text-white px-4 py-1 rounded">
        Add
      </button>

      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="bg-red-100 px-3 py-2 rounded text-sm">
            {todo.text} (⏳ dies in 3s)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelfDeletingTodo;
