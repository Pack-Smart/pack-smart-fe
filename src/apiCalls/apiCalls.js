const endpoint = 'https://pack-smart-be.herokuapp.com'

export const getPackingListData = (submissionData) => {
  return fetch(`${endpoint}/api/v1/list/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(submissionData)
  })
  .then((response) => {
    return response.json()
  })
}

export const saveNewPackingList = (packingListData) => {
  return fetch(`${endpoint}/api/v1/packing_lists/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(packingListData)
  })
  .then((response) => {
    return response.json()
  })
}

export const getAllPackingLists = () => {
  return fetch(`${endpoint}/api/v1/users/1/packing_lists`)
    .then((response) => {
      return response.json()
    })
}

// export const getSinglePackingList = (packingListId, userId) => {
//   return fetch(`${endpoint}/api/v1/users/${userId}/${packingListId}`)
//     .then((response) => {
//       return response.json()
//     })
// }

