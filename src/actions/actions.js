export const saveCurrentList = (packingList) => ({
  type: 'SAVE_CURRENT_LIST',
  packingList
})

export const toggleIsChecked = (category, name, status) => ({
  type: 'TOGGLE_IS_CHECKED',
  payload: { category, name, isChecked: status }
})