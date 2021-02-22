export const packingList = (state = {}, action) => {
  switch(action.type) {
    case 'SAVE_CURRENT_LIST':
      return action.packingList
    default:
      return state
  }
}
