/// <reference types= 'cypress' />
describe('Prueba de checkbox', function() {
    it('Caso A', function() {
        cy.visit('https://getbootstrap.com/docs/4.0/examples/checkout/');
        cy.get('input[id="firstName"]').should('be.visible').should('be.enabled').clear().type('David Fernando');

        cy.get('input[id="lastName"]').should('be.visible').should('be.enabled').clear().type('Rincón Cadena');

        cy.get('input[id="username"]').should('be.visible').should('be.enabled').clear().type('davidrincon@gmail.com');

        cy.get('input[id="address"]').should('be.visible').should('be.enabled').clear().type('Cll 107 # 43 22');

        cy.get('#country').should('be.visible').should('be.enabled').select('United States');
        cy.wait(5000);

        cy.get('#state').should('be.visible').should('be.enabled').select('California');
        cy.wait(5000);

        cy.get('input[id="zip"]').should('be.visible').should('be.enabled').clear().type('110222');
        
        cy.get(':nth-child(8) > .custom-control-label').click();
        cy.get(':nth-child(9) > .custom-control-label').click();
        
        cy.get(':nth-child(2) > .custom-control-label').click();

        cy.get('input[id="cc-name"]').should('be.visible').should('be.enabled').clear().type('DAVID RINCON CADENA');

        cy.get('input[id="cc-number"]').should('be.visible').should('be.enabled').clear().type('256936548854');
        
        cy.get('input[id="cc-expiration"]').should('be.visible').should('be.enabled').clear().type('05/26');

        cy.get('input[id="cc-cvv"]').should('be.visible').should('be.enabled').clear().type('354');

        
        cy.get('.btn.btn-primary.btn-lg.btn-block').should('be.enabled').should('be.visible').click()


    })

})