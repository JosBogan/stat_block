import React, { useState } from 'react'

function Ac(props) {

  // const [ac, setAc] = useState(0)
  const [acType, setAcType] = useState()
  const [armourType, setArmourType] = useState({ type: '', ac: 0, weight: '' })
  const [shield, setShield] = useState(false)

  function changeAcType(event) {
    event.preventDefault()
    const armourType = event.target.getAttribute('data-id')
    setAcType(armourType)
    props.changeAcType(armourType)
  }

  function selectArmourType(event, armour) {
    if (armour.type === 'Shield') {
      setShield(!shield)
    } else {
      setArmourType(armour)
    }
  }

  // function onChange(event) {
  //   setAc(event.target.value)
  //   props.onChange()
  // }

  const wornArmourTypes = [
    { type: 'Padded', ac: 11, weight: 'light' },
    { type: 'Leather', ac: 11, weight: 'light' },
    { type: 'Studded Leather', ac: 12, weight: 'light' },
    { type: 'Hide', ac: 12, weight: 'medium' },
    { type: 'Chain Shirt', ac: 13, weight: 'medium' },
    { type: 'Scale Mail', ac: 14, weight: 'medium' },
    { type: 'Breastplate', ac: 14, weight: 'medium' },
    { type: 'Hale Plate', ac: 15, weight: 'medium' },
    { type: 'Ring Mail', ac: 14, weight: 'heavy' },
    { type: 'Chain Mail', ac: 16, weight: 'heavy' },
    { type: 'Splint', ac: 17, weight: 'heavy' },
    { type: 'Plate', ac: 18, weight: 'heavy' },
    { type: 'Shield', ac: 2, weight: 'other' },
  ]

  return (
    <div>
      <label>{props.label}</label>
      <div>
        <button 
          className="ac_type_button" 
          data-id="natural armour"
          onClick={changeAcType}
        >Natural Armour</button>
        <button 
          className="ac_type_button" 
          data-id="worn armour"
          onClick={changeAcType}
        >Worn Armour</button>
        <button 
          className="ac_type_button" 
          data-id="other"
          onClick={changeAcType}
        >Other</button>
        <div>
          {(acType === 'natural armour' || acType === 'other') && 
            <input 
              type="number"
              name="ac"
              onChange={(event) => props.changeAc(event)}
              value={props.value[1]}
            />
          }
          {acType === 'other' && <input />}
          {acType === 'worn armour' && 
          <div className="armour_options">
            {wornArmourTypes.map(armour => (
              <div 
                className={`armour_type ${armourType.type && (armour.type === armourType.type) ? 'armour_type_selected': ''} ${shield && armour.type === 'Shield' ? 'armour_type_selected' : ''}`}
                onClick={(event) => selectArmourType(event, armour)}>
                {armour.type} - {armour.weight === 'other' && '+'}{armour.ac} 
                {(armour.weight === 'light' || armour.weight === 'medium') && ' + Dex Modifier'} 
                {armour.weight === 'medium' && ' (Max 2)'}
              </div>
            ))}
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Ac