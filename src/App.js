import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';

function App() {
  const [selectedDataStructure, setSelectedDataStructure] = useState('');

  return (
    <div>
      <Navbar onSelectDataStructure={setSelectedDataStructure} />
      <Visualizer selectedDataStructure={selectedDataStructure} />
    </div>
  );
}

export default App;
