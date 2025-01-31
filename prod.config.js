const{definconfig}=require("cypress")
module.exports = definconfig({
    e2e:{
        baseUrl :"https://practice.automationtesting.in/"
    },
    env :{
        uid : "testingProd@gmail.com",
        pw  : "Chawde@123"
    }

})