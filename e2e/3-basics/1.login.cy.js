///<reference types="cypress"/>

describe("verify conatct us page",function(){
    it("verify contact us page for valid data",function(){
        // AA
        //Arrangment,Action Assertion
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        // Action
        cy.get('[name="first_name"]').type('vishal')
        cy.get('[name="last_name"]').type('jadhav')
        cy.get('[name="email"]').type('vishu@gmai.com')
        cy.get('[name="message"]').type('h1')
        
        cy.get('[type="submit"]').click()
        //Asssertion 

        cy.get('h1').should('have.text','Thank You for your Message!')

    })


})