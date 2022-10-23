

let element = {

    category : '.category-name',
    listPageLabel : '.cat-name'

}


class TshirtsCategoryPage{

    validateTshirtsPage(){
        cy.get(element.category).contains('T-shirts');
        cy.get(element.listPageLabel).contains('T-shirts');
    }
}

export default new TshirtsCategoryPage();