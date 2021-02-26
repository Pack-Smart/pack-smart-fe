import { packingList } from './packingList'
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