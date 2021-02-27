export const samplePackingList = {
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

export const mockSubmissionData = {
  data: {
    id: 0,
    type: 'survey',
    attributes: {
      gender: ['All', 'Female'],
      weather: ['All', '%Hot%'],
      tripDetails: {
        title: 'Cabo 2008',
        destination: 'Italy???',
        number_of_days: '3',
      },
      categories: [
        'Accessories', 
        'Clothing', 
        'Essentials', 
        'Toiletries', 
        'Misc.',
        'Beach'
      ]
    }
  }
}
