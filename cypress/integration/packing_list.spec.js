describe('Get Started', () => {
   it('should display the packing list', () => {
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
    cy.contains('Spring Break')
  })

  it('should be able to open categories', () => {
    cy.get(':nth-child(2) > .arrow-container > .edit-category-btn > svg').click()
    .get(':nth-child(3) > .arrow-container > .edit-category-btn > svg').click()
    .get(':nth-child(4) > .arrow-container > .edit-category-btn > svg').click()
    .get(':nth-child(5) > .arrow-container > .edit-category-btn > svg').click()
  })

  it('should be able to edit the quantity of items in multiple categories', () => {
    cy.get(':nth-child(2) > .list-items > :nth-child(1) > .quantity-container > :nth-child(3)').click()
    .get(':nth-child(2) > .list-items > :nth-child(4) > .quantity-container > :nth-child(3)').click()
    .get(':nth-child(3) > .list-items > :nth-child(1) > .quantity-container > :nth-child(3)').click()
    .get(':nth-child(3) > .list-items > :nth-child(1) > .quantity-container > :nth-child(1)').click()
  })

})