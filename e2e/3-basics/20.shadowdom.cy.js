///<reference types ="cypress"/>

describe('verify shadowdom in cypress',()=>{
    it('example 1',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('span[class="info"]',{includeShadowDom:true}).should('have.text','mobiles')
        cy.get('[id="nested_shadow_content"]>div',{includeShadowDom:true}).should('have.text','laptops')
        cy.get('input[type=text]:nth-child(5)',{includeShadowDom:true}).type('vishal')
    })

    it('example 1', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('span[class="info"]').should('have.text','Mobiles')
        cy.get('[id="nested_shadow_content"] > div').should('have.text','Laptops')
        cy.get('input[type=text]:nth-child(5)').type('dipanshu')

    })
    it.only('example 1',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('[id="shadow_content"]').shadow().find('span[class="info"]').should('have.text','Mobiles')
        cy.get('[id="shadow_content"]').shadow().find('[id="nested_shadow_content"] >div').should('have.text','Laptops')
        cy.get('[id="shadow_content"]').shadow().find('input[type=text]:nth-child(5)').type('vishal')

    })

    

})