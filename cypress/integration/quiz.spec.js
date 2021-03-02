describe('Get Started', () => {
  beforeEach(() => {
    cy.visit('https://packsmart.herokuapp.com/')
      .get('.start-button').click()
      .get('[name="Cold"]').click()
      .get('[name="Cool"]').click()
      .get('[name="Warm"]').click()
      .get('[name="Hot"]').click()
      .get('[name="Rainy"]').click()
      .get('[name="Snowy"]').click()
      .get('[name="Beach"]').click()
      .get('[name="Business"]').click()
      .get('[name="Camping"]').click()
      .get('[name="Hiking"]').click()
      .get('[name="International"]').click()
      .get('[name="NightLife"]').click()
      .get('[name="Skiing"]').click()
      .get('[name="Wedding/Formal"]').click()
      .get('[name="Child 0-2"]').click()
      .get('[name="Child 3-6"]').click()
      .get('[name="Child 7-12"]').click()
  })
  
  it('should display the quiz', () => {
    cy.contains('Trip Details')
  })
  
  it('user cannot proceed without a trip name, location and number of days', () => {
    cy.get('[name="All"]').click()
      .get('.quiz-submit-btn').click()
      .get('.invalid-message').should('contain', 'Please answer all the questions in the quiz before proceeding.')
  })

  it('user cannot proceed unless a gender button is clicked', () => {
    cy.get('.quiz-submit-btn').click()
      .get('.invalid-message').should('contain', 'Please answer all the questions in the quiz before proceeding.')
  })

  it('user cannot proceed unless a weather button is clicked', () => {
    cy.get('[name="Male Typical"]').click()
    .get('[name="Cold"]').click()
    .get('[name="Cool"]').click()
    .get('[name="Warm"]').click()
    .get('[name="Hot"]').click()
    .get('[name="Rainy"]').click()
    .get('[name="Snowy"]').click()
    .get('.quiz-submit-btn').click()
    .get('.invalid-message').should('contain', 'Please answer all the questions in the quiz before proceeding.')
  })

  it('user will see their packing list if all required buttons are clicked', () => {
    cy.get('[name="Male Typical"]').click()
    .get('input:first').type('Dream Team')
    .get('input').eq(1).type('Will\'s House')
    .get('input:last').type('123456')
    .get('.quiz-submit-btn').click()
    .get('p.packing-list-details').should('contain', 'Will\'s House for 123456 days')
    .url().should('include', '/packing-list')
  })
})
  
/*
Quiz:
- click on Get Started
- Take the quiz (required sad path)
- click 'Get My Packing List!'


Edit Packing List:
- click ^ and down carrot
- change quantity
- click checked
- click delete 'X'
    - click 'take me back'
    - click 'please dont ...'
    - click 'delete'

Edit Title: 
- click edit pencil
- change trip details (sad path for '')
- click 'Save'


Headers:
- click 'How It Works'
- click 'Start New List'
- click 'Saved Lists'
- click 'PS'

Saved Lists:
- click delete trip
- click trip

Sad path for api calls:
(We have a lot ... and I'm going to lunch right now. ;) )
*/