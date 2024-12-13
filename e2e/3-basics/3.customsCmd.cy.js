///<reference types ="cypress" />

describe('verify login page of OHRM',() =>{
    it('verify for valid data',() =>{
        // AAA
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click()

        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashbord')
    })
    
    it('verify for invalid data',( )=>{
        //AAA

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type('dip')
        cy.get('[name="password"]').type('dip123')
        cy.get('[type="submit"]').click()

        cy.get('.oxd-alert-content-text').should('have.text','Inavlid creditals')
    })

    it('verify for valid data with customs command',() =>{
       //AAA
       
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.ORHMlogin('Admin','admin123')
       cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    })

    it.only('verify for Invalid data custom command', ()=>{
        // AAA

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.ORHMlogin('dip','aaa')
        cy.get('.oxd-alert-content-text').should('have.text','Inavlid  credentials')
    })
 
})

