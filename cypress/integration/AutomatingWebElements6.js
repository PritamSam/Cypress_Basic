/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('Eighth Test Suite',function(){
    it('Automating Web Elements 6',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //handling iframes
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',0)
    })
})
