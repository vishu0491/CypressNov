/// <reference types ='cypress'/>

describe('verify iframe in cypress',()=>{
    it.only('example 1',()=>{
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function($frame){
            cy.log($frame)
            let iframeBody = $frame.contents().find('body')
            cy.wrap(iframeBody).as('iframe')
            cy.get('@iframe').find('[href="index.html"]').should('have.text','Home')
        })
    })
    it('example 3', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        let iFrameBody=cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        iFrameBody.find('[href="index.html"]').should('have.text', 'Home')
   })
   it('example 4',()=>{
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.getiFrameBody('#frame').find('[href="index.html"]').should('have.text','Home')   
   })
   it('example 5',()=>{
    cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
    cy.getiFrameBody('#courses-iframe').find('[class="dynamic-heading margin-bottom-20"]').should('have.text','All Courses')
   })


})

