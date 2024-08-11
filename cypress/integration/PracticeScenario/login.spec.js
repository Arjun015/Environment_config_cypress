

describe('verify the functionality for login',function(){

    // TC-01


    it('verify the login functionality valid U & P',function(){
        cy.visit('http://practice.automationtesting.in/my-account/')
        cy.get('#main-nav').children().eq(1)
        cy.contains('My Account').click({force:true})
        cy.get('#username').type('jadhavarjun376@gmail.com')
        cy.get('#password').type('Arjun@12')
        cy.get('input[name="login"]').click({force:true})
        cy.get('ul').should('be.visible')
    })


    // TC-02


    it('verify the login functionality invalid U & P',function(){
        cy.visit('http://practice.automationtesting.in/my-account/')
        cy.get('#main-nav').children().eq(1)
        cy.contains('My Account').click({force:true})
        cy.get('#username').type('jadhavarjungmail.com')
        cy.get('#password').type('Arjun')
        cy.get('input[name="login"]').click({force:true})
        cy.get('p').should('contain',"Lost your password?")
    })

   // TC-03


    it('verify fill the userName and empty password',function(){
        cy.visit('http://practice.automationtesting.in/my-account/')
        cy.get('#main-nav').children().eq(1)
        cy.contains('My Account').click({force:true})
        cy.get('#username').type('jadhavarjun376@gmail.com')
        cy.get('#password')
        cy.get('input[name="login"]').click({force:true})
        cy.get('li').should('contain'," Password is required.")
    })


    // TC-04 


    it('verify fill the empty userName and correct password',function(){
        cy.visit('http://practice.automationtesting.in/my-account/')
        cy.get('#main-nav').children().eq(1)
        cy.contains('My Account').click({force:true})
        cy.get('#username')
        cy.get('#password').type('Arjun@12')
        cy.get('input[name="login"]').click({force:true})
        cy.get('li').should('contain'," Password is required.")
    })

    // TC-05  

    it('verify fill the empty userName and empty password',function(){
        cy.visit('http://practice.automationtesting.in/my-account/')
        cy.get('#main-nav').children().eq(1)
        cy.contains('My Account').click({force:true})
        cy.get('#username')
        cy.get('#password')
        cy.get('input[name="login"]').click({force:true})
        cy.get('li').should('contain'," Username is required.")
    })

    // TC-06


    // Authentication 


    it.only('verify the login functionality valid U & P',function(){
        cy.visit('http://practice.automationtesting.in/my-account/')
        cy.get('#main-nav').children().eq(1)
        cy.contains('My Account').click({force:true})
        cy.get('#username').type('jadhavarjun376@gmail.com')
        cy.get('#password').type('Arjun@12')
        cy.get('input[name="login"]').click({force:true})
        //cy.get('login').type("{shift}{F3}")
        cy.get('ul').should('be.visible')
    })


    


    
})