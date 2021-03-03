describe('Saved Lists', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/').wait(1000)
      .get('.start-button').click()
      .get('[name="Cool"]').click()
      .get('[name="Warm"]').click()
      .get('[name="Beach"]').click()
      .get('[name="Hiking"]').click()
      .get('[name="Male Typical"]').click()
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
    })
  
  it('should allow user to navigate to saved list url', () => {
    cy.url().should('include', '/packing-list')

    cy.fixture('getAllPackingLists.json')
      .then((getAllPackingLists) => {cy.intercept('GET', 'https://pack-smart-be.herokuapp.com/api/v1/users/1/packing_lists', {
        statusCode: 200,
        body: getAllPackingLists
      })
    })

    cy.get('#saved-lists-btn').click()
      .url().should('include', '/saved-packing-lists')
  })

  it('should allow user to navigate to the packing list of clicked thumbnail', () => {
    cy.fixture('getAllPackingLists.json')
    .then((getAllPackingLists) => {cy.intercept('GET', 'https://pack-smart-be.herokuapp.com/api/v1/users/1/packing_lists', {
      statusCode: 200,
      body: getAllPackingLists
    })
  })
    cy.get('#saved-lists-btn').click()
      .url().should('include', '/saved-packing-lists')

    cy.fixture('getSinglePackingList')
      .then((getSinglePackingList) => {cy.intercept('GET', 'https://pack-smart-be.herokuapp.com/api/v1/packing_lists/1', {
        statusCode: 200,
        body: getSinglePackingList
      })})

    cy.get('.saved-thumbnail-container > :nth-child(1)').click()
      .url().should('include', '/packing-list')
  })

  it.only('should allow user to delete a trip when thumbnail is clicked', () => {
    cy.fixture('getAllPackingLists.json')
    .then((getAllPackingLists) => {cy.intercept('GET', 'https://pack-smart-be.herokuapp.com/api/v1/users/1/packing_lists', {
      statusCode: 200,
      body: getAllPackingLists
    })})
    
    cy.fixture('deletePackingList')
      .then((deletePackingList) => {cy.intercept('DELETE', 'https://pack-smart-be.herokuapp.com/api/v1/packing_lists/1', {
        statusCode: 200,
        body: deletePackingList
      })
        .then(() => {
          cy.fixture('getNoPackingLists.json')
          .then((getNoPackingLists) => {cy.intercept('GET', 'https://pack-smart-be.herokuapp.com/api/v1/users/1/packing_lists', {
            statusCode: 200,
            body: getNoPackingLists
          })})
        })
    })  

    cy.get('#saved-lists-btn').click()
      .url().should('include', '/saved-packing-lists')
      .get('.thumbnail-deleteBtn').click()

    cy.get('#delete-list-btn').click()
  })
})