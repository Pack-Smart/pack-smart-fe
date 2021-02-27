const quizDetails = [
  {
    id: 1,
    question: '*1. Packing list name',
    type: 'text',
    placeholder: 'e.g. Cancun 20 08!',
    name: 'name'
  },
  {
    id: 2,
    question: '*2. Going to: ',
    type: 'text',
    placeholder: 'e.g. Mexico',
    name: 'destination'
  }, 
  { 
    id: 3,
    question: '*3. Number of days:',
    type: 'number',
    placeholder: 'e.g. 3',
    name: 'number_of_days',
    min: '1'
  },
    {
    id: 4,
    question: `*4. Do you want to see items for?`,
    type: 'MultipleChoice',
    category: 'gender',
    subtext: '',
    buttons: ['Female', 'Male', 'All']
  }, 
  { 
    id: 5,
    question: '*5. What will the weather be like?',
    type: 'MultipleChoice',
    category: 'weather',
    subtext: 'Select all that apply',
    buttons: ['Cold', 'Cool', 'Warm', 'Hot', 'Rainy', 'Snowy'],
    isRequired: true
  },
  {
    id: 6,
    question: '6. What activities do you plan to do?',
    type: 'MultipleChoice',
    category: 'categories',
    subtext: 'Optional - select any that apply',
    buttons: ['Skiing', 'Beach', 'Hiking', 'Night Life', 'Wedding/Formal', 'Business'],
    isRequired: false,
  },
  {
    id: 7,
    question: '7. Are you traveling with children?',
    type: 'MultipleChoice',
    category: 'categories',
    subtext: 'Optional - select any that apply',
    buttons: ['Child 0-2', 'Child 3-6', 'Child 7-12'],
    isRequired: false,
  },
]

export { quizDetails }
