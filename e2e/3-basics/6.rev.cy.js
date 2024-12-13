/// <reference types="cypress" />

describe('revision', ()=>{
    beforeEach(function(){
        cy.log('i am before each')
    })

    afterEach(function(){
        cy.log('i am after each ')
    })

    it ('test case 1',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.hrmCommand2('Admin','admin123')

        cy.get('.oxd-topbar-header-breadcrumb').should ('have.text','Dashboard')
    })
})