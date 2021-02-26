import { combineReducers } from 'redux'
import { packingList } from './packingList'
import { userInfoReducer } from './userInfo'

const rootReducer = combineReducers({
  userInfoReducer,
  packingList
})

export default rootReducer