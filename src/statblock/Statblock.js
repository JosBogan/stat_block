import React from 'react'

function Statblock(props) {
  return (
    <div className="statblock_container section">
      <div className="statblock">
        <div>
          <h3 className="creature_name">
            {props.stats.name}
          </h3>
          <div>
            {props.stats.size} {props.stats.type}
          </div>
        </div>
        <div>
          <div>
            <strong>Armour Class</strong> {props.stats.ac}
          </div>
          <div>
            <strong>Hit Points</strong> {props.stats.hitpoints}
          </div>
          <div>
            <strong>Speed</strong> {props.stats.groundspeed}ft
          </div>
        </div>
        <div className="stats_ability_scores">
          <div className="ability_score_container">
            <div>STR</div>
            <div>{props.stats.str}</div>
          </div>
          <div className="ability_score_container">
            <div>DEX</div>
            <div>{props.stats.dex}</div>
          </div>
          <div className="ability_score_container">
            <div>CON</div>
            <div>{props.stats.con}</div>
          </div>
          <div className="ability_score_container">
            <div>INT</div>
            <div>{props.stats.int}</div>
          </div>
          <div className="ability_score_container">
            <div>WIS</div>
            <div>{props.stats.wis}</div>
          </div>
          <div className="ability_score_container">
            <div>CHA</div>
            <div>{props.stats.cha}</div>
          </div>
        </div>
        <div>
          <div>
            <strong>Skills</strong> {props.stats.skills.map(item => <div>{item.label}</div>)}
          </div>
          <div>
            <strong>Challenge</strong> {props.stats.challange}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statblock