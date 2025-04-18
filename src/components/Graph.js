import React, { useState } from 'react';

const Graph = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const addNode = (node) => {
    setNodes([...nodes, node]);
  };

  const addEdge = (node1, node2) => {
    setEdges([...edges, { node1, node2 }]);
  };

  return (
    <div>
      <h2>Graph</h2>
      <button onClick={() => addNode('A')}>Add Node A</button>
      <button onClick={() => addNode('B')}>Add Node B</button>
      <button onClick={() => addEdge('A', 'B')}>Add Edge A → B</button>
      <div>
        <h3>Nodes: {nodes.join(', ')}</h3>
        <h3>Edges: {edges.map(e => `${e.node1} → ${e.node2}`).join(', ')}</h3>
      </div>
    </div>
  );
};

export default Graph;
