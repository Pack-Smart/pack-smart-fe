import { userInfo } from './userInfo';

describe('userInfoReducer', () => {
  it('should return the initial state', () => {
    const expected = {}

    const result = userInfo(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with a user', () => {

  })
})