
describe('Verify the funcytionality of checkBox',function(){

    // TC-01

    it('verify the functionality of checkBox',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="option-1"]').check().should('be.checked')
        cy.get('input[value="option-1"]').uncheck().should('not.be.checked')
    })

     //TC-02

    it('verify the functionality of checkBox',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="option-1"]').check().should('be.checked')
        // cy.get('input[value="option-1"]').uncheck().should('not.be.checked')
        // cy.get('input[value="option-1"]').uncheck().should('not.be.checked')
        cy.get('input[value="option-1"]').click().should('not.be.checked')
        cy.get('input[value="option-1"]').click().should('be.checked')
    })

    // TC-03

    it('verify the default checkBox using click ',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="option-3"]').as('Defualt')
        cy.get('@Defualt').should('be.checked')
        cy.get('@Defualt').click().should('not.be.checked')
        cy.get('@Defualt').click().should('be.checked')
    })

    // TC-04

    it('verify the default checkBox using click ',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#checkboxes').find('input[type="checkbox"]').each(function(el){
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })
        
    })


    
})