import React, { useState } from 'react';

const LinkedList = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const addNode = () => {
    if (input) {
      setList([...list, { value: input, next: null }]);
      setInput('');
    }
  };

  return (
    <div>
      <h2>Linked List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter value"
      />
      <button onClick={addNode}>Add Node</button>
      <div>
        {list.map((node, index) => (
          <div key={index}>
            <span>{node.value}</span>
            {index < list.length - 1 && ' → '}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedList;
