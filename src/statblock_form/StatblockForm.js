import React from 'react'

function StatblockForm(props) {
  return (
    <div className="statblock_form_container section">
      <div className="statblock_section_selection">
        <div className="statblock_form_tab">
          Detals
        </div>
        <div className="statblock_form_tab">
          Stats
        </div>
        <div className="statblock_form_tab">
          Properties
        </div>
        <div className="statblock_form_tab">
          Actions
        </div>
      </div>
      <form>
        <div className="Creature Details">
          <h3>Creature Details</h3>
          <div>
            <label>Name</label>
            <input className="input"></input>
          </div>
          <div>
            <label>Size</label>
            <select>
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
            <select>
              <option>Tiny</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Huge</option>
              <option>Gargantuan</option>
            </select>
          </div>
          <div>
            <label>Specifics</label>
            <input className="input"></input>
          </div>
          <div>
            <label>Alignment</label>
            <input className="input"></input>
          </div>
          <div>
            <label>Hit Points</label>
            <input className="input"></input>
          </div>
          <div>
            <label>Speed</label>
            <input type="number" className="input"></input>ft
          </div>
        </div>
      </form>
    </div>
  )
}

export default StatblockForm