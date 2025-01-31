/// <reference types ="cypress" />
describe('verify tables in cypress',()=>{
    function calculateAge(tableID,finalSum){
        let sum = 0
        cy.get(tableID).find('tr').not(':first').each((row)=>{
            sum +=Number(row.find('td').last().text())
                }).then(()=>{
                    expect(sum).to.eq(finalSum)
                })
    }
})

it('verify table 1',()=>{
    cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    let sum= 0
    cy.get('#t01').find('tr').not('.first').each((row) =>{
        sum += Number(row.find('td').last().text())
        }).then(() => {
            //cy.log(sum)
            expect(sum).to.eq(159)
        })
}) 
    
it.only('verify table 2',()=>{
    
})


