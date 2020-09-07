import React, { useState, useEffect } from 'react';
import './App.css';

// components

import StatblockForm from './statblock_form/StatblockForm'
import Statblock from './statblock/Statblock'

// Redux


import store from './state/store'
import { Provider } from 'react-redux'

// const store = createStore(stats)

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
  }

  function acStats(input) {
    if (input.armourType === 'natural armour') return
    let ac = input.ac
    const mod = Math.floor(stats.dex/2 - 5)
    if (input.armourType) {
      switch (input.armourType.weight) {
        case 'light':
          ac += mod
          break
        case 'medium':
          if (mod >= 2) {
            ac += 2
          } else {
            ac += mod
          }
          break
        default:
      }
    }

    console.log(ac)

    if (input.ac !== stats.ac || input.acType !== stats.acType)  {
      setStats({...stats, ac: ac, acType: input.acType})
    }
  }

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
