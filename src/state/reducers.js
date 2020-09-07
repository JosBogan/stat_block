// import changeName from './actions'
import { combineReducers } from 'redux'

const name = (state = "New Creature", action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state
  }
}

const hitpoints = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_HITPOINTS':
      return action.hitpoints
    default:
      return state
  }
}

const size = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SIZE':
      return action.size
    default:
      return state
  }
}

const creatureType = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_CREATURE_TYPE':
      return action.creatureType
    default:
      return state
  }
}

const ac = (state = 0, action) => {
  switch (action.ac) {
    case 'CHANGE_AC':
      return action.ac
    default:
      return state
  }
}

const stats = combineReducers({
  name, hitpoints, size, creatureType, ac
})

export default stats