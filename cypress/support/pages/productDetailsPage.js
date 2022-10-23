

let element = {

    dataSheet :{
        dataSheetLabel : ':nth-child(2) > .page-product-heading',
        compositionsLabel : 'tbody > :nth-child(1) > :nth-child(1)',
        compositeValueText : 'tbody > :nth-child(1) > :nth-child(2)',
    
        moreInfoLabel : ':nth-child(3) > .page-product-heading',
        moreInfoText : ':nth-child(3) > .page-product-heading  + div p',
    
        reviewLabel : '.idTabHrefShort',
        reviewText : '#idTab5 div p'
    }
}


class ProductDetails{

    validateDataSheet(){
        cy.get(element.dataSheet.dataSheetLabel).should('have.text', 'Data sheet');
        cy.get(element.dataSheet.compositionsLabel).should('have.text', 'Compositions');
        cy.get(element.dataSheet.compositeValueText).should('have.text', 'Cotton');
    }

    validateMoreInfo() {
        cy.get(element.dataSheet.moreInfoLabel).should('have.text', 'More info');
        cy.get(element.dataSheet.moreInfoText).contains('The result? Cool, easy, ');

    }

    validateReviewDetails(){
        cy.get(element.dataSheet.reviewLabel).should('have.text','Reviews');
        cy.get(element.dataSheet.reviewText).should('have.text', 'No customer comments for the moment.');
    }


}

export default new ProductDetails();