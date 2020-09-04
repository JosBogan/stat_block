import React from 'react'

function SectionTabs(props) {
  return (
    <div className="statblock_section_selection">
    <button 
      className="statblock_form_tab"
      onClick={(event) => props.changeTabs(event, 'details')}
    >
      Details
    </button>
    <button 
      className="statblock_form_tab"
      onClick={(event) => props.changeTabs(event, 'stats')}
    >
      Stats
    </button>
    <button 
      className="statblock_form_tab"
      onClick={(event) => props.changeTabs(event, 'properties')}
    >
      Properties
    </button>
    <button 
      className="statblock_form_tab"
      onClick={(event) => props.changeTabs(event, 'actions')}
    >
      Actions
    </button>
  </div>
  )
}

export default SectionTabs