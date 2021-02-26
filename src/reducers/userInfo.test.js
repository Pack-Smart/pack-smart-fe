import '@testing-library/jest-dom'
import * as actions from '../actions/actions'
import { userInfoReducer } from './userInfo'

describe('userInfoReducer', () => {
  it('should return the initial state', () => {
    const expected = {}

    const result = userInfoReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with a user', () => {
    const initialState = {}
    const user = { userId: 1 }
    const newAction = actions.setUser(user)
    const state = userInfoReducer(initialState, newAction)
    expect(state).toEqual({userId: 1})
  })
})