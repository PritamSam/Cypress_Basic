

define('Fourth Test Suite',function(){
    it("Automating Web Elements 2",function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //handling Web Elements which redirects to new tab
        //Note: Cypress can only automate web elements present in current window. If any element opens a url in new tab/window we use invoke() to open in current tab
        cy.get('#opentab').invoke('removeAttr','target').click()
        //handling web elements of web page that opens in new tab
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.get('#navbarSupportedContent a[href*="about"]').click()
            cy.get('.mt-50 h2').should('contain','QAClick Academy')
        })
       
    })
})