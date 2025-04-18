import React, { useState } from 'react';

const Queue = () => {
  const [queue, setQueue] = useState([]);
  const [input, setInput] = useState('');

  const enqueue = () => {
    if (input) {
      setQueue([...queue, input]);
      setInput('');
    }
  };

  const dequeue = () => {
    if (queue.length) {
      const newQueue = [...queue];
      newQueue.shift();
      setQueue(newQueue);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📥 Queue Visualization</h2>
      <div style={styles.inputGroup}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter value"
          style={styles.input}
        />
        <div style={styles.buttonGroup}>
          <button onClick={enqueue} style={styles.button}>Enqueue</button>
          <button onClick={dequeue} style={styles.button}>Dequeue</button>
        </div>
      </div>
      <div style={styles.queueContainer}>
        {queue.length === 0 ? (
          <p style={styles.emptyQueue}>Queue is empty.</p>
        ) : (
          queue.map((item, index) => (
            <div key={index} style={styles.queueItem}>
              <span style={styles.badge}>#{index}</span>
              <span style={styles.itemText}>{item}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '700px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '25px',
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '25px',
  },
  input: {
    padding: '12px 15px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '200px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
  },
  button: {
    padding: '12px 25px',
    fontSize: '16px',
    backgroundColor: '#4b88a2',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    letterSpacing: '0.5px',
  },
  buttonHover: {
    backgroundColor: '#3d72b8',
  },
  queueContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  queueItem: {
    backgroundColor: '#4b88a2',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: '10px',
    fontSize: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  badge: {
    backgroundColor: '#2b3e56',
    color: '#fff',
    borderRadius: '50%',
    padding: '5px 10px',
    fontSize: '14px',
  },
  itemText: {
    fontWeight: '500',
    fontSize: '16px',
  },
  emptyQueue: {
    fontSize: '18px',
    fontStyle: 'italic',
    color: '#777',
  },
};

export default Queue;
