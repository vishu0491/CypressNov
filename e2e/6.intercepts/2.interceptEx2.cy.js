/// <reference types ="cypress" />

import data from "../../fixtures/4.interceptPayload.json"
describe('TS001 : verify intercept concepts', function () {
    it('TC001 - verify intercepts concepts', function () {
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'GET'
        }, {
            body: data
        }).as('getCommit')

        cy.contains('Get Commit').click()
        cy.wait('@getCommit').then((res) => {
            cy.log(res)
        })
        cy.get('[class="network-comment"]').should('contain', 'i am learning')
    })
    it('TC001- verify intercepts concepts', function () {
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments',
            method: 'POST'
        }).as('postComment')

        cy.contains('Post Comment').click()
        cy.wait('@post Comment').then((resp)=>{
            cy.log(resp)

        })
        cy.get('[class="network-comment"]').should('contain', 'i am learing ')

    })
    it.only('TC001- verify intersept concept', function () {
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'PUT'
        }).as('updateComment')

        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then((resU) => {
            //
            expect(resU.response.statusCode).to.eq(200)
        })
    })

})