/// <reference types ="cypress" />

describe('verify multi-tb and multi-window in cypress',()=>{
    it('verify multi-tab in cypress - type 1',()=>{
        cy.visit('https://www.letskodeit.com/practice')
        cy.url().should('contain','/practice')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('contain','/courses')
    })

    it('verify multi-tab in cypress -type 2',()=> {
        cy.visit('https://www.letskodeit.com/practice')
        cy.url().should('contain','/practice')

        cy.get('#opentab').then((ele) => {
            let url = ele.prop('href')
            cy.visit(url)
            cy.url().should('contain','/courses')

        })
    })
    // rahul shetty 
    // chromeWebSecurity : false , // for multi tab or multi- window  in config.js


    it('verify multi-tab in cypress - type 1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.url().should('contain', 'AutomationPractice/')
        //cy.get('#opentab').click()
        cy.get('#opentab').first().invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'qaclickacademy')
    })
})