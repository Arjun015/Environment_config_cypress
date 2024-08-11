




describe('Verify the functionality of dropDown',function(){

    // TC-01   (for single option)

    it('verify the functionality of dropDown',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('java').should('have.value',"java")
        cy.get('#dropdowm-menu-1').select('JAVA').should('have.value',"java")
    })


    // TC-02  (for multiple selection)

    it('Verify the dropDown functionality for multiple option',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

        let value = ["python","testng","jquery"]
        cy.get('div[class="section-title"]').first().children().each(function(el,indx){

            cy.wrap(el).select(value[indx]).should('have.value',value[indx])

        })

    })

    // TC-03


    it('Verify the dropDown functionality for multiple option',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

        let value = ["python","testng","jquery"]


        let textV = ["Python","TestNG","JQuery"]
        cy.get('div[class="section-title"]').first().children().each(function(el,indx){

            cy.wrap(el).select(textV[indx]).should('have.value',value[indx])

        })

    })

})