import React from 'react'

function TextInput(props) {

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
        className="input"
        name={props.name}
        onChange={(event) => returnChange(event)}
        // onChange={props.onChange}
        value={props.value}
      />
    </div>
  )
}

export default TextInput