///<reference types='cypress' />

describe('TS001 : verify conatct us page',function(){
    it('TC001:verify contcat us page for valid data',function(){

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('vishal')
        cy.get('[name="last_name"]').type('jadhav')
        cy.get('[name="email"]').type('vishal@gmail.com')
        cy.get('[name="message"]').type('h1')

        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text','Thank You for your Message!')


    })
    
    it('verify conatct us page for inavlid emailid',function(){

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        
        cy.get('[name="first_name"]').type('Amol')
        cy.get('[name="last_name"]').type('jadhav')
        cy.get('[name="email"]').type('nees')
        cy.get('[name="message"]').type('hii')

        cy.get('[type="submit"]').click()
        cy.contains('Error: Invalid email Address').should('be.visible')

    })

    it.only('verify conatct us page for skip field',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('tushar')
        cy.get('[name="email"]').type('tushar@gmail.com')
        cy.get('[name="message"]').type('hii')

        cy.get('[type="submit"]').click()

        cy.contains(' Error: all fields are required').should('be.visible')
     })

     it.only('verify conatct us page for reste buttton',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('Ashsish')
        cy.get('[name="last_name"]').type('paware')
        cy.get('[name="email"]').type('pawar@gmail.com')
        cy.get('[name="message"]').type('h1')

        cy.get('[type="reset"]').click()

        cy.get('[name="first_name"]').should('have.text',"")
        cy.get('[name="last_name"]').should('have.text',"")
        cy.get('[name="email"]').should('have.text',"")
        cy.get('[name="message"]').should('have.text',"")

     })

})
