/// <reference types ="cypress" />

// before ,befaorEach , after, AfterEach

describe('varify login page of OHRM with cy.Session',()=>{
    beforeEach(function(){
        //cy.ORHMLogin('Admin','admin123')

        cy.OhrmLoginBySession('Admin','admin123')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    })
   it('test Case 1',()=>{
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
   })

   it('test Case 2',()=>{
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
   })

   it('test Case 3',()=>{
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
   })

   it('test Case 4',()=>{
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
   })

   it('test Case 5',()=>{
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
   })

   it('test Case 6',()=>{
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
   })

})