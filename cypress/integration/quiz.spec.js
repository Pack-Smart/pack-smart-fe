describe('Get Started', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/').wait(1000)
      .get('.start-button').click()
      .get('[name="Cool"]').click()
      .get('[name="Warm"]').click()
      .get('[name="Beach"]').click()
      .get('[name="Hiking"]').click()
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
      .get('[name="Cool"]').click()
      .get('[name="Warm"]').click()
      .get('.quiz-submit-btn').click()
      .get('.invalid-message').should('contain', 'Please answer all the questions in the quiz before proceeding.')
  })

  it.only('user will see their packing list if all required buttons are clicked', () => {
    cy.get('[name="Male Typical"]').click()
      .get('input:first').type('Dream Team Test')
      .get('input').eq(1).type('Will\'s House')
      .get('input:last').type('123456')

    cy.fixture('getPackingListData.json')
      .then((getPackingListData) => {cy.intercept('POST', 'https://pack-smart-be.herokuapp.com/api/v1/list/new', {
        statusCode: 200,
        body: getPackingListData
      })
        .then(() => {
          cy.fixture('saveNewPackingList.json')
          .then((saveNewPackingList) => {cy.intercept('POST', 'https://pack-smart-be.herokuapp.com/api/v1/packing_lists/new', {
            statusCode: 200,
            body: saveNewPackingList
          })
        })
      })
        cy.fixture('getSinglePackingList.json')
        .then((getSinglePackingList) => {cy.intercept('GET', 'https://pack-smart-be.herokuapp.com/api/v1/packing_lists/1', {
          statusCode: 200,
          body: getSinglePackingList
        })
      })
    })


    cy.get('.quiz-submit-btn').click()
      .get('.packing-list-details').should('contain', "Will/'s House for 123456 days")
      .url().should('include', '/packing-list')
    })
})