///<reference types = "cypress"/>

import {Utility} from '../../support/utility'

describe('verify the functionality of OrgHrm',function(){

    it('login testCase with valid credentials',function(){
        //cy.visit('/login')

        let baseUrlA = Cypress.config().baseUrl
        let extimeout = Cypress.config().execTimeout
        cy.log(baseUrlA)
        cy.log(extimeout)
        //cy.visit(baseUrlA)
    })

    it('verify the forgot password link',function(){
        cy.visit('/requestPasswordResetCode')

    })

    it.only('Ohrm login testCase with valid credentilas',function(){
        let aa = new Utility()
        let c = aa.getBaseUrl()
        cy.log(c)
    })
})

