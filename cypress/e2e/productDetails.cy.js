import ProductDetails from '../support/pages/productDetailsPage.js';


describe('Basic spec', () => {


  beforeEach(() => {
    cy.visit(Cypress.config('productUrl'))
  })

    //Given I'm on the department store Main Page
    //When I access the product page
    //Then the page should display Data Sheet, More Info and Reviews of the product

  it('Basic Cypress - @smoke', () => {
    //Validate Data Sheet, Row Compositions label, Row Compositions value
    ProductDetails.validateDataSheet();

    //Validate More Info
    ProductDetails.validateMoreInfo();

    //Validate Reviews of the products
    ProductDetails.validateReviewDetails();

  })
})