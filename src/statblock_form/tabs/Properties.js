import React from 'react'

// import TextInput from '../inputs/TextInput'
// import Dropdown from '../inputs/Dropdown'
import NumberInput from '../inputs/NumberInput'
import OptionSelect from '../inputs/OptionSelect'

function Properties(props) {

  const skills = [
    {label: 'strength'},
    {label: 'dexterity'},
    {label: 'constitution'},
    {label: 'intelligence'},
    {label: 'wisdom'},
    {label: 'charisma'}
  ]

  const damageRes = [

  ]

  return (
    <div className="Creature Details">
      <h3>Creature Properties</h3>
      <NumberInput 
        name="challange"
        label="Challange"
        onChange={props.onChange}
      />
      <OptionSelect 
        label="skills"
        options={skills}
        onChange={props.onChange}
      />
    </div>
  )
}

export default Properties