import React, { useState } from 'react'

function OptionSelect(props) {

  const [ properties, setProperties ] = useState([])
  const [ open, setOpen ] = useState(false)

  function onClick(event, option) {
    const property = [...properties, option]
    setProperties(property)
    // props.onChange()
    console.log('placeholder')
    openDropdown()
  }

  function openDropdown() {
    setOpen(!open)
  }

  return (
    <div>
      <label>{props.label}</label>
      {properties.map((property) => (
        <div>{property.label}</div>
      ))}
      {properties.length < props.options.length &&
      <div
        onClick={openDropdown}
      >+</div>}
      <div 
        className={`select_options options_open_${open}`}
      >
        {props.options.filter(item => !properties.includes(item)).map((option) => (
          <div
            onClick={(event) => onClick(event, option)}
          >{option.label}</div>
        ))}
      </div>
    </div>
  )
}

export default OptionSelect