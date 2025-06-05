describe('HandlingVariables',function(){

    
     before(function(){
        cy.fixture('example').then(function(data){
              this.data=data
        })
    })
    it('TestToHandleCommonUsedVariables',function(){
        //Adding env variables globally into cypress.config.js folder which can be accessed thought the test suite 
        cy.visit(Cypress.env('url'))
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()
        cy.get('.post-title').should('contain.text','Logged In Successfully')
        cy.contains('Log out').click()
    })
})