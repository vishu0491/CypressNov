/// <reference types ="cypress" />

describe('verify radio Button and check box',()=>{

    it('verify radio Button',() => {
       cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
       cy.get('[value="green"]').should('not.be.checked')
       cy.get('[value="green"]').check().should('be.checked')
       cy.get('[value="green"]').click().should('be.checked')
       cy.wait(2000)
       cy.get('[value="blue"]').click().should('be.checked')
       cy.wait(2000)
       cy.get('[value="green"]').should('not.be.checked')


    })

   it('verify checkbox',()=>{
     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
     cy.get('[value="option-3"]').should('be.checked')
     cy.get('[value="option-3"]').click().should('not.be.checked')
     cy.get('[value="option-3"]').click().should('be.checked')

     cy.get('[value="option-1"]').uncheck().should('not.be.checked')
     cy.log()
   })

   it('verify check Box and radio btn',()=>{
    cy.visit('https://www.letskodeit.com/practice')
    cy.get('#benzradio').should('not.be.checked')
    cy.get('#benzradio').check().should('be.checked')

    cy.get('#bmwradio').should('not.be.checked')
    cy.get('#bmwradio').click().should('be.checked')
    cy.get('#benzradio').should('not.be.checked')
   })
  it.only('Amzon', ()=>{
    cy.visit('https://www.amazon.in/')
    cy.get('[class="icp-nav-link-inner"]').click()

    cy.get('[value="en_IN"]').should('be.checked')
    cy.get('[value="hi_IN"]').click({force:true}).should('be.checked')
    cy.get('[value="en_IN"]').should('not.be.checked')

  })


})
