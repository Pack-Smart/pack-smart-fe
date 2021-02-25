import { combineReducers } from 'redux'
import { packingList } from './packingList'
import { userInfo } from './userInfo'

const rootReducer = combineReducers({
  userInfo,
  packingList
})

export default rootReducer
