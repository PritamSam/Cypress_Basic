

define('Fifth Test Suite',function(){
    it("Automating Web Elements 3",function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //handling dynamic data from  table 
        //Note :text() is a jquery function and hence promise needs to be resolved with .then()
        cy.get('tr td:nth-child(2)').each(($e, index, $list)=>{
           const text1= $e.text()
           if(text1.includes('Python'))
           {
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
            {
                const pricetext=price.text()
                expect(pricetext).to.equal('25')
            })
           }
        })
    })
})