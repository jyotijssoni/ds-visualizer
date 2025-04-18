import React from 'react';
import Stack from './Stack';
import Queue from './Queue';
import LinkedList from './LinkedList';
import BinaryTree from './BinaryTree';
import Graph from './Graph';
import ArrayComponent from './Array';

const Visualizer = ({ selectedDataStructure }) => {
  switch (selectedDataStructure) {
    case 'stack':
      return <Stack />;
    case 'queue':
      return <Queue />;
    case 'linkedlist':
      return <LinkedList />;
    case 'tree':
      return <BinaryTree />;
    case 'graph':
      return <Graph />;
    case 'array':
      return <ArrayComponent />;
    default:
      return <div  style={styles.infoText}>Select a data structure to visualize.</div>;
  }
};

const styles ={
  infoText: {
    marginTop: '20px',
    fontSize: '18px', // Slightly larger font for readability
    color: 'white', // Soft light blue color for the text
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: '0.5px',
    fontStyle: 'italic',
    padding: '10px',
    background: '#007bff',
    borderRadius: '6px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Light shadow for depth
    maxWidth: '400px',
    margin: '20px auto', // Centered and with space around it
  }

};

export default Visualizer;
