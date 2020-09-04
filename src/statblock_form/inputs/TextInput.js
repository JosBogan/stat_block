import React from 'react'

function TextInput(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input 
        className="input"
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  )
}

export default TextInput