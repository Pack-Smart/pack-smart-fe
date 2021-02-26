import { userInfo } from './userInfo'
import '@testing-library/jest-dom'

describe('userInfoReducer', () => {
  it('should return the initial state', () => {
    const expected = {}

    const result = userInfo(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with a user', () => {
    // const dispatch = jest.fn()
    // const action = {
    //   type: 'SET_USER',
    //   payload: { userId: 1 }
    // }
    // const expected = {userId: 1 }

    // const result = userInfo(action)
    // console.log(result)

    // expect(result).toEqual(expected)
  })
})