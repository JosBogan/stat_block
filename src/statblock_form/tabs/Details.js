import React from 'react'

import TextInput from '../inputs/TextInput'
import Dropdown from '../inputs/Dropdown'

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
    />
    <Dropdown 
      label="Size"
      dataLabel="size"
      onChange={props.onChange}
      options={sizes}
    />
    <Dropdown 
      label="Type"
      dataLabel="type"
      onChange={props.onChange}
      options={types}
    />

    <TextInput 
      name="specifics" 
      label="Specifics" 
      onChange={props.onChange}
    />
    <TextInput 
      name="alignment" 
      label="Alignment" 
      onChange={props.onChange}
    />
    <TextInput 
      name="hitpoints" 
      label="Hit Points" 
      onChange={props.onChange}
    />
    <div>
      <label>Speed</label>
      <input type="number" className="input" onChange={props.onChange} name="groundspeed"></input>ft
    </div>
  </div>
  )
}

export default Details