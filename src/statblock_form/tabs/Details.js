import React, { useEffect } from 'react'

import TextInput from '../inputs/TextInput'
import Dropdown from '../inputs/Dropdown'
import Ac from '../inputs/specific/Ac'

import { connect } from 'react-redux'

function Details(props) {

  // function onChangeTest(eventObj) {
  //   switch (eventObj.label) {
  //     case 'name':
  //       store.dispatch(actions.changeName(eventObj.value))
  //       break
  //     case 'hitpoints':
  //       store.dispatch(actions.changeHitpoints(eventObj.value))
  //       break
  //     case 'size':
  //       store.dispatch(actions.changeSize(eventObj.value))
  //       break
  //     case 'type':
  //       store.dispatch(actions.changeType(eventObj.value))
  //       break
  //     default:
  //       return
  //   }
  //   console.log(store.getState())
  // }

  const types = [ "Humaniod", "Celestial", "Fiend" ]

  const sizes = ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"]

  return (
    <div className="Creature Details">
    <h3>Creature Details</h3>
    <TextInput 
      name="name" 
      label="Name" 
      onChange={props.onChange}
      // onChange={onChangeTest}
      value={props.stats.name}
    />
    <Dropdown 
      name="size"
      label="Size"
      onChange={props.onChange}
      // onChange={onChangeTest}
      options={sizes}
      value={props.stats.size}
    />
    <Dropdown 
      name="type"
      label="Type"
      // onChange={onChangeTest}
      onChange={props.onChange}
      options={types}
      value={props.stats.type}
    />
    <TextInput 
      name="specifics" 
      label="Specifics" 
      onChange={props.onChange}
      value={props.stats.specifics}
    />
    <TextInput 
      name="alignment" 
      label="Alignment" 
      onChange={props.onChange}
      value={props.stats.alignment}
    />
    <Ac 
      label="Armour Class"
      acStats={props.acStats}
      dex={props.stats.dex}
      setAcCalcs={props.setAcCalcs}
      value={[props.stats.acType, props.stats.ac]}
    />
    <TextInput 
      name="hitpoints" 
      label="Hit Points" 
      onChange={props.onChange}
      // onChange={onChangeTest}
      value={props.stats.hitpoints}
    />
    <div>
      <label>Speed</label>
      <input type="number" className="input" onChange={props.onChange} name="groundspeed"></input>ft
    </div>
  </div>
  )
}

export default connect()(Details)