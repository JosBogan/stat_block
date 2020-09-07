import { createStore } from 'redux'
import stats from './reducers'
import name from './reducers'

const store = createStore(stats)

// console.log(store.getState())

store.subscribe(() => console.log(store.getState()))

export default store