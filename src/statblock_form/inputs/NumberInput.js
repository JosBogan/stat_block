import React from 'react'

function NumberInput(props) {

  function returnChange(event) {
    const returnObj = {
      label: event.target.name,
      value: event.target.value,
    }
    props.onChange(returnObj)
  }

  return (
    <div>
      <label>{props.label}</label>
      <input 
        type="number" 
        max={`${props.max}`}
        min={0}
        name={props.name}
        onChange={(event) => returnChange(event)}
        value={props.value}
      />
    </div>
  )
}

export default NumberInput