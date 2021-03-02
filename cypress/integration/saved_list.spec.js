describe('Saved Lists', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    .get('.start-button').click()
    .get('input:first').type('Dream Team')
    .get('input').eq(1).type('Will\'s House')
    .get('input:last').type('123456')
    .get('[name="Female Typical"]').click()
    .get('[name="Warm"]').click()
    .get('.quiz-submit-btn').click()
  })

  // afterEach(() => {
  //   // cy.url().should('include', '/packing-list')
  //   cy.get('.saved-lists-btn').click()
  //   .url().should('include', '/saved-packing-lists')
  //   .get(':nth-child(1) > .delete-btn-container > .thumbnail-deleteBtn').click()
  //   .get('.modal-buttons > :nth-child(1)').click()
  // })

    it('should allow user to navigate to saved list url', () => {
      cy.url().should('include', '/packing-list')
        .get('#saved-lists-btn').click()
        .url().should('include', '/saved-packing-lists')
        .url().should('include', '/packing-list')
        .get('.saved-lists-btn').click()
        .url().should('include', '/saved-packing-lists')
        .get(':nth-child(1) > .delete-btn-container > .thumbnail-deleteBtn').click()
        .get('.modal-buttons > :nth-child(1)').click()
        // .get('.header > :nth-child(3)').click()
      //   .should('contain', 'Saved Trips')
    //     // .get('p.packing-list-details').should('contain', 'Will\'s House for 123456 days')
    //     // .url().should('include', '/packing-list')
      // expect(true).equals(true)
    })

    it('should allow user to navigate to the packing list of clicked thumbnail', () => {
      cy.url().should('include', '/packing-list')
        .get('#saved-lists-btn').click()
        .url().should('include', '/saved-packing-lists')
        .get('.saved-thumbnail-container > :nth-child(1)').click()
        .url().should('include', '/packing-list')
        .get(':nth-child(1) > .delete-btn-container > .thumbnail-deleteBtn').click()
        .get('.modal-buttons > :nth-child(1)').click()
    })

    it('should allow user to delete a trip when thumbnail is clicked', () => {
      cy.url().should('include', '/packing-list')
        .get('#saved-lists-btn').click()
        .url().should('include', '/saved-packing-lists')
        .get(':nth-child(1) > .delete-btn-container > .thumbnail-deleteBtn').click()
        .get('.modal-buttons > :nth-child(1)').click()
    })

    // it('should delete this test trip', () => {
    //   // cy.get('.header > :nth-child(4)').click()
    //     // .contains('Dream Team').click()
    //     cy.get('.thumbnail-title').contains('Dream Team')
    // })
})