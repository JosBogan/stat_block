import React from 'react';
import './App.css';

// components

import StatblockForm from './statblock_form/StatblockForm'
import Statblock from './statblock/Statblock'

function App() {
  return (
    <div className="app">
      <div className="app_container">
        <div className="stat_block">
          <Statblock />
        </div>
        <div className="stat_block_form">
          <StatblockForm />
        </div>
      </div>
    </div>
  );
}

export default App;
