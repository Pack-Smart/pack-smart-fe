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

export const compileRequiredList = (quizData) => {
  const { name, weather, gender, destination, number_of_days } = quizData
 
  return ([
    name, 
    weather, 
    gender, 
    destination,
    number_of_days
  ])
}