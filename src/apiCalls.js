const endpoint = 'https://pack-smart-be.herokuapp.com'

export const getPackingListData = (submissionData) => {
  return fetch(`${endpoint}/api/v1/list/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(submissionData)
  })
  .then((response) => response.json())
}

export const saveNewPackingList = (packingListData) => {
  return fetch(`${endpoint}/api/v1/packing_lists/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(packingListData)
  })
  .then((response) => response.json())
}

export const getAllPackingLists = () => {
  return fetch(`${endpoint}/api/v1/users/1/packing_lists`)
    .then((response) => response.json())
}

export const getSinglePackingList = (listId) => {
  return fetch(`${endpoint}/api/v1/packing_lists/${listId}`)
    .then((response) => response.json())
}

export const deletePackingList = (listId) => {
  return fetch(`${endpoint}/api/v1/packing_lists/${listId}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
}
