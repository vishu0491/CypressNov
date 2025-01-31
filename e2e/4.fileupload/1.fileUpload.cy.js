/// <reference types ="cypress"/>

describe('verify file upload opetion in cypree ',()=>{
    it('verify single file upload ',()=>{
        cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html')
        cy.get('[id="myFile"]').selectFile("C:/Users/HP/Downloads/VISHAL.pdf")


        cy.on('window:alert',function(text){
            expect(text).eq('Your file has now been uploaded!')
            return true

        })
        cy.get('[id="submit-button"]').click()
        cy.url().should('contain','VISHAL')

    })
    it('verify single file upload 2',()=>{
        cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html')
        let path ="cypress/e2e/4.fileupload/VISHAL.pdf"
        cy.get('[id="myFile"]').selectFile(path)
        cy.on('window:alert',function(text){
            expect(text).to.eq('Your file has now been uploaded!')
            return true
        })

        cy.get('[id="submit-button"]').click()
        cy.url().should('contain','VISHAL')
    })

    it('verify multiple file upload',()=>{
         cy.visit('https://www.zoho.com/in/books/accounting-software-demo/#/salesorders/new')
         let path1 ="C:\Users\HP\Downloads\Lottery_PDF_Lottery Cycle-5.pdf"
         let path2 = "C:\Users\HP\Downloads\VISHAL.pdf"
         cy.get('[id="ember335"]').selectFile(path1,path2)
         cy.get('[id="ember355"]').should('contain','2')

    })

})