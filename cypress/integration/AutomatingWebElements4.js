

describe('Sixth Test Suite',function(){
    it('Automating Web Elements 4',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Mouse Hover 
        // Note : All Jquery function are immediately applied to child element of current class
        //.invoke('show') method used to make invisible elements visible in DOM
        //since #mousehover and Top text are not present under same class , hence show menthod uses immediate child of #mousehover class to execute
       // cy.get('.mouse-hover-content').invoke('show')
        // {force:true} will be handle invisible elements
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })
})