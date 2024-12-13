///<reference types='cypress' />


describe('TS001: verify conatct us page ',function(){
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

    })
    it('TS002:verify conatct us page for valid data', function(){
        //test case 1
        // Aaa
        cy.contactUsCmd('vishal','jadhav','vishal@gmail.com','h1')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it('Tc002: verify conatct us page for invalid email id',function(){
        cy.contactUsCmd('Neel','chawe','neel','hii')
        cy.get('[type="submit"]').click()

        cy.contains('Error: Invalid email address').should('be.visible')
    })

    it('Tc003 verify conatct us page for reset button',function(){
        cy.contactUsCmd('Amol','jadhav','amol','hii')

        cy.get('[type="reset"]').click()

        cy.get('[name="first_name"]').should('have.text',"")
        cy.get('[name="last_name"]').should('have.text',"")
        cy.get('[name="email"]').should('have.text',"")
        cy.get('[name="message"]').should('have.text',"")



    })
    

})