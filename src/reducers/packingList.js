export const packingList = (state = {}, action) => {
  switch(action.type) {
    case 'SET_CURRENT_LIST':
      return (action.payload.packingList)
    case 'TOGGLE_IS_CHECKED':
      const itemToToggle = state.categories[action.payload.category].find(item => {
        return item.name === action.payload.name
      })
      itemToToggle.is_checked = !itemToToggle.is_checked

      const filteredItems = state.categories[action.payload.category].filter(item => {
        return item.name !== action.payload.name
      })
      const updatedState = {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.category]: [...filteredItems, itemToToggle]
        }
      }
      return (updatedState)  
    case 'DELETE_ITEM':
      const remainingItems = state.categories[action.payload.category].filter(item => {
        return item.name !== action.payload.name
      })
      const updatedItems = {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.category]: [...remainingItems]
        }
      }
      return (updatedItems) 
    case 'EDIT_ITEM_QUANTITY':
      const itemToUpdate = state.categories[action.payload.category].find(item => {
        return item.name === action.payload.name
      })
      itemToUpdate.quantity = action.payload.quantity

      const filteredAllItems = state.categories[action.payload.category].filter(item => {
        return item.name !== action.payload.name
      })
      const updatedNewState = {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.category]: [...filteredAllItems, itemToUpdate]
        }
      }
      return (updatedNewState)   
    case 'EDIT_TRIP_DETAILS':
      const updatedTripDetails = {
        ...state,
        tripDetails: {
          listId: state.packingList.tripDetails.listId,
          ...action.payload
        }
      }
      return updatedTripDetails
      
    default:
      return (state)
  }
}
