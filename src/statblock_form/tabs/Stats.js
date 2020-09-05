import React from 'react'

import NumberInput from '../inputs/NumberInput'

function Stats(props) {

  return (
    <div className="Creature Details">
      <h3>Creature Stats</h3>
      <NumberInput 
        name="str"
        label="Strength"
        onChange={props.onChange}
        value={props.stats.str}
        max={30}/>
      <NumberInput 
        name="dex"
        label="Dexterity"
        onChange={props.onChange}
        value={props.stats.dex}
        max={30}/>
      <NumberInput 
        name="con"
        label="Constitution"
        onChange={props.onChange}
        value={props.stats.con}
        max={30}/>
      <NumberInput 
        name="int"
        label="Intelligence"
        onChange={props.onChange}
        value={props.stats.int}
        max={30}/>
      <NumberInput 
        name="wis"
        label="Wisdom"
        onChange={props.onChange}
        value={props.stats.wis}
        max={30}/>
      <NumberInput 
        name="cha"
        label="Charisma"
        onChange={props.onChange}
        value={props.stats.cha}
        max={30}/>
    </div>
  )
}

export default Stats