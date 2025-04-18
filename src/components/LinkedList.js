import React, { useState } from 'react';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const LinkedList = () => {
  const [head, setHead] = useState(null);
  const [input, setInput] = useState('');
  const [deleteIndex, setDeleteIndex] = useState('');
  const [renderList, setRenderList] = useState([]);

  const addNode = () => {
    if (!input.trim()) return;

    const newNode = new Node(input);

    if (!head) {
      setHead(newNode);
      updateRenderList(newNode);
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      updateRenderList(head);
    }

    setInput('');
  };

  const deleteNodeAtIndex = () => {
    const index = parseInt(deleteIndex);
    if (isNaN(index) || index < 0 || index >= renderList.length) return;

    if (index === 0) {
      const newHead = head.next;
      setHead(newHead);
      updateRenderList(newHead);
    } else {
      let current = head;
      let prev = null;
      let i = 0;

      while (current && i < index) {
        prev = current;
        current = current.next;
        i++;
      }

      if (prev && current) {
        prev.next = current.next;
        updateRenderList(head);
      }
    }

    setDeleteIndex('');
  };

  const insertNodeAtIndex = () => {
    const index = parseInt(deleteIndex);
    if (isNaN(index) || index < 0 || index > renderList.length) return;
  
    const newNode = new Node(input);
  
    if (index === 0) {
      newNode.next = head;
      setHead(newNode);
      updateRenderList(newNode);
    } else {
      let current = head;
      let prev = null;
      let i = 0;
  
      while (current && i < index) {
        prev = current;
        current = current.next;
        i++;
      }
  
      if (prev && current) {
        prev.next = newNode;
        newNode.next = current;
        updateRenderList(head);
      }
    }
  
    setInput('');
    setDeleteIndex('');
  };

  const updateRenderList = (headNode) => {
    const temp = [];
    let current = headNode;
    while (current) {
      temp.push(current);
      current = current.next;
    }
    setRenderList(temp);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Linked List Visualizer</h2>

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
          value={deleteIndex}
          onChange={(e) => setDeleteIndex(e.target.value)}
          placeholder="Enter Index"
          style={{ ...styles.input, width: '120px' }}
        />

        <div style={styles.buttonGroup}>
          <button
            style={styles.button}
            onClick={addNode}
            disabled={!input}
          >
            ➕ Add Node
          </button>
          <button
            style={styles.button}
            onClick={insertNodeAtIndex}
            disabled={!input}
          >
            ➕ Add Node at {deleteIndex}
          </button>
          <button
            style={styles.button}
            onClick={deleteNodeAtIndex}
            disabled={!deleteIndex}
          >
            🗑️ Delete at Index
          </button>
        </div>
      </div>

      <div style={styles.stackContainer}>
        <p style={styles.stackSize}>List Size: {renderList.length}</p>
        {renderList.length === 0 ? (
          <p style={styles.emptyMessage}>The list is empty.</p>
        ) : (
          <div style={styles.linkedList}>
            {renderList.map((node, index) => (
              <React.Fragment key={index}>
                <div style={styles.stackItem}>
                  <strong>{node.value}</strong>
                  {index === 0 && <span style={styles.label}>Head</span>}
                  {index === renderList.length - 1 && <span style={styles.label}>Tail</span>}
                </div>
                {index < renderList.length - 1 && <div style={styles.arrow}>→</div>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
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
    flexWrap: 'wrap',
  },
  input: {
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    flex: 1,
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    minWidth: '160px',
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
  stackContainer: {
    textAlign: 'center',
  },
  stackSize: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '15px',
  },
  linkedList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '10px',
  },
  stackItem: {
    background: '#fff',
    padding: '12px 18px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    minWidth: '100px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  arrow: {
    fontSize: '24px',
    color: '#555',
  },
  label: {
    fontSize: '12px',
    color: '#777',
    display: 'block',
    marginTop: '6px',
  },
  emptyMessage: {
    fontStyle: 'italic',
    color: '#777',
  },
};

export default LinkedList;