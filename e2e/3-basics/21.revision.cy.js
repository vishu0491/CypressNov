//JS alarts -we cant inspect
//window:alart
//window:confirm
//window:prompt
/// <reference types="cypress" />

describe ('verify JS alarts in cypress',()=>{
    it('verify window:alart', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.on('window:alert',function(msg){
            expect(msg).to.eq('I am a JS Alert')
            return true
        })

        cy.get('[onclick="jsAlert()"]').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')
        
    })

    it('verify window:confirm',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm',function(msg){
            expect(msg).to.eq('I am a JS Confirm')
            return true
        })

        cy.get('[onclick="jsConfirm()"]').click()
        cy.get('#result').should('have.text','You clicked: Ok')
    })


    it('verify window:confirm',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm',function(msg){
            expect(msg).to.eq('I am a JS Confirm')
            return false
        })
        cy.get('[onclick="jsConfirm()"]').click()
        cy.get('#result').should('have.text','You clicked: Cancel')
    })


    it('verify window:prompt',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns(null)
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: null')
    })

    it('verify window:prompt',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('hii how are you')
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: hii how are you')

    })

    it('verify window:prompt',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(win){
            cy.stub(win,'prompt').rejects
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: undefined')
    })


})