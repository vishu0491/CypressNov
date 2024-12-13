// hook in cypress 
// before ,beforeEach ,After ,afterEach 

/// <reference types="cypress" />

describe ('hooks',function(){
    before(function(){
        cy.log('i will execute firt-only one time')
    })

    this.beforeEach(function(){
        cy.log('i will execute before each test case')
    })
    after(function(){
        cy.log('i will execute after all test case and only once')
    })
    afterEach(function(){
        cy.log('i will execute afte each test case ')
    })

    it ('hooks1',function(){
        cy.log('i am test case 1')
    })
    it ('hooks',function(){
        cy.log('i am test case 2')
    })
    it('hooks3',function(){
        cy.log('i am test case 3')
    })
})


