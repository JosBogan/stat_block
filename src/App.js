import React, { useState } from 'react';
import './App.css';

// components

import StatblockForm from './statblock_form/StatblockForm'
import Statblock from './statblock/Statblock'

function App() {

  const [ stats, setStats ] = useState({
    name: "",
    size: "",
    type: "",
    specifics: "",
    alignment: "",
    hitpoints: "",
    groundspeed: 0,
    swimspeed: 0,
    flyspeed: 0
  })

  function onChange(event) {
    setStats({...stats, [event.target.name]: event.target.value })
  }

  return (
    <div className="app">
      <div className="app_container">
        <div className="stat_block">
          <Statblock stats={stats}/>
        </div>
        <div className="stat_block_form">
          <StatblockForm onChange={onChange}/>
        </div>
      </div>
    </div>
  );
}

export default App;
