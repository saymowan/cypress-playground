import HomePage from '../support/pages/homePage.js';
import WomenCategoryPage from '../support/pages/womenCategoryPage';
import DressesCategoryPage from '../support/pages/dressesCategoryPage';
import TshirtsCategoryPage from '../support/pages/tshirtsCategoryPage';


describe('Home Page validations', () => {


  beforeEach(() => {
    cy.visit(Cypress.config('homeUrl'))
  })

  it('Validate Women Category', () => {
    HomePage.accessWomenMenu();
    WomenCategoryPage.validateWomenCategory();
  })

  it('Validate Dresses Category', () => {
    HomePage.accessDressesMenu();
    DressesCategoryPage.validateDressesPage(); 
  })

  it('Validate TShirt Category', () => {
    HomePage.accessTshirtsMenu();
    TshirtsCategoryPage.validateTshirtsPage();
  })


})