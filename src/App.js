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
    ac: 0,
    hitpoints: "",
    groundspeed: 0,
    swimspeed: 0,
    flyspeed: 0,
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0
  })

  function onChange(event) {
    // console.log(event)
    if (event.type === 'dropdown') {
      setStats({...stats, [event.input]: event.dataLabel })
    } else {
      setStats({...stats, [event.target.name]: event.target.value })
    }
    // console.log([event.input], event.dataName)
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
