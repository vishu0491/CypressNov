/// <reference types ="cypress" />

describe('veriy drop down option',()=>{
    it('verify static drop down option',()=>{
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('python')

        cy.get('#dropdowm-menu-2').select('TestNG')

    })
    it('verify dynamic drop down option',()=>{
        cy.visit('https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('ca')
        cy.get('#myInputautocomplete-list >div').each(function(el){
           // cy.log(el.text).
          if(el.text() == 'Carrots'){
            cy.wrap(el).click()
            cy.get('#submit-button').click()
            cy.url().should('contain','Carrots')
          }

        })
    })
     
     it.only('verify dynamic drop down option',()=>{
        cy.visit('https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('a')
        cy.get('#myInputautocomplete-list > div').each(function(el){
            cy.log(el.text())
            if (el.text()=='Artichoke'){
                cy.wrap(el).click()
                cy.get('#submit-button').click()
                cy.url().should('contain','Artichoke')
            }

        })
     })
    
   


})

