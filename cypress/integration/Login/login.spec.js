///<reference types ="cypress"/>

describe('verify the contact us page',function(){

    it('verify the title for contact us page',function(){
        cy.visit('Contact-Us/contactus.html')
        cy.get('[name="contactme"]').should('be.visible')

    })

    it.only('verify the title for contact us page',function(){
       let url =  Cypress.config().baseUrl
       cy.log(url)
       cy.visit(url)

    })

    // local  - https://www.google.com
    // staging -  https://www.facebook.com
    // production - http://www.webdriveruniversity.com

})
//npx cypress run --headed --browser edge --config baseUrl=https://www.google.com