/// <reference types ="cypress"/>

import gorPostData from "../../fixtures/1.Api/gorPostData";
import gorPutData from "../../fixtures/1.Api/gorPutData";

postData.forEach((el,index)=>{
    it("verify e2e testing of api",()=>{
        const token = "42a62f66f25225e227750ba87ae65fd9aa20fc7d798daeae53adf9ebda5600fb"
        cy.request({
            url : "https://gorest.co.in/public/v2/users",
            method : 'POST',
            body : el,
            headers : {
                Authorization : `Bearer ${token}`
            }
        }).then((resPost)=>{
            //cy.log(resPost)
            expect(resPost.body.name).to.eq(el.name)
            expect(resPost.status).to.eq(201)
            return resPost.body.id
        }).then((userId)=>{
            cy.request({
                url : `https://gorest.co.in/public/v2/users/${userId}`,
                method : 'PUT',
                body  :putData[index],
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then((resPut)=>{
                //cy.log(resPut)
                expect(resPut.body.name).to.eq(putData[index].name)
            }).then(()=>{
                cy.request({
                    url : `https://gorest.co.in/public/v2/users/${userId}`,
                    method : 'DELETE',
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                }).then((resDelete)=>{
                    //cy.log(resDelete)
                    expect(resDelete.body).to.eq("")
                    expect(resDelete.status).to.eq(204)
                })
            })
        })
    })
})