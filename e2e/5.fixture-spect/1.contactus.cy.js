/// <reference types ="cypress" />
describe('TS001- Verify conatct us page with',function(){
   let dataset = {
       nm: 'vishal',
       ln: 'jadhav',
       email: 'vishal@gmail.com',
       msg : 'i am learning cypress'
   }
   it('TC001- verify conatct us page for valid data',function(){
      cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
      cy.get('[name="first_name"]').type(dataset.nm)
      cy.get('[name="last_name"]').type(dataset.ln)
      cy.get('[name="email"]').type(dataset.email)
      cy.get('[name="message"]').type(dataset.msg)

      cy.get('[type="submit"]').click()

      cy.get('h1').should('have.text','Thank You for your Message!')
   })
   it('TC002- verify conatct us page for valid data',function(){
      cy.fixture("1.contactUsPayload.json").then(function(user){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(user.fn)
        cy.get('[name="last_name"]').type(user.ln)
        cy.get('[name="email"]').type(user.email)
        cy.get('[name="message"]').type(user.msg)
  
        cy.get('[type="submit"]').click()
  
        cy.get('h1').should('have.text','Thank You for your Message!')
      })
     
    })
    
    it.only('TC003 - Verify conatct us page for valid data',function(){
        cy.fixture("1.CUPload.json").then(function(user){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(user.userOne.fn)
            cy.get('[name="last_name"]').type(user.userOne.ln)
            cy.get('[name="email"]').type(user.userOne.email)
            cy.get('[name="message"]').type(user.userOne.msg)
      
            cy.get('[type="submit"]').click()
      
            cy.get('h1').should('have.text','Thank You for your Message!')

        })

    })
 })
   
      