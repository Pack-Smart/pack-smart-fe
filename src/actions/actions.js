export const saveCurrentList = (packingList) => {
  return {
    type: 'SAVE_CURRENT_LIST',
    packingList
  }
}