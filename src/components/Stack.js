import React, { useState } from 'react';

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [input, setInput] = useState('');

  const push = () => {
    if (input) {
      setStack([...stack, input]);
      setInput('');
    }
  };

  const pop = () => {
    if (stack.length) {
      const newStack = [...stack];
      newStack.pop();
      setStack(newStack);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}> Stack Operations</h2>

      <div style={styles.inputGroup}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter value"
          style={styles.input}
        />
        <div style={styles.buttonGroup}>
          <button 
            style={styles.button} 
            onClick={push} 
            disabled={!input}
          >
            ➕ Push
          </button>
          <button 
            style={styles.button} 
            onClick={pop} 
            disabled={stack.length === 0}
          >
            ❌ Pop
          </button>
        </div>
      </div>

      <div style={styles.stackContainer}>
        <p style={styles.stackSize}>Stack Size: {stack.length}</p>
        {stack.length === 0 ? (
          <p style={styles.emptyMessage}>The stack is empty.</p>
        ) : (
          <div style={styles.stack}>
            {stack.map((item, index) => (
              <div key={index} style={styles.stackItem}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    background: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  inputGroup: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    flex: 1,
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '12px 18px',
    fontSize: '16px',
    background: '#4b88a2',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: '0.3s',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  buttonDisabled: {
    background: '#ccc',
    cursor: 'not-allowed',
  },
  stackContainer: {
    textAlign: 'center',
  },
  stackSize: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '15px',
  },
  stack: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  stackItem: {
    background: '#fff',
    padding: '12px 18px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    margin: '5px',
    minWidth: '100px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    fontWeight: 'bold',
    transition: '0.3s',
  },
  stackItemHover: {
    backgroundColor: '#e7f1f9',
  },
  emptyMessage: {
    fontStyle: 'italic',
    color: '#777',
  },
};

export default Stack;

