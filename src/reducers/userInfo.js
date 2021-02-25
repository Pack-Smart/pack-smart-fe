export const userInfo = (state = {}, action) => {
  switch(action.type) {
    case 'SET_USER':
      return (action.payload.userInfo)
    default: 
      return (state)
  }
}