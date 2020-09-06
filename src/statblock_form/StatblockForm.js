// Libraries
import React, { useState } from 'react'

// Components
import SectionTabs from './SectionTabs'
// import TextInput from './inputs/TextInput'
// import Dropdown from './inputs/Dropdown'

import Details from './tabs/Details'
import Properties from './tabs/Properties'
import Stats from './tabs/Stats'
import Actions from './tabs/Actions'


function StatblockForm(props) {

  const [ currentPanel, setCurrentPanel ] = useState('details')

  function renderSwitch() {
    switch (currentPanel) {
      case 'details':
        return <Details onChange={props.onChange} stats={props.stats} changeAc={props.changeAc} changeAcType={props.changeAcType}/>
      case 'properties':
        return <Properties onChange={props.onChange} stats={props.stats}/>
      case 'stats':
        return <Stats onChange={props.onChange} stats={props.stats}/>
      case 'actions':
        return <Actions onChange={props.onChange} stats={props.stats}/>
      default:
        return <Details onChange={props.onChange} stats={props.stats}/>
    }
  }

  function changeTabs(event, panel) {
    console.log(panel)
    setCurrentPanel(panel)
  }

  return (
    <div className="statblock_form_container section">
      <SectionTabs changeTabs={changeTabs}/>
      <form className="statblock_form">
        {renderSwitch()}
        {/* <Details 
          onChange={props.onChange}
        /> */}
      </form>
    </div>
  )
}

export default StatblockForm