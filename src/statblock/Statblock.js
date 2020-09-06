import React from 'react'

function Statblock(props) {

  function modCalc(score) {
    const modifier = Math.floor(score/2 - 5)
    return modifier >= 0 ?  `+${modifier}`: modifier
  }

  function hitpointCalc(hitpoints) {
    if (!hitpoints.includes('d')) return hitpoints
    const hitpointParts = hitpoints.split(/[d+]/)
    let hitpointAverage = Math.floor((parseInt(hitpointParts[0]) * parseInt(hitpointParts[1]) / 2 ) + (parseInt(hitpointParts[0]) / 2))
    if (hitpointParts.length > 2) hitpointAverage = hitpointAverage + parseInt(hitpointParts[2])
    return `${hitpointAverage} (${hitpoints})`
  }

  return (
    <div className="statblock_container section">
      <div className="statblock">
        <div>
          <h3 className="creature_name">
            {props.stats.name}
          </h3>
          <div className="creature_traits">
            <i>{props.stats.size} {props.stats.type} {props.stats.specifics}</i>
          </div>
        </div>
        <div className="section_rule"></div>
        <div>
          <div>
            <strong>Armour Class</strong> {props.stats.ac} ({props.stats.acType})
          </div>
          <div>
            <strong>Hit Points</strong> {hitpointCalc(props.stats.hitpoints)}
          </div>
          <div>
            <strong>Speed</strong> {props.stats.groundspeed} ft
          </div>
        </div>
        <div className="section_rule"></div>
        <div className="stats_ability_scores">
          <div className="ability_score_container">
            <div><strong>STR</strong></div>
            <div>{props.stats.str} ({modCalc(props.stats.str)})</div>
          </div>
          <div className="ability_score_container">
            <div><strong>DEX</strong></div>
            <div>{props.stats.dex} ({modCalc(props.stats.dex)})</div>
          </div>
          <div className="ability_score_container">
            <div><strong>CON</strong></div>
            <div>{props.stats.con} ({modCalc(props.stats.con)})</div>
          </div>
          <div className="ability_score_container">
            <div><strong>INT</strong></div>
            <div>{props.stats.int} ({modCalc(props.stats.int)})</div>
          </div>
          <div className="ability_score_container">
            <div><strong>WIS</strong></div>
            <div>{props.stats.wis} ({modCalc(props.stats.wis)})</div>
          </div>
          <div className="ability_score_container">
            <div><strong>CHA</strong></div>
            <div>{props.stats.cha} ({modCalc(props.stats.cha)})</div>
          </div>
        </div>
        <div className="section_rule"></div>
        <div>
          <div>
            <strong>Saving Throws</strong> 
              <div className="horizontal_property_list">
                {props.stats.savingThrows.map(item => <div>{item.label}</div>)}
              </div>
          </div>
          <div>
            <strong>Skills</strong> 
              <div className="horizontal_property_list">
                {props.stats.skills.map(item => <div>{item.label}</div>)}
              </div>
          </div>
          <div>
            <strong>Challenge</strong> {props.stats.challange}
          </div>
        </div>
        <div className="section_rule"></div>
      </div>
    </div>
  )
}

export default Statblock