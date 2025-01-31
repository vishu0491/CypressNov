/// <reference types ="cypress"/>
describe("verify date picker functionality in cypress",()=>{
     it('verify date picker for current and future date',()=>{

          let currentDate = new Date()
          cy.log(`current date is ${currentDate}`)

          let todayDate = currentDate.getDate()
          cy.log(`current date is ${todayDate}`)

          let todayMonth = currentDate.getMonth() // starts with 0 as jan 
          cy.log(`current month is ${todayMonth +1}`)
          
          let todayyear = currentDate.getFullYear()
          cy.log(`curent year is ${todayyear}`)

          let todayMonthNsh = currentDate.toLocaleDateString("default",{month:"short"})
          cy.log(`current month is ${todayMonthNsh}`)
          
          let todayMonthLong = currentDate.toLocaleDateString("default",{month:"long"})
          cy.log(`current month is ${todayMonthLong}`)


          // future date 
          let datef = new Date()
         // cy.log(`future date is ${datef}`)

         datef.setDate(datef.getDate()+31)
         cy.log(`future date is ${datef}`)


         let fmonth = datef.getMonth()
         cy.log(`future month is ${fmonth +1}`)

         let fyear = datef.getFullYear()
         cy.log(`future year is ${fyear+1}`)


         let fmonthNsh = datef.toLocaleDateString("default",{month:"short"})
         cy.log(`future month is${fmonthNsh}`)

         let fmonthLong = datef.toLocaleDateString("default",{month:"long"})
         cy.log(`future moth is ${fmonthLong}`)

         cy.visit('https://www.webdriveruniversity.com/Datepicker/index.html')
         cy.get('.input-group-addon').click()

         






     })

})