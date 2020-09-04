import React, { useState } from 'react'

function Dropdown(props) {

  const [ open, setOpen ] = useState(false)
  const [ selected, setSelected ] = useState({
    dataName: null,
    dataLabel: `Select ${props.label}:`,
    type: 'dropdown',
    input: props.dataLabel
  })

  function onOpen() {
    console.log('here')
    setOpen(!open)
  }

  function onSelect(event, option) {
    event.stopPropagation()
    const newSelected = {...selected, ...option}
    setSelected(newSelected)
    setOpen(false)
    props.onChange(newSelected)
  }
  return (
    <div>
      <div className="custom_select">
      <div 
        className="selected"
        onClick={onOpen}
      >
        {selected.dataLabel}
      </div>
      <div 
        className={`select_options options_open_${open}`}
      >
        {props.options.map(option => (
          <div
          className="select_option"
          onClick={(event) => onSelect(event, option)}
          data-name={option}
          >
            {option.dataLabel}
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Dropdown