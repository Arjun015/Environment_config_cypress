



describe('Verify the functionality Radio button',function(){

    // TC-01

    it('verify the functionality of Radio button',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="green"]').click().should('be.checked')
    })

    // TC-02
    
    // loop - check the radio button simultaneously one by one

    it('verify the functionality of Radio button',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#radio-buttons').find('input[type="radio"]').each(function(el){
            cy.wrap(el).check().should('be.checked')
        })
    })

     // TC-03
    it('verify the functionality of Radio button',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="yellow"]').should('not.be.checked')
    })


})