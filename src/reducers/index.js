import { combineReducers } from 'redux'
import { packingList } from './reducers'

const rootReducer = combineReducers({
  packingList
})

export default rootReducer

//TODO add new user reducer to combineReducers