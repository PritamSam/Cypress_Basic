describe('Automating HTTP Response without UI/cy.visit', () => {
    it ('validating response through cy.request', () => {
        cy.request({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(5417)
            expect(response.body[0].book_name).to.eq('RestAssured with Java')
        })
    })
})