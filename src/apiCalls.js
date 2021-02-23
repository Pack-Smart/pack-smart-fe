export const getPackingListData = (submissionData) => {
  return fetch("http://127.0.0.1:5000/api/v1/list/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(submissionData)
  })
  .then((response) => {
    if (!response.ok) {
      throw Error("Sorry, there was an error fetching your packing list. Please try again.")
    }
    return response.json()
  })
}

