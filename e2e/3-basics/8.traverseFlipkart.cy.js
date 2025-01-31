/// <reference types ="cypress" />

describe('traversing DOM element',()=>{
    it('flipkart',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('[name="q"]').type('bag{enter}')
        cy.get('div[class="syl9yP"]').first().should('have.text', 'Fast look')
        cy.get('div[class="syl9yP"]:first').should('have.text', 'Fast look')
    })
})