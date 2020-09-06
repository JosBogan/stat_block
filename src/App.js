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
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
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

  function onChange(event) {
    // console.log(event)
    if (event.type === 'dropdown') {
      setStats({...stats, [event.input]: event.dataLabel })
    } else if (event.type === 'optionSelect') {
      setStats({...stats, [event.input]: event.value })
    } else {
      setStats({...stats, [event.target.name]: event.target.value })
    }
    // console.log([event.input], event.dataName)
  }

  function changeAc(event) {
    setStats({...stats, ac: event.target.value })
  }

  function changeAcType(type) {
    setStats({...stats, acType: type })
  }

  return (
    <div className="app">
      <div className="app_container">
        <div className="stat_block">
          <Statblock stats={stats}/>
        </div>
        <div className="stat_block_form_section">
          <StatblockForm onChange={onChange} changeAc={changeAc} changeAcType={changeAcType} stats={stats}/>
        </div>
      </div>
    </div>
  );
}

export default App;
