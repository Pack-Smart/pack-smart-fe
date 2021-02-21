const quizDetails = [
  {
    id: 1,
    question: '1. Packing list name',
    type: 'text',
    placeholder: 'e.g. Cancun 20 08!',
    name: 'name'
  }, 
  {
    id: 2,
    question: `2. I'm packing for:`,
    type: 'MultipleChoice',
    category: 'gender',
    buttons: ['Female', 'Male', 'Non-Binary']
  }, 
  {
    id: 3,
    question: '3. Going to: ',
    type: 'text',
    placeholder: 'e.g. Mexico',
    name: 'destination'
  }, 
  { 
    id: 4,
    question: '4. Number of days: ',
    type: 'number',
    placeholder: 'e.g. 3',
    name: 'number_of_days',
    min: '1'
  },
  { 
    id: 5,
    question: '5. What will the weather be like?',
    type: 'MultipleChoice',
    category: 'weather',
    buttons: ['Cold', 'Cool', 'Warm', 'Hot', 'Rainy', 'Snowy']
  },
  {
    id: 6,
    question: '6. What activities do you plan to do?',
    type: 'MultipleChoice',
    category: 'categories',
    buttons: ['Skiing', 'Beach', 'Hiking', 'Night Life', 'Wedding', 'Business']
  }
]

export { quizDetails }