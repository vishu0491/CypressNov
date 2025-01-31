/// <reference types="cypress" />

describe('rev of first day(verify conatct us page with valid and invalid data)',()=>{
    // test suit 
    it('verify conatct us page with avlid data',()=> {

        // AAA
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('vishal')
        cy.get('[name="last_name"]').type('jadhav')
        cy.get('[name="email"]').type('vishal@gmail.com')
        cy.get('[name="message"]').type('hii')

        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text','Thank You for your Message!')


    })

    it('verify conatact us page with inavalid data',()=>{

        //AAA
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('vishal')
        cy.get('[name="last_name"]').type('jadhav')
        cy.get('[name="email"]').type('vishagmail.com')
        cy.get('[name="message"]').type('hii how ae you')

        cy.get('[type="submit"]').click()
        cy.contains('Error:Inavalid Email address').should('be.visible')

    })

    it.only('verify conatct us page with valid datat with custom comand ',()=>{
        cy.visit('')
        cy.contactUs('vishal','jadhav','vishal@gmail.com','I am learing cypress')
        cy.get('h1').should('have.text','Thank you for Your message!')
    })

    it.only('verify conatct us page with invalid data',()=>{
        // AAA
        cy.visit('')
        cy.contactUs('Vishal','jadhav','vishagmail.com','I am learing cypress')

        cy.contains('Error:Inavaild email address').should('be.visible')
    })  

})