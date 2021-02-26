import * as actions from '../actions/actions'
import { userInfo } from './userInfo'

describe('userInfo', () => {
  it('should return the initial state', () => {
    const expected = {}
    const result = userInfo(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return state with a user', () => {
    const initialState = {}
    const user = { userId: 1 }
    const newAction = actions.setUser(user)
    const state = userInfo(initialState, newAction)
    expect(state).toEqual({userId: 1})
  })
})