/// <reference types ="cypress" />

describe('cy.task revision', function (){
    it('cy.task example 1', ()=>{
        cy.task('msgPrint')
    })
    it('cy.task example 2',()=>{
        cy.task('msgwithPara','vishal')
    })
    it('cy.task eaxmple 3',()=>{
        cy.task('additon',{a:2,b:3}.then(function(res){
            cy.log(res)
        }))
    })
})





