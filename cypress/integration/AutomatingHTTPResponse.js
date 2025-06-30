describe('Automating HTTP Response', () => {

 it('Mocking/Modifying response with status code 200', () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

    cy.intercept({
      method: 'GET',
      url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    }, 
    {
      statusCode: 200,
      body: [{
          "book_name": "RestAssured with Java",
          "isbn": "LSA",
          "aisle": "2303" }]
    }).as('bookretrievals')
    cy.get('button[class="btn btn-primary"]').click()
    cy.wait('@bookretrievals').then(({request,response})=>
    {
        cy.get('tr').should('have.length', response.body.length+1)
    })
    cy.get('p').should('have.text', 'Oops only 1 Book available')
 })

    it('Mocking/Modifying response with status code 403', () => {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
    
        cy.intercept( 'GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (req) => {
                req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra\\'

                req.continue((res) => {
                    expect(res.statusCode).to.equal(404)
                })
            }
        ).as('dummyURL')
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@bookretrievals')
    })
})