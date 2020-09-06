// import changeName from './actions'
import { combineReducers } from 'redux'

const name = (state = "New Creature", action) => {
  return action.name
}

const size = (state = '', action) => {
  return action.size
}

const stats = combineReducers({
  name, size
})

export default stats