import * as actions from './actions';

describe('actions', () => {

  it('should have a type of SET_USER', () => {
    const userInfo = {
      userId: 1
    }
    const expectedAction = {
      type: 'SET_USER',
      payload: { userInfo }
    }
    
    const result = actions.setUser(userInfo)

    expect(result).toEqual(expectedAction)
  })

})