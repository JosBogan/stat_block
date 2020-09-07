import React, { useState, useEffect } from 'react'

function Ac(props) {

  const { acStats } = props
  // console.log(acStats)
  const [armourDetails, setArmourDetails] = useState({
    ac: 10,
    acType: 'no armour',
    armourType: {},
    shield: false
  })

  function setDetails(event, armour) {
    event.preventDefault()
    const newDetails = {
      ...armourDetails,
      armourType: {...armourDetails.armourType}
    }
    if (event.target.name === 'ac') {
      newDetails.ac = event.target.value
    } else if (event.target.name === 'acType') {
      newDetails.acType = event.target.getAttribute('data-id')
    } else if (event.target.getAttribute('data-name') === 'armourType') {
      newDetails.armourType = armour
    } else if (event.target.getAttribute('data-name') === 'shield') {
      newDetails.shield = !newDetails.shield
  }
    setArmourDetails(newDetails)
  }

  useEffect(() => {
    acStats(armourDetails)
  }, [acStats, armourDetails])


  
  // useEffect(() => {
  //   if (!armourType) return
  //   let ac = armourType.ac
  //   if (shield) ac += 2
  //   setAc(ac)
  // }, [armourType, shield])

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
      {console.log(armourDetails)}
      <label>{props.label}</label>
      <div>
      <button 
          name="acType"
          className="ac_type_button" 
          data-id="no armour"
          onClick={setDetails}
        >No Armour</button>
        <button 
          name="acType"
          className="ac_type_button" 
          data-id="natural armour"
          onClick={setDetails}
        >Natural Armour</button>
        <button 
          name="acType"
          className="ac_type_button" 
          data-id="worn armour"
          onClick={setDetails}
        >Worn Armour</button>
        <button 
          name="acType"
          className="ac_type_button" 
          data-id="other"
          onClick={setDetails}
        >Other</button>
        <div>
          {(armourDetails.acType === 'natural armour' || armourDetails.acType === 'other') && 
            <input 
              type="number"
              name="ac"
              onChange={setDetails}
              // value={props.value[1]}
            />
          }
          {armourDetails.acType === 'other' && <input />}
          {armourDetails.acType === 'worn armour' && 
          <div className="armour_options">
            {wornArmourTypes.map(armour => (
              <div 
                className={`armour_type ${armourDetails.armourType && (armour.type === armourDetails.armourType.type) ? 'armour_type_selected': ''} ${armourDetails.shield && armour.type === 'Shield' ? 'armour_type_selected' : ''}`}
                data-name={armour.type === 'Shield' ? 'shield' :'armourType'}
                onClick={(event) => setDetails(event, armour)}
                >
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