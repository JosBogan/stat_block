function changeName(name) {
  return {
    type: 'CHANGE_NAME',
    name: name
  }
}

function changeSize(size) {
  return {
    type: 'CHANGE_SIZE',
    size: size
  }
}

function changeType(creatureType) {
  return {
    type: 'CHANGE_CREATURE_TYPE',
    creatureType: creatureType
  }
}

function changeHitpoints(hitpoints) {
  return {
    type: 'CHANGE_HITPOINTS',
    hitpoints: hitpoints
  }
}

function changeAc(ac) {
  return {
    type: 'CHANGE_AC',
    ac: ac
  }
}


export default {changeName, changeSize, changeType, changeHitpoints, changeAc}