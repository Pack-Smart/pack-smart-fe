export const saveCurrentList = (packingList) => ({
  type: 'SAVE_CURRENT_LIST',
  packingList
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