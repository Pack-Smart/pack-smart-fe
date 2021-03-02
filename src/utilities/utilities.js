export const compilePackingList = (packingListData, userID) => {
  const items = Object.values(packingListData.categories).flat()

  const cleanedItems = items.map(item => {
    return {
      item_id: item.item_id, 
      quantity: item.quantity, 
      is_checked: item.is_checked}
  })

  return ({
    data: {
      userID,
      tripDetails: packingListData.tripDetails,
      items: cleanedItems
    }
  })
}

export const compileSubmissionData = (quizData) => {
  console.log('quizData', quizData)
  const modifyWeatherData = quizData.weather.map(weather => {
    return `%${weather}%`
  })
  
  const modifyChildData = quizData.categories.filter((cat) => {
    return cat.includes('Child')
  })
  if (modifyChildData.length > 0) {
    quizData.categories.push('%Child All%')
  }
  const result = {
    data: {
      id: 0,
      type: 'survey',
      attributes: {
        gender: ['All', quizData.gender],
        weather: ['All', ...modifyWeatherData],
        tripDetails: {
          title: quizData.name,
          destination: quizData.destination,
          duration: quizData.number_of_days,
        },
        categories: [
          'Accessories', 
          'Clothing', 
          'Essentials', 
          'Toiletries', 
          'Misc.',
          ...quizData.categories
        ]
      }
    }
  }

  return ({
    data: {
      id: 0,
      type: 'survey',
      attributes: {
        gender: ['All', quizData.gender],
        weather: ['All', ...modifyWeatherData],
        tripDetails: {
          title: quizData.name,
          destination: quizData.destination,
          duration: quizData.number_of_days,
        },
        categories: [
          'Accessories', 
          'Clothing', 
          'Essentials', 
          'Toiletries', 
          'Misc.',
          ...quizData.categories
        ]
      }
    }
  })
}


// TODO: If the backend changes the format of tripDetails response, 
// we can delete this helper
export const filterRawSingleList = (data) => {
  return {
    tripDetails: {
      destination: data.data.attributes.tripDetails.destination,
      duration: data.data.attributes.tripDetails.num_of_days,
      listId: data.data.attributes.tripDetails.packing_list_id,
      title: data.data.attributes.tripDetails.title
    }, 
    categories: {
      ...data.data.attributes.categories
    }
  }
}