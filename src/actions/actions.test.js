import * as actions from './actions'
import { sampleCategories } from './sampleData'

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

  it('should have a type of SET_CURRENT_LIST', () => {
    const packingList = {
      userId: 1,
      tripDetails: {
        title: 'Cabo 2008 Betches',
        destination: 'Mexico',
        number_of_days: '2',
      },
      categories: { sampleCategories }
    }
    const expectedAction = {
      type: 'SET_CURRENT_LIST',
      payload: { packingList }
    }
    
    const result = actions.setCurrentList(packingList)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of TOGGLE_IS_CHECKED', () => {
    const category = 'Accessories'
    const name = 'Necklace'
    const status = true
    const expectedAction = {
      type: 'TOGGLE_IS_CHECKED',
      payload: { category, name, isChecked: status }
    }
    
    const result = actions.toggleIsChecked(category, name, status)

    expect(result).toEqual(expectedAction)
  })

})