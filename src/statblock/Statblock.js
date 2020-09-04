import React from 'react'

function Statblock(props) {
  return (
    <div className="statblock_container section">
      <div className="statblock">
        {props.stats.name}
      </div>
    </div>
  )
}

export default Statblock