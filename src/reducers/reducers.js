export const packingList = (state = {}, action) => {
  switch(action.type) {
    case 'SAVE_CURRENT_LIST':
      return action.packingList
    case 'TOGGLE_IS_CHECKED':
      debugger
        const itemToToggle = state.categories[action.payload.category].find(item => {
        return item.name === action.payload.name
      })

      itemToToggle.is_checked = !itemToToggle.is_checked

      const filteredItems = state.categories[action.payload.category].filter(item => {
        return item.name !== action.payload.name
      })
      return ({
        ...state,
        categories: {
          [action.category]: [...filteredItems, itemToToggle]
        }
      })  
    default:
      return state
  }
}
