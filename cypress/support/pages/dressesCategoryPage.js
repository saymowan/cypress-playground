

let element = {

    category : '.category-name',

    blockLeft : {
        dressesSubMenu : '#categories_block_left > .title_block'
    }
}


class DressesCategoryPage{

    validateDressesPage(){
        cy.get(element.category).contains('Dresses');
        cy.get(element.blockLeft.dressesSubMenu).contains('Dresses');
    }
}

export default new DressesCategoryPage();