import React, { useState } from 'react';
import './App.css';

// components

import StatblockForm from './statblock_form/StatblockForm'
import Statblock from './statblock/Statblock'

function App() {

  const [ stats, setStats ] = useState({
    name: "New Creature",
    size: "",
    type: "",
    specifics: "",
    alignment: "",
    ac: 0,
    acType: "",
    hitpoints: "",
    groundspeed: 0,
    swimspeed: 0,
    flyspeed: 0,
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
    savingThrows: [],
    skills: [],
    damageVul: [],
    damageRes: [],
    damageImm: [],
    conditionImm: [],
    senses: [],
    languages: [],
    challange: 0,
    traits: [],
    actions: []
  })

  function onChange(eventObj) {
    setStats({...stats, [eventObj.label]: eventObj.value })

    // if (eventObj.type === 'dropdown') {
    //   setStats({...stats, [event.input]: event.dataLabel })
    // } else if (event.type === 'optionSelect') {
    //   setStats({...stats, [event.input]: event.value })
    // } else {
    //   setStats({...stats, [event.target.name]: event.target.value })
    // }
  }

  function acStats(input) {
    console.log(input)
    if (input.ac !== stats.ac || input.acType !== stats.acType)  {
      setStats({...stats, ac: input.ac, acType: input.acType})
    }
  }

  function calculateAc() {
    // const ac = stats.dex + 
  }

  return (
    <div className="app">
      <div className="app_container">
        <div className="stat_block">
          <Statblock stats={stats}/>
        </div>
        <div className="stat_block_form_section">
          <StatblockForm 
            onChange={onChange} 
            acStats={acStats}
            stats={stats}/>
        </div>
      </div>
    </div>
  );
}

export default App;
