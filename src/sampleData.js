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
      number_of_days: '7',
      title: 'Graduation Parrrtay'
    },
    categories: {
      'Accessories': [
        {name: 'Hat', quantity: 0, is_checked: false},
        {name: 'Belts', quantity: 1, is_checked: false},
        {name: 'Purses', quantity: 0, is_checked: false},
      ],
      'Beach': [],
      'Business': [],
      'Child 0-2': [],
      'Child 3-6': [],
      'Child 7-12': [],
      'Clothing': [],
      'Essentials': [],
    }
  }
}
