describe('Hamburger', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
      .viewport(414, 800)
      .get('#react-burger-menu-btn').click()
  })

  it('should take user to the quiz when "Start New List" is clicked', () => {
    cy.get('#packing-quiz').click()
      .get('h1').contains('Trip Details')
  })

  it('should take user to how it works when "How It Works" is clicked', () => {
    cy.get('#how-it-works').click()
      .get('.how-it-works-title').contains('How Pack Smart Makes Packing Easy')
  })
  
  it('should take user to saved lists when "Saved List" is clicked', () => {
    cy.get('#saved-packing-lists').click()
      .get('.saved-title').contains('Saved Trips')
  })

  it('should return a user home when "Home" is clicked', () => {
    cy.get('#saved-packing-lists').click()
      .get('#home').click()
      .get('.pack-smart-title').contains('Pack Smart')
  })
})