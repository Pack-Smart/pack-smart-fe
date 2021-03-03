describe("edit trip details functionality", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
      .get('.start-button').click()
      .get('input:first').type('Jackson Lake')
      .get('input').eq(1).type('GTNP')
      .get('input:last').type('3')
      .get('[name="Male Typical"]').click()
      .get('[name="Warm"]').click()
      .get('[name="Cool"]').click()
      .get('[name="Beach"]').click()
      .get('[name="Hiking"]').click()
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
    .get('.quiz-submit-btn').click()
    .get('.edit-title').click()
  })

  it('should run be able to exit the modal by clicking the x button', () => {
    cy.get('.close-modal-btn').click()
      
      .get(':nth-child(2) > .cat-title > .edit-category-container').contains('Accessories')
  })

  it('should not be able to submit the modal if not all the fields are filled in', () => {
    cy.get('.trip-title-field > input').clear()
      .get('.trip-destination-field > input').clear()
      .get('.number-input > input').clear()
      .get('.update-trip-details-btn').click()
      .get('.modal-invalid-msg').contains('Please fill out all trip details before proceeding.')
    })

  it('should be able to submit the modal and change the trip details if the user correctly fills out the form', () => {
    cy.get('.trip-title-field > input').clear()
      .type('Hokkaido Ski Trip')
      .get('.trip-destination-field > input').clear()
      .type('Japan')
      .get('.number-input > input').clear()
      .type('14')

    cy.fixture('patchTripDetails.json')
      .then((patchTripDetails) => {cy.intercept('PATCH', 'https://pack-smart-be.herokuapp.com/api/v1/packing_lists/1', {
        statusCode: 200,
        body: patchTripDetails
      })
    })
      .get('.update-trip-details-btn').click()

      .get('.packing-list-title').contains('Hokkaido Ski Trip')
      .get('.packing-list-details').contains('Japan for 14 days')
      .get(':nth-child(2) > .cat-title > .edit-category-container').contains('Accessories')
  })
})