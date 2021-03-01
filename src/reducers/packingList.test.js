import { packingList } from './packingList'
import * as actions from '../actions/actions'
import { mockState } from '../sampleData'

describe('packingList', () => {
  let initialState
  let list

  beforeEach(() => {
    initialState = {}
    list = mockState.packingList
  })

  it('should return the initial state', () => {
    const result = packingList(undefined, {})
    expect(result).toEqual(initialState)
  })

  it('should store a packing list', () => {
    const newAction = actions.setCurrentList(list)
    const state = packingList(initialState, newAction)
    expect(state).toEqual(list)
  })

  it('should update the trip details of the packing list', () => {
    const initialAction = actions.setCurrentList(list)
    const state = packingList(initialState, initialAction)
    
    const title = "Commissary Ridge Yurt Trip"
    const destination = "Idaho"
    const duration = '3'

    const newAction = actions.editTripDetails(title, destination, duration)
    const newList = {
      ...list,
      tripDetails: {
        title: "Commissary Ridge Yurt Trip",
        destination: "Idaho",
        duration: '3',
        listId: '1'
      }
    }

    const newState = packingList(state, newAction)
    
    expect(newState).toEqual(newList)
  })
})

// describe('packing list updates', () => {
//   let state;
//   beforeEach(() => {
//     const initialState = {}
//     const newAction = actions.setCurrentList(categories)
//     state = packingList(initialState, newAction)
//   })

//   it('should toggle checked on an item', () => {
//     const status = true
//     const category = 'Accessories'
//     const name = 'Purses'

//     const sampleCheckedCategory = [
//       {name: 'Hats', quantity: 0, "item_id": 1, is_checked: false},
//       {name: 'Belts', quantity: 0, "item_id": 2,is_checked: false},
//       {name, quantity: 0, "item_id": 3, is_checked: true},
//     ]
    
//     const updatedCheckedState = {
//       ...state.packingList,
//       categories: {
//         ...state.packingList.categories,
//         [category]: sampleCheckedCategory
//       }
//     }

//     expect(state).not.toEqual(updatedCheckedState)

//     let toggleAction = actions.toggleIsChecked(category, name, status)
//     let toggledState = packingList(state.packingList, toggleAction)
      
//     expect(toggledState).toEqual(updatedCheckedState)

//   })

//   it('should update the quantity on an item', () => {
//     const quantity = 1
//     const category = 'Accessories'
//     const name = 'Belts'

//     const sampleQuantityCategory = [
//       {name: 'Hats', quantity: 0, "item_id": 1, is_checked: false},
//       {name: 'Purses', quantity: 0, "item_id": 3, is_checked: true},
//       {name: 'Belts', quantity: 1, "item_id": 2, is_checked: false},
//     ]

//     const updatedQuantityState = {
//       ...state.packingList,
//       categories: {
//         ...state.packingList.categories,
//         [category]: sampleQuantityCategory
//       }
//     }

//     expect(state).not.toEqual(updatedQuantityState)
    
//     let quantityAction = actions.editItemQuantity(category, name, quantity)
//     let quantityState = packingList(state.packingList, quantityAction)

//     expect(quantityState).toEqual(updatedQuantityState)
//   })

//   it('should delete an item', () => {
//     const category = 'Accessories'
//     const name = 'Hats'

//     const sampleDeleteCategory = [
//       {name: 'Belts', quantity: 1, "item_id": 2, is_checked: false},
//       {name: 'Purses', quantity: 0, "item_id": 3, is_checked: true},
//     ]

//     const updatedDeleteItemState = {
//       ...state.packingList,
//       categories: {
//         ...state.packingList.categories,
//         [category]: sampleDeleteCategory
//       }
//     }

//     expect(state).not.toEqual(updatedDeleteItemState)
    
//     let deleteAction = actions.deleteItem(category, name)
//     let deleteState = packingList(state.packingList, deleteAction)

//     expect(deleteState).toEqual(updatedDeleteItemState)
//   })
// })