import { createStore } from 'redux'
import stats from './reducers'

const store = createStore(stats)

// console.log(store.getState())

// const unsubscribe = store.subscribe(() => console.log(store.getState()))

export default store