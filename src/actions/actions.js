export const setCurrentList = (packingList) => ({
  type: 'SET_CURRENT_LIST',
  packingList
  //TODO generateCurrentList (new name)
})

export const toggleIsChecked = (category, name, status) => ({
  type: 'TOGGLE_IS_CHECKED',
  payload: { category, name, isChecked: status }
})

export const deleteItem = (category, name) => ({
  type: 'DELETE_ITEM',
  payload: { category, name }
})

export const editItemQuantity = (category, name, quantity) => ({
  type: 'EDIT_ITEM_QUANTITY',
  payload: { category, name, quantity } 
})

//TODO add action to generate a user id