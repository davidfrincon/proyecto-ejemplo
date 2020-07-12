describe('Unir cadenas', function() {
    before(function() {
        cy.log('Esto se ejecuta antes de empezar las pruebas');
    })
    after(function() {
        cy.log('Esto se ejecuta después de finalizar las pruebas');
    })
    beforeEach(function() {
        cy.log('Esto se ejecuta antes de cada pruebas');
        cy.visit('http://automationpractice.com/index.php?');
    })
    afterEach(function() {
        cy.log('Esto se ejecuta después de cada pruebas');
    })
    it('Bucar la cadena con caso dress', function() {
        cy.get('#search_query_top').clear().type('dress');
    })
    it('Bucar la cadena con caso hay', function() {
        cy.get('#search_query_top').clear().type('hat');
    })
})