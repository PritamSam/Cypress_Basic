

define ('Second Test Suite',function()
{
 it('Adding element to cart and checkout',function()
 {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.products').as('productclass')
    cy.get('@productclass').find('.product').eq(2).contains('ADD TO CART').click()
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('PLACE ORDER').click()
 })
})