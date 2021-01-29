import { combineReducers } from 'redux'
import port from './port'
import graph from './graph'
export default combineReducers({
    port,
    graph
})