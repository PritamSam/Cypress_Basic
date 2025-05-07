

define ('My First Test suite',function()
{
   
    it('First Test Case',function()
{
    // test steps
    // In selenium, we have driver.get("URL") 
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    // In Selenium, we have driver.findelement(By.cssSelector("tagname[attribute='value']")).sendKeys("value"))
    cy.get('input[type=search]').type('ca');
    // In Selenium, we have Thread.sleep(2000)
    cy.wait(2000);
    // In Selenium, we have assertions like assertEquals, assertTrue, assertFalse
    // Cypress uses Mocha Test Framework and uses Chai for assertions library
    // Cypress can detect hidden elements with same attribute value , hence we need to specify :Visible in locator to test only visible elements
    cy.get('.product:visible').should('have.length',4)
    //Parent to child chaining
    //Note : .find() is used to return the length of the visible elemenst present under products class
    // In Cypress, to get alais function we have as() method which will help to replace common using class names with one simple name
    cy.get('.products').as('productclass')
    cy.get('@productclass').find('.product').should('have.length',4)
    // this command veriefies the 3rd product and the word exists and then clicks on element
    cy.get('@productclass').find('.product').eq(2).contains('ADD TO CART').click()
    //Print statement in output terminal which is in console tab present under davelopers tool
    // Since console.log is not a cypress command, hence it will exceute asynchronously, hence to fix it use .then()
    console.log("sf")
    // handling elements dynamically
    cy.get('@productclass').find('.product').each(($el, index, $list) => {
        const text = $el.find('h4.product-name').text()
        if(text.includes('Cashews'))
        {
         cy.wrap($el).find('button').click()
         
        }
    })
   //Whenever we want to display text in a method, we need to handle promise internally
   //NOTE: Cypress commands helps to resolve promises internally when two more cypress commands are used in a statement
   cy.get('.brand').then(function(logelement)
   {
     cy.log(logelement.text())
   })
   //assert if log text is correctly displayed
   cy.get('.brand').should('have.text','GREENKART')
}
)
}
)