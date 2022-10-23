

let element = {

    category : '.category-name'
}


class WomenCategoryPage{

    validateWomenCategory(){
        cy.get(element.category).contains('Women');
    }
}

export default new WomenCategoryPage();