import { packingList } from './packingList'
import * as actions from '../actions/actions'
import { mockState as categories } from '../sampleData'
import { waitFor } from '@testing-library/react'


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
      categories
    }
    const newAction = actions.setCurrentList(list)

    const state = packingList(initialState, newAction)
    expect(state).toEqual(list)
  })
})

describe('packing list updates', () => {
  let state;
  beforeEach(() => {
    const initialState = {}
    const newAction = actions.setCurrentList(categories)
    state = packingList(initialState, newAction)
  })

  it('should toggle checked on an item', () => {
    const status = true
    const category = 'Accessories'
    const name = 'Purses'

    const sampleCheckedCategory = [
      {name: 'Hats', quantity: 0, "item_id": 1, is_checked: false},
      {name: 'Belts', quantity: 0, "item_id": 2,is_checked: false},
      {name, quantity: 0, "item_id": 3, is_checked: true},
    ]
    
    const updatedCheckedState = {
      ...state.packingList,
      categories: {
        ...state.packingList.categories,
        [category]: sampleCheckedCategory
      }
    }

    expect(state).not.toEqual(updatedCheckedState)

    let toggleAction = actions.toggleIsChecked(category, name, status)
    let toggledState = packingList(state.packingList, toggleAction)
      
    expect(toggledState).toEqual(updatedCheckedState)

  })

  it('should update the quantity on an item', () => {
    const quantity = 1
    const category = 'Accessories'
    const name = 'Belts'

    const sampleQuantityCategory = [
      {name: 'Hats', quantity: 0, "item_id": 1, is_checked: false},
      {name: 'Purses', quantity: 0, "item_id": 3, is_checked: true},
      {name: 'Belts', quantity: 1, "item_id": 2, is_checked: false},
    ]

    const updatedQuantityState = {
      ...state.packingList,
      categories: {
        ...state.packingList.categories,
        [category]: sampleQuantityCategory
      }
    }

    expect(state).not.toEqual(updatedQuantityState)
    
    let quantityAction = actions.editItemQuantity(category, name, quantity)
    let quantityState = packingList(state.packingList, quantityAction)

    console.log('quantityState', quantityState.categories)
    console.log('update', updatedQuantityState.categories)

    expect(quantityState).toEqual(updatedQuantityState)
  })

  // it('should delete an item', () => {
  //   const category = 'Accessories'
  //   const name = 'Hats'

  //   const sampleDeleteCategory = [
  //     {name: 'Belts', quantity: 1, is_checked: false},
  //     {name: 'Purses', quantity: 0, is_checked: false},
  //   ]

  //   const updatedDeleteItemState = {
  //     ...state, 
  //     categories: {
  //       ...state.categories,
  //     [category]: sampleDeleteCategory
  //   }}

  //   expect(state).not.toEqual(updatedDeleteItemState)
    
  //   actions.editItemQuantity(category, name)

  //   expect(state).toEqual(updatedDeleteItemState)
  // })
})