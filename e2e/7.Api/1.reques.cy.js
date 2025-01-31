/// <reference types='cypress' />
import data from "../../fixtures/1.Api/req1.json"
import data2 from "../../fixtures/1.Api/req2.json"


//CURD

describe ('TSC001 -verify reques Api',function(){
    it('TC001 - verify requers Api GET method', function(){

      cy.request({
        url : "https://reqres.in/api/users?page=1",
        method : "GET"


      }).then((resGet) =>{
        cy.log(resGet)
        cy.log(resGet.body.data[0].first_name)
        expect(resGet.status).to.eq(200)
        expect(resGet.statusText).to.eq("OK")
        expect(resGet.body.data[0].first_name).to.eq('George')

      })

    })
   
  it('TC002 - verify reqres Api -post method',function(){
      
      let user ={
          "name" : "Amol",
          "job" : "leader"
      }
      cy.request({
          url : "https://reqres.in/api/users",
          method :"POST",
          body : data

      }).then((resPost) =>{
         cy.log(resPost)
         expect(resPost.body.name).to.eq(data.name)

      })
      
  }) 
  
  data2.forEach((el,indx)=>{
    it('TC003- verify rqres Api post Menthod',function(){
        cy.request({
            url : "https://reqres.in/api/users",
            method : "POST",
            body : el
        }).then((resPost)=>{
            cy.log(resPost)
            expect(resPost.body.name).to.eq(el.name)
        })
      })
   })
   

})