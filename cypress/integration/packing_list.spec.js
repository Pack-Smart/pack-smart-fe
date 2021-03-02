describe('Get Started', () => {
  beforeEach(() => {
    cy.visit('https://packsmart.herokuapp.com/')
    .get('.start-button').click()
    .get('input:first').type('Spring Break')
    .get('input').eq(1).type('Cabooooo')
    .get('input:last').type('47')
    .get('[name="Female Typical"]').click()
    .get('[name="Warm"]').click()
    .get('[name="Hot"]').click()
    .get('[name="Beach"]').click()
    .get('[name="NightLife"]').click()
    .get('.quiz-submit-btn').click()
  })
  
  it('should display the packing list', () => {
    cy.contains('Spring Break')
  })

})