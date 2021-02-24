export const getPackingListData = (submissionData) => {
  return fetch("http://127.0.0.1:5000/api/v1/list/new", {
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
  return fetch("", {
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



