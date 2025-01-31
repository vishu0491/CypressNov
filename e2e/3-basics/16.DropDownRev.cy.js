/// <reference types = "cypress" />

describe('verify dropdown optiobn',()=>{
    it('verify dyanamic drop down option',()=>{
        cy.visit('https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('b')
        cy.get('#myInputautocomplete-list >div').each(function(el){
            cy.log(el.text())

            if(el.text()== 'Bagels'){
                cy.wrap(el).click()
                cy.get('#submit-button').click()
                cy.url().should('contains','bagels')
            }
        })
    })
    
    it('verify dynamic dropdown option',()=>{
        cy.visit('https://www.primevideo.com/offers/nonprimehomepage/ref=atv_dl_rdr')
        //cy.get
        cy.get('#pv-nav-container > div > div.zOWbJm > ul > li:nth-child(1) > div.MFjqp3.BRKcbU.oxLhQX > button > span').click()
        cy.get('#pv-search-nav').type('Push')
        cy.get('[class="a0VjRs"] >li').each(function(el){
            cy.log(el.text())
            if(el.text()=='pushpa the rise hindi'){
                cy.wrap(el).click()
                cy.contains('Results for "pushpa the rise hindi"').should('be.visible')
                cy.get('[data-testid="grid-mini-details-controller"]').click()
            }

        })

    })

    it.only('verify dynamic dropdown option', () => {
        cy.visit('https://www.amazon.in/')
    
        // Type into the search box
        cy.get('[type="text"]').type('one')
    
        // Wait for dropdown suggestions and iterate over them
        cy.get('[class="left-pane-results-container"]>div').each(($el) => {
            const optionText = $el.text().trim()
            if (optionText === 'oneplus nord ce 4 lite 5g') {
                cy.wrap($el).click()
    
                // Verify search results
                cy.contains('Results for "OnePlus Nord CE4 Lite 5G (Super Silver, 8GB RAM, 128GB Storage)"').should('be.visible')
    
                // Click on the product image
                cy.get('img[alt="OnePlus Nord CE4 Lite 5G"]').click(); // Example using alt attribute
            }
        })
    })

    



})


