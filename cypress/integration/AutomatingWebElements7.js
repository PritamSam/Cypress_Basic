
define('Ninth Test Suite',function(){
    it('Automating Web Elements 7',function(){
        const month = '7'
        const date = '25'
        const year = '2027'
        const expectedList=[month,date,year]

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        //Handling Calendar events
        cy.get('.react-date-picker__inputGroup').click()
        // click to handle month
        cy.get('.react-calendar__navigation__label').click()
        // click to handle year
        cy.get('.react-calendar__navigation__label').click()
        // to select relevant year
        cy.contains('button',year).click()
        // to select relevant month
        cy.get('.react-calendar__year-view__months__month').eq(Number(month)-1).click()
        //to select relevant Date
        cy.contains('button',date).click()

        //Assertions
        cy.get('.react-date-picker__inputGroup__input').each(($el,index)=>
        {
         cy.wrap($el).invoke('val').should('eq',expectedList[index])
        })

    })
})