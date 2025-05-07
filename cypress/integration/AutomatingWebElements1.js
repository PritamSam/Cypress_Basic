


describe('Third Test Suite',function(){
    it('Automating Web Elements',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //handling check boxes and validating behaviour using be. and validating property/comparision using have.
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        //to uncheck check box
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //handling multiple checkbox with their values in DOM
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        //handling static drop down and comparing value 
        cy.get('select').select('option2').should('have.value','option2')
        //handling dynamic drop down element
        cy.get('#autocomplete').type('ind')
        //Parent to child chaining
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            if($e1.text()==="India")
            {
                $e1.click()
            }
        })
        cy.get('#autocomplete').should('have.value',"India")
        //Handling visible elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        //handling  Radio button example
        cy.get('[value="radio2"]').check().should('be.checked')
        //handling alerts and pop ups
        //Note: Cypress automatically handles popup, alerts. Hence results can be viewed in the log instead of test 
        cy.get('#name').type('Pritam').should('have.value','Pritam')
        cy.get('input[value="Alert"]').click()
        cy.get('[value="Confirm"]').click()
        //handling alerts in cypress
        cy.on('window:alert',(str)=>{
            //Mocha Framework
            expect(str).to.equal('Hello Pritam, share this practice page and share your knowledge')
        })
        //handling confirm pop up in cypress
        cy.on('window:confirm',(str)=>{
            //Mocha Framework
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })
})