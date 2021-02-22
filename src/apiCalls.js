export const getPackingListData = (submissionData) => {
  return fetch('http://127.0.0.1:5000/api/v1/list/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': 'http://127.0.0.1:5000/',
    },
    mode: 'no-cors',
    body: JSON.stringify(submissionData)
  })
  .then((response) => {
    if (!response.ok) {
      throw Error('Username and/or password is incorrect. Please try again.')
    }
    return response.json()
  })
}
