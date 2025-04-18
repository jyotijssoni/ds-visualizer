import React from 'react';

const Navbar = ({ onSelectDataStructure }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <h2 style={styles.title}>🧠 Visualize Data Structures</h2>
        <div style={styles.buttonGroup}>
          <button style={styles.button} onClick={() => onSelectDataStructure('array')}>📦 Array</button>
          <button style={styles.button} onClick={() => onSelectDataStructure('stack')}>📚 Stack</button>
          <button style={styles.button} onClick={() => onSelectDataStructure('queue')}>📥 Queue</button>
          <button style={styles.button} onClick={() => onSelectDataStructure('linkedlist')}>🔗 Linked List</button>
          <button style={styles.button} onClick={() => onSelectDataStructure('tree')}>🌳 Binary Tree</button>
          <button style={styles.button} onClick={() => onSelectDataStructure('graph')}>🕸 Graph</button>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    background: 'linear-gradient(90deg, #1a1a2e, #16213e)',
    padding: '20px 0',
    color: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '15px',
    textAlign: 'center',
    fontWeight: '600',
    color: '#f1f1f1',
    textShadow: '0 1px 3px rgba(0,0,0,0.4)',
  },
  buttonGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px',
  },
  button: {
    padding: '10px 20px',
    background: '#007bff',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
};

// Add hover effect using inline style workaround:
styles.button[':hover'] = {
  background: '#0056b3',
};

export default Navbar;
