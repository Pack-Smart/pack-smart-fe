export const currentList = (state = {}, action) => {
  switch(action.type) {
    case 'SAVE_CURRENT_LIST':
      return action
    default:
      return state
  }
}
