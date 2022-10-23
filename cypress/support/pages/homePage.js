

let element = {

    topMenu :{
        women : '#block_top_menu > ul > li:nth-child(1) > a',
        dresses : '.sf-menu > :nth-child(2) > .sf-with-ul',
        tshirts : '.sf-menu > :nth-child(3) > a'

    }
}


class HomePage{

    accessWomenMenu(){
        cy.get(element.topMenu.women).click();
    }

    accessDressesMenu(){
        cy.get(element.topMenu.dresses).click();
    }

    accessTshirtsMenu(){
        cy.get(element.topMenu.tshirts).click();
    }



}

export default new HomePage();