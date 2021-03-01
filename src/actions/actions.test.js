import * as actions from './actions'
import { sampleCategories } from '../sampleData'

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

  it('should have a type of DELETE_ITEM', () => {
    const category = 'Accessories'
    const name = 'Necklace'

    const expectedAction = {
      type: 'DELETE_ITEM',
      payload: { category, name }
    }
    
    const result = actions.deleteItem(category, name)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of EDIT_ITEM_QUANTITY', () => {
    const category = 'Accessories'
    const name = 'Necklace'
    const quantity = '17'

    const expectedAction = {
      type: 'EDIT_ITEM_QUANTITY',
      payload: { category, name, quantity }
    }
    
    const result = actions.editItemQuantity(category, name, quantity)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of EDIT_TRIP_DETAILS', () => {
    const title = 'Commissary Ridge Yurt Trip'
    const destination = 'Idaho'
    const duration = '3'

    const expectedAction = {
      type:'EDIT_TRIP_DETAILS',
      payload: { title, destination, duration }
    }

    const result = actions.editTripDetails(title, destination, duration)

    expect(result).toEqual(expectedAction)
  })
})