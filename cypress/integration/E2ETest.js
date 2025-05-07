
define('E2E Test Suite',()=>{
    it('Automate E2E Web PAge',()=>{
        const productName = "Nokia Edge"
        
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
        cy.get('#username').type('rahulshettyacademy')
        cy.get('#password').type('learning')
        cy.get('[value="admin"]').check().should('be.checked')
        cy.get('select').select('teach').should('have.value','teach')
        cy.get('#terms').click()
        cy.contains('Sign In').click()
        cy.contains('Shop Name').should('be.visible')
        cy.get('app-card').should('have.length',4)
        // Another method to fetch the contents of elements dynamically aprat form .each() function
        // .each() function is also called iterative method
        // .filter() function filters the product based on text
        cy.get('app-card').filter(`:contains("${productName}")`).then($element=>{
            //wrap methods is used to handle yielded elements
            cy.wrap($element).should('have.length',1)
            cy.wrap($element).contains('button','Add').click()
        })
        //handling elements statically
        cy.get('app-card').eq(0).contains('button','Add').click()
        cy.get('.nav-link.btn.btn-primary').click()
        //assertions
        // for each loop in cypress
        let sum=0;
        cy.get('tr td:nth-child(4) strong').each(($el)=>{
            //converting string to int
           const amount =Number($el.text().split(" ")[1].trim())
           sum =  sum + amount // 65000 + 100000
        }).then(function(){
           expect(sum).to.be.lessThan(200000)
        })
        cy.get('.btn.btn-success').click()
        cy.get('#country').type('India')
        cy.contains('agree').click()
        cy.contains('Purchase').click()
    })
})