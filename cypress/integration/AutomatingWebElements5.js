

describe('Seventh Test Suite',function(){
    it('Automating Web Elements 5',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //handling web elements that redirects to new tab without invoke function
        // Note : All cypress commands hanldes promises internally. Non-cypress commands(jquery commands) handles promises through .then()
        // ()=> is called as fat arrow function
        cy.get('#opentab').then(function($e){
            var url=$e.prop('href')
            cy.origin(url, ()=>{
                cy.get('sub-menu-bar a[href="about"]').click()
            })
        })
    })
})