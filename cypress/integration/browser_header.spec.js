describe('Browser Header', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should take user to the quiz when "Start New List" is clicked', () => {
    cy.get('.header > :nth-child(2)').click()
      .get('h1').contains('Trip Details')
  })

  it('should take user to how it works when "How It Works" is clicked', () => {
    cy.get('.header > :nth-child(3)').click()
      .get('.how-it-works-title').contains('How Pack Smart Makes Packing Easy')
  })
  
  it('should take user to saved lists when "Saved List" is clicked', () => {
    cy.get('.header > :nth-child(4)').click()
      .get('.saved-title').contains('Saved Trips')
  })

  it('should take user home when "PS" is clicked', () => {
    cy.get('.header-logo-anchor').click()
      .get('.pack-smart-title').contains('Pack Smart')
  })

  // // Mobile View Test
  // it('should have a hamburger on a smaller viewport', () => {
  //   cy.viewport(414, 800)
  //     .get('#react-burger-menu-btn').click()
  //     .get('#packing-quiz').click()
  //     .get('h1').contains('Trip Details')
  // })
})


// Headers:
// - click 'How It Works'
// - click 'Start New List'
// - click 'Saved Lists'
// - click 'PS'