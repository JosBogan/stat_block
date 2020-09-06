import React, { useState, useEffect } from 'react'

function OptionSelect(props) {

  const [ properties, setProperties ] = useState([])
  const [ open, setOpen ] = useState(false)

  // useEffect(() => {
  //   document.addEventListener("click", closeAll);
  // }, [])

  // function closeAll(event) {
  //   // if (event.target.)
  //   console.log(event.target)
  //   setOpen(false)
  // }

  function onClick(event, option) {
    const newProperties = [...properties, option]
    setProperties(newProperties)
    const inputObj = {type: 'optionSelect', input: props.label, value: newProperties}
    props.onChange(inputObj)
    console.log('placeholder')
    openDropdown()
  }

  function openDropdown() {
    setOpen(!open)
  }

  return (
    <div>
      {console.log(properties)}
      <label>{props.label}</label>
      {properties.map((property) => (
        <div>{property.label}</div>
      ))}
      {properties.length < props.options.length &&
      <div className="new_option_select"
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