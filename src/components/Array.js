import React, { useState } from 'react';

const ArrayComponent = () => {
  const [array, setArray] = useState([]);
  const [input, setInput] = useState('');
  const [inputIndex, setInputIndex] = useState('');
  const [log, setLog] = useState([]);

  const addElement = () => {
    if (input) {
      setArray([...array, input]);
      setInput('');
    }
  };

  const removeElement = () => {
    if (array.length) {
      const newArray = [...array];
      newArray.pop();
      setArray(newArray);
    }
  };

  const prependElement=()=>
  {
    if (input) {
      const newArray = [...array];
      const newLog = [`Prepending "${input}" to the beginning of the array.`];
  
      for (let i = array.length - 1; i >= 0; i--) {
        newLog.push(`Shifting element at index ${i} → ${i + 1}`);
      }
  
      const result = [input, ...array];
      setArray(result);
      setInput('');
      setLog(newLog);
    }

  };

  const insertAtIndex=() =>
  {
    const index = parseInt(inputIndex);
  if (input && !isNaN(index) && index >= 0 && index <= array.length) {
    const newArray = [...array];
    const newLog = [`Inserting "${input}" at index ${index}`];

    for (let i = array.length - 1; i >= index; i--) {
      newLog.push(`Shifting element at index ${i} → ${i + 1}`);
    }

    newArray.splice(index, 0, input);
    setArray(newArray);
    setInput('');
    setInputIndex('');
    setLog(newLog);
  }

  };

  const removeAtIndex=() =>
    {
      const index = parseInt(inputIndex);
      if (!isNaN(index) && index >= 0 && index < array.length) {
        const newArray = [...array];
        const newLog = [`Removing element at index ${index} ("${array[index]}")`];
    
        for (let i = index + 1; i < array.length; i++) {
          newLog.push(`Shifting element at index ${i} → ${i - 1}`);
        }
    
        newArray.splice(index, 1);
        setArray(newArray);
        setInputIndex('');
        setLog(newLog);
      }
  
    };

    return (
      <div style={styles.container}>
        <h2 style={styles.title}> Array Demonstration</h2>
  
        <div style={styles.inputGroup}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter value"
            style={styles.input}
          />
         <input
          type="number"
          value={inputIndex}
          onChange={(e) => setInputIndex(e.target.value)}
          placeholder="Enter index"
          style={styles.input}
        />
      </div>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={addElement}>➕ Push</button>
        <button style={styles.button} onClick={prependElement}>⏮ Prepend</button>
        <button style={styles.button} onClick={insertAtIndex}>📍 Insert at {inputIndex}</button>
        <button style={styles.button} onClick={removeElement}>❌ Pop</button>
        <button style={styles.button} onClick={removeAtIndex}> ❌ Remove at {inputIndex}</button>
      </div>

      <div style={styles.arrayContainer}>
        {array.length === 0 ? (
          <p style={{ fontStyle: 'italic', color: '#777' }}>Array is empty.</p>
        ) : (
          array.map((item, index) => (
            <div key={index} style={styles.arrayItem}>
              <span style={styles.badge}>#{index}</span>
              <span style={styles.itemText}>{item}</span>
            </div>
          ))
        )}
      </div>

      {log.length > 0 && (
       <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#fff8dc', borderRadius: '6px' }}>
       <h4>Operation Log:</h4>
       <ul>
        {log.map((entry, i) => (
        <li key={i}>{entry}</li>
       ))}
      </ul>

      <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <button style={styles.button} onClick={() => setLog([])}> Clear Log</button>
    </div>
      </div>
     )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '700px',
    margin: '40px auto',
    padding: '20px',
    background: '#f0f4f8',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '15px',
  },
  input: {
    padding: '8px 12px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    flex: 1,
  },
  buttonGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '14px',
    background: '#4b88a2',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: '0.2s',
  },
  arrayContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  },
  arrayItem: {
    background: '#fff',
    padding: '8px 12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    minWidth: '60px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  },
  badge: {
    backgroundColor: '#17a2b8',
    color: '#fff',
    borderRadius: '50%',
    padding: '2px 8px',
    marginRight: '8px',
    fontSize: '12px',
  },
  itemText: {
    fontWeight: 'bold',
    color: '#333',
  }
};

export default ArrayComponent;
