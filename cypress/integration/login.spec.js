

describe('verify the login functionality',()=>{
    //  it('verify the login',()=>{
    //      cy.visit('/')
    //  })

    it('Example of Baseurl',() => {
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url); //passing url value to cy.visit()
    })
})
