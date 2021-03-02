describe('Get Started', () => {
   it('should display the packing list', () => {
    cy.visit('http://localhost:3000/')
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

  it('should allow user to open categories', () => {
    cy.get(':nth-child(2) > .arrow-container > .edit-category-btn > svg').click()
      .get(':nth-child(3) > .arrow-container > .edit-category-btn > svg').click()
      .get(':nth-child(4) > .arrow-container > .edit-category-btn > svg').click()
      .get(':nth-child(5) > .arrow-container > .edit-category-btn > svg').click()
  })

  it('should allow user to edit the quantity of items in multiple categories', () => {
    cy.get(':nth-child(2) > .list-items > :nth-child(1) > .quantity-container > :nth-child(3)').click()
      .get(':nth-child(2) > .list-items > :nth-child(4) > .quantity-container > :nth-child(3)').click()
      .get(':nth-child(3) > .list-items > :nth-child(1) > .quantity-container > :nth-child(3)').click()
      .get(':nth-child(3) > .list-items > :nth-child(1) > .quantity-container > :nth-child(1)').click()
      .get(':nth-child(4) > .list-items > :nth-child(2) > .quantity-container > :nth-child(3)').click()
      .get(':nth-child(4) > .list-items > :nth-child(3) > .quantity-container > :nth-child(3)').click()
  })

  it ('should allow a user to check off items', () => {
    cy.get(':nth-child(2) > .list-items > :nth-child(1) > .input-container > input').click()
      .get(':nth-child(2) > .list-items > :nth-child(2) > .input-container > input').click()
      .get(':nth-child(3) > .list-items > :nth-child(1) > .input-container > input').click()
      .get(':nth-child(4) > .list-items > :nth-child(2) > .input-container > input').click()
  })

  it('should allow user to delete item', () => {
    cy.get(':nth-child(2) > .list-items > :nth-child(6) > .delete > .delete-item').click()
      .get('.modal-buttons > :nth-child(1)').click()
      .get(':nth-child(3) > .list-items > :nth-child(2) > .delete > .delete-item').click()
      .get('.modal-buttons > :nth-child(1)').click()
  })

  it('should allow user to click take me back on the deletion modal', () => {
    cy.get(':nth-child(4) > .list-items > :nth-child(6) > .delete > .delete-item').click()
      .get('.modal-buttons > :nth-child(2)').click()
      .get(':nth-child(5) > .list-items > :nth-child(2) > .delete > .delete-item').click()
      .get('.modal-buttons > :nth-child(2)').click()
  })

  it('should allow a user to decide that they do not want to see the deletion modal', () => {
    cy.get(':nth-child(5) > .list-items > :nth-child(1) > .delete > .delete-item').click()
      .get('.checkbox-question > input').click()
      .get('.modal-buttons > :nth-child(1)').click()
      .get(':nth-child(2) > .list-items > :nth-child(1) > .delete > .delete-item').click()
      .get(':nth-child(2) > .list-items > :nth-child(3) > .delete > .delete-item').click()
  })

  it('should allow a user to close the categories', () => {
    cy.get(':nth-child(2) > .arrow-container > .edit-category-btn > svg').click()
      .get(':nth-child(3) > .arrow-container > .edit-category-btn > svg').click()
      .get(':nth-child(4) > .arrow-container > .edit-category-btn > svg').click()
      .get(':nth-child(5) > .arrow-container > .edit-category-btn > svg').click()
  })

  it('should delete the packing list created in this test', () => {
    cy.get('.header > :nth-child(4)').click()
      .url().should('include', '/saved-packing-lists')
      .get(':nth-child(1) > .delete-btn-container > .thumbnail-deleteBtn').click()
      .get('.modal-buttons > :nth-child(1)').click()
  })
})