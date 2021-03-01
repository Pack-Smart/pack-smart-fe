export const sampleCategories = {
  Accessories: [
    'Belts',
    'Hat',
    'Purses'
  ], 
  Beach: [
    'Bathing Suit',
    'Flip Flops',
    'Sun Hat',
    'Sunscreen',
    'Towel',
    'Beach Games'
  ],
  Clothing: [
    'Blouses/ Dress Shirts',
    'Bras',
    'Jeans',
    'Pajamas',
    'Shoes',
    'Socks',
    'Tank Tops',
    'Sandals/ Flip Flops'
  ], 
  Essentials: [
    'Eye-glasses',
    'Hand Sanitizer',
    'Mask',
    'House/Car Keys',
    'Phone',
    'Phone Charger',
    'Wallet',
    'Cash',
    'Umbrella'
  ], 
  Misc: [
    'Book',
    'Cards',
    'Kindle',
    'Pen/Pencil',
    'Water Bottle',
    'Camera',
    'Camera Charger'
  ],
  Nightlife: [
    'Event tickets',
    'Night Life Outfit'
  ],
  Toiletries: [
    'Beard Trimmer',
    'Lotion'
  ]
}

export const mockState = {
  userInfo: {
    userId: 1
  },
  packingList: {
    tripDetails: {
      destination: 'Mexico',
      duration: '7',
      title: 'Graduation Parrrtay',
      listId: "1"
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
