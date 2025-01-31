/// <reference types ="cypress"/>

describe('TS001 : verify intercepts conscept',function(){
    it('TC001- verify intercepts conscept',function(){
       cy.visit('https://example.cypress.io/commands/network-requests')

       cy.intercept({
        url : 'https://jsonplaceholder.cypress.io/comments/1',
        method :"GET"
       }).as('getComment')
      cy.contains('Get Comment').click()
      cy.log('@getComment').then((res)=>{

        cy.get('[class="network-comment"]').should('have.text',res.response.body.body)


      })
      cy.get('[class="network-comment"]').should('contain','laudantium enim quasi est')

    })

})