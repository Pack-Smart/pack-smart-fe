export const mockState = {
  userInfo: {
    userId: 1
  },
  packingList: {
    tripDetails: {
      destination: 'Mexico',
      duration: '7',
      title: 'Graduation Parrrtay',
      listId: 1
    },
    categories: {
      'Accessories': [
        {name: 'Hats', quantity: 0, is_checked: false, item_id: 1},
        {name: 'Belts', quantity: 0, is_checked: false, item_id: 2},
        {name: 'Purses', quantity: 0, is_checked: false, item_id: 3},
      ],
      'Beach': [
        {name: 'Bathing Suit', quantity: 0, is_checked: false, item_id: 4},
        {name: 'Beach Games', quantity: 0, is_checked: false, item_id: 5},
        {name: 'Sun Hat', quantity: 0, is_checked: false, item_id: 6}
      ],
      'Business': [],
      'Child 0-2': [],
      'Child 3-6': [],
      'Child 7-12': [],
      'Clothing': [],
      'Essentials': [],
    }
  }
}

export const mockQuizSubmissionData = {
  name: 'Middle Fork of the Salmon',
  gender: 'Male Typical',
  weather: ['Cool', 'Warm'],
  destination: 'Idaho',
  number_of_days: '4',
  categories: [
    'Beach',
    'Hiking'
  ]
}

export const mockQuizData = {
  data: {
    id: 0,
    type: "survey",
    attributes: {
      gender: ['All', 'Male Typical'],
      weather: ['All', '%Cool%', '%Warm%'],
      tripDetails: {
        destination: 'Idaho',
        duration: '4',
        title: 'Middle Fork of the Salmon'
      },
      categories: [
        'Accessories',
        'Clothing',
        'Essentials',
        'Toiletries',
        'Misc.',
        'Beach',
        'Hiking'
      ]
    }
  }
}

// Should NOT include list id
export const mockPrecompiledPackingList = {
  tripDetails: {
    destination: 'Arizona',
    duration: '21',
    title: 'Grand Canyon Rafting Trip'
  },
  categories: {
    'Accessories': [
      {name: 'Hats', quantity: 0, is_checked: false, item_id: 1},
      {name: 'Purses', quantity: 0, is_checked: false, item_id: 3},
    ],
    'Beach': [
      {name: 'Bathing Suit', quantity: 0, is_checked: false, item_id: 4},
      {name: 'Beach Games', quantity: 0, is_checked: false, item_id: 6},
      {name: 'Sun Hat', quantity: 0, is_checked: false, item_id: 7}
    ]
  }
}

export const mockPackingList = {
  data: {
    items: [
      {item_id: 1, quantity: 0, is_checked: false},
      {item_id: 3, quantity: 0, is_checked: false},
      {item_id: 4, quantity: 0, is_checked: false},
      {item_id: 6, quantity: 0, is_checked: false},
      {item_id: 7, quantity: 0, is_checked: false}
    ],
    tripDetails: {
      destination: 'Arizona',
      duration: '21',
      title: 'Grand Canyon Rafting Trip'
    },
    userID: 1
  }
}

export const mockItemData = {
  data: {
    items: [
      {id: 2779, is_checked: true, quantity: 1}
    ]
  }
}

export const mockTripDetails = {
  title: "Yellowstone NP Canoe Trip",
  destination: "Wyoming",
  num_of_days: 3
}

export const mockDeletionData = {
  data: {
    item: {
      id: 4
    }
  }
}

export const mockCompiledCustomItemData = {
  data: {
    type: 'custom item',
    attributes: {
      item: 'Balloons',
      quantity: '3',
      category: 'Accessories',
      packing_list_id: 1
    }
  }
}