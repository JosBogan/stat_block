import React, { useState, useEffect } from 'react'

function Dropdown(props) {

  const [ open, setOpen ] = useState(false)
  // const [ selected, setSelected ] = useState({
  //   dataName: null,
  //   dataLabel: `Select ${props.label}:`,
  //   type: 'dropdown',
  //   input: props.dataLabel
  // })
  const [ selected, setSelected ] = useState({
    label: props.name,
    value: `Select ${props.label}`
  })

  useEffect(() => {
    document.addEventListener("click", closeAll);
  }, [])

  function closeAll(event) {
    if (event.target.className !== 'selected') {
      setOpen(false)
    }
  }

  function onOpen() {
    setOpen(!open)
  }

  function onSelect(event, option) {
    event.stopPropagation()
    const newSelected = {...selected, value: option}
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
        {selected.value}
      </div>
      <div 
        className={`select_options options_open_${open}`}
      >
        {/* {props.options.map(option => (
          <div
          className="select_option"
          onClick={(event) => onSelect(event, option)}
          data-name={option}
          >
            {option.dataLabel}
          </div>
        ))} */}
        {props.options.map(option => (
          <div
          className="select_option"
          onClick={(event) => onSelect(event, option)}
          data-name={option}
          >
            {option}
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Dropdown