import React from 'react'

function NumberInput(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input 
        type="number" 
        max={`${props.max}`}
        min={0}
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  )
}

export default NumberInput