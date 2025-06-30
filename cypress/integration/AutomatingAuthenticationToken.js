describe('AutomatingAuthenticationToken',()=> {

    it('is logged in through local storage',async()=> {

        cy.LoginAPI().then(function() 
        {
            cy.visit('https://rahulshettyacademy.com/client/',
            {
                onBeforeLoad: (win) => {
                    win.localStorage.setItem('token',Cypress.env('token'));
                }
            })
        })
      /*  cy.get('.card-body b').eq(1).then(function(element) {
            productName = element.text();
        })    */  
        cy.get('.card-body button:last-of-type').eq(1).click();
        cy.get('[routerlink*="cart"]').click();
        cy.contains('Checkout').click();
        cy.get('[placeholder*="Country"]').type('Ind');
        cy.get('.ta-results button').each(($el, index, $list) => {
            if ($el.text().trim() === 'India') {
                cy.wrap($el).click();
            }
        })
        cy.get('.action__submit').click();
        cy.wait(3000);
        cy.get('.order-summary button').contains("CSV").click();

        // script to validate results in csv file
        //add depedency "neat-csv": "^5.1.0" in package.json and type npm init in terminal
        /* cy.readFile(Cypress.config('fileServerFolder') + '/cypress/downloads/oreder-invoice_rahul.csv')
        .then(async(text) => {
            const csv = await neatCSV(text);
            cy.log(orderId);
            const actualPropductCSV = csv[0]["ProductName"];
            expect(productName).to.equal(actualPropductCSV);
        })
        */


        /*script to valiadte results in excel
        cy.get('.order-summary button').contains("Excel").click();
        const filePath = Cypress.config('fileServerFolder') + '/cypress/downloads/oreder-invoice_rahul.xlsx';
        cy.task('excelToJSONConverter',filePath).then(function(result)
        {
            cy.log(result.data[1].A)
            expect(productName).to.equal(result.data[1].B);
        })
         */

        //If the scope of the test is to validate the productName in the CSV file/excel file.
        /*
        cy.readFile(filePath).then(function(text) {
            expect(text).to.include(productName);
        }
        */

    })

})