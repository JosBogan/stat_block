import { createStore } from 'redux'
import rootReducer from './reducers'

const initialState = {

}

const store = createStore(rootReducer, initialState)

// console.log(store.getState())

// store.subscribe(() => console.log(store.getState()))

export default store