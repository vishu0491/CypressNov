/// <reference types ="cypress" />
import data from "../../fixtures/4.interceptPayload.json"

describe('TC001 :verify intercept concept',function(){
    it('TC001 : verify intercept concept',function(){
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url : 'https://jsonplaceholder.cypress.io/comments/1' ,
            method : "GET"
        },{
            body: data 
        
        }).as('getComment')
        cy.contains('Get Commment').click()
        cy.wait('@getComment').then((res)=>{
              cy.log(res)
        })
        cy.get('[class="network-comment"]').should('contain','I am learing ')

    })

    it('TC002- verify intersect concept',function(){
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url :'https://jsonplaceholder.cypress.io/comments',
            method : "POST"
        }).as('postComment')
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then((resp)=>{
            cy.log(resp.response.statusCode).to.eq(201)
            expect(resp.response.body.email).to.eq("hello@cypress.io")
        })
        cy.get('[class="network-post-comment"]').should('have.text','POST successful!')

    })



})