

let element = {

    dataSheetLabel : ':nth-child(2) > .page-product-heading',
    compositionsLabel : 'tbody > :nth-child(1) > :nth-child(1)',
    compositeValueText : 'tbody > :nth-child(1) > :nth-child(2)',

    moreInfoLabel : ':nth-child(3) > .page-product-heading',
    moreInfoText : ':nth-child(3) > .page-product-heading  + div p',

    reviewLabel : '.idTabHrefShort',
    reviewText : '#idTab5 div p'

}


class ProductDetails{

    validateDataSheet(){
        cy.get(element.dataSheetLabel).should('have.text', 'Data sheet');
        cy.get(element.compositionsLabel).should('have.text', 'Compositions');
        cy.get(element.compositeValueText).should('have.text', 'Cotton');
    }

    validateMoreInfo() {
        cy.get(element.moreInfoLabel).should('have.text', 'More info');
        cy.get(element.moreInfoText).contains('The result? Cool, easy, ');

    }

    validateReviewDetails(){
        cy.get(element.reviewLabel).should('have.text','Reviews');
        cy.get(element.reviewText).should('have.text', 'No customer comments for the moment.');
    }


}

export default new ProductDetails();