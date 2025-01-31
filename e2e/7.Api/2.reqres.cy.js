/// <reference types ="cypress"/>

import data1 from "../../fixtures/1.Api/req1.json"
import data2 from "../../fixtures/1.Api/req2.json"

describe('TS001 : verify reqres Api ', function(){
  
     it('TC001 -verify reqres Api',function(){
        let data = {
            "name":"neel",
            "job" : "leader"
        }
        cy.request({
            url : 'https://reqres.in/api/users',
            method : 'POST',
            body : data1
        }).then((repost)=>{
            cy.log(repost)
            cy.log(repost.body.id)
            expect(repost.status).to.eq(201)

        })
     })

  data2.forEach((el,idx)=>{
    it('TC002 - verify reqres Api -POST method', function(){
        cy.request({
            url:'https://reqres.in/api/users',
            method : 'POST',
            body :el
        }).then((repost)=>{
            cy.log(repost)
            cy.log(repost.body.id)
            expect(repost.status).to.eq(201)

        })
    })
   
  })

  it('TC003- verify equres Api-GET method',function(){

    cy.request({
        url : 'https://reqres.in/api/users?page=2',
        method : 'GET'
    }).then((resGEt)=>{
         cy.log(resGEt)
         cy.log(resGEt.body.data[0].first_name)
         expect(resGEt.body.data[0].first_name).to.eq('Michael')

    })
  })
it.only('TC004- verify requres Api Put method ', function(){

    cy.request({
        url : 'https://reqres.in/api/users/2',
        method : 'PUT',
        body : {
            "name": "morpheus",
            "job": "zion resident"
        }

    }).then((Putres)=>{
        cy.log(Putres)
        expect(Putres.body.name).eq('morpheus')
    })

})

it.only('TC005 - Verify reqres Delete Api method ', function(){
    cy.request({
        url :'https://reqres.in/api/users/2',
        method :'DELETE'
    }).then((Deleresponse)=>{
        cy.log(Deleresponse)
        expect(Deleresponse.body).to.eq("")
        expect(Deleresponse.status).eq(204)
    })

})


})