import React from 'react';
import InputList from './input-list';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <InputList slow={false} />
      </div>
    </React.StrictMode>
  );
}

export default App;
