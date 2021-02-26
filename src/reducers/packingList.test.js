import { packingList, itemToToggle } from './packingList'
import * as actions from '../actions/actions'
import { sampleCategories } from '../sampleData'


describe('packingList', () => {
  it('should return the initial state', () => {
    const expected = {}
    const result = packingList(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should store a packing list', () => {
    const initialState = {}
    const list = {
      tripDetails: {
        title: 'Cabo 2008 Betches',
        destination: 'Mexico',
        number_of_days: '2',
      },
      categories: { sampleCategories }
    }
    const newAction = actions.setCurrentList(list)
    const state = packingList(initialState, newAction)
    expect(state).toEqual(list)
  })
})

describe('packing list updates', () => {
  beforeEach(() => {
    const initialState = {}
    const list = {
      tripDetails: {
        title: 'Cabo 2008 Betches',
        destination: 'Mexico',
        number_of_days: '2',
      },
      categories: { sampleCategories }
    }
    const newAction = actions.setCurrentList(list)
    const state = packingList(initialState, newAction)
  })

  it('should toggle checked on an item', () => {
    const initialStatus = false
    const status = true
    const category = 'Accessories'
    const name = 'Scarf'
    const newAction = actions.toggleIsChecked(category, name, status)
    const checkedState = itemToToggle(initialStatus, status)
    expect(checkedState).toEqual(newAction)
  })
})