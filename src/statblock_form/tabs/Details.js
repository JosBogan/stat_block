import React from 'react'

import TextInput from '../inputs/TextInput'
import Dropdown from '../inputs/Dropdown'
import Ac from '../inputs/specific/Ac'

function Details(props) {

  const types = [
    {
      dataName: "humanoid",
      dataLabel: "Humaniod"
    },
    {
      dataName: "celestial",
      dataLabel: "Celestial"
    },
    {
      dataName: "fiend",
      dataLabel: "Fiend"
    }

  ]

  const sizes = [
    {
      dataName: "tiny",
      dataLabel: "Tiny"
    },
    {
      dataName: "small",
      dataLabel: "Small"
    },
    {
      dataName: "medium",
      dataLabel: "Medium"
    },
    {
      dataName: "large",
      dataLabel: "Large"
    },
    {
      dataName: "huge",
      dataLabel: "Huge"
    },
    {
      dataName: "gargantuan",
      dataLabel: "Gargantuan"
    }
  ]

  return (
    <div className="Creature Details">
    <h3>Creature Details</h3>
    <TextInput 
      name="name" 
      label="Name" 
      onChange={props.onChange}
      value={props.stats.name}
    />
    <Dropdown 
      label="Size"
      dataLabel="size"
      onChange={props.onChange}
      options={sizes}
      value={props.stats.size}
    />
    <Dropdown 
      label="Type"
      dataLabel="type"
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
      value={[props.stats.acType, props.stats.ac]}
    />
    <TextInput 
      name="hitpoints" 
      label="Hit Points" 
      onChange={props.onChange}
      value={props.stats.hitpoints}
    />
    <div>
      <label>Speed</label>
      <input type="number" className="input" onChange={props.onChange} name="groundspeed"></input>ft
    </div>
  </div>
  )
}

export default Details