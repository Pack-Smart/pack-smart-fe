describe("edit trip details functionality", () => {
  beforeEach(() => {
    cy.visit('https://packsmart.herokuapp.com/')
    .get('.start-button').click()
    .get('input:first').type('Jackson Lake')
    .get('input').eq(1).type('GTNP')
    .get('input:last').type('3')
    .get('[name="Male Typical"]').click()
    .get('[name="Warm"]').click()
    .get('.quiz-submit-btn').click()
    .get('.edit-title').click()
  })

  it('should run be able to exit the modal', () => {
    cy.get('.close-modal-btn').click()
    .should('include', 'Accessories')
  })
})