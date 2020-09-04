// Libraries
import React from 'react'

// Components
import SectionTabs from './SectionTabs'
import TextInput from './inputs/TextInput'


function StatblockForm(props) {
  return (
    <div className="statblock_form_container section">
      <SectionTabs />
      <form>
        <div className="Creature Details">
          <h3>Creature Details</h3>
            <TextInput 
            name="name" 
            label="Name" 
            onChange={props.onChange}
          />
          <div>
            <label>Size</label>
            <select 
              onChange={props.onChange}
              name="size"
            >
              <option>Tiny</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Huge</option>
              <option>Gargantuan</option>
            </select>
          </div>
          <div>
            <label>Type</label>
            <select onChange={props.onChange} name="type">
              <option>Tiny</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Huge</option>
              <option>Gargantuan</option>
            </select>
          </div>
          <TextInput 
            name="specifics" 
            label="Specifics" 
            onChange={props.onChange}
          />
          <TextInput 
            name="alignment" 
            label="Alignment" 
            onChange={props.onChange}
          />
          <TextInput 
            name="hitpoints" 
            label="Hit Points" 
            onChange={props.onChange}
          />
          <div>
            <label>Speed</label>
            <input type="number" className="input" onChange={props.onChange} name="groundspeed"></input>ft
          </div>
        </div>
      </form>
    </div>
  )
}

export default StatblockForm