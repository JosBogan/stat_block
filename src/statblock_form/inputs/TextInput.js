import React from 'react'

function TextInput(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input 
        className="input"
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  )
}

export default TextInput