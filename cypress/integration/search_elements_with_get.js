describe('Enocntrar elementos con GET', function(){
    it('Buscar en el buscador', function(){
        cy.visit('http://automationpractice.com/index.php?')
        cy.get('.search_query.form-control.ac_input').type('Hola'); // buscamos por clase
        cy.get('#search_query_top').type(', como te va?'); // Buscamos por id
        cy.get('[name="search_query"]').type(' muy bien'); // Buscamos por otra propiedad 
        cy.get('[placeholder="Search"]').clear();


    })
})