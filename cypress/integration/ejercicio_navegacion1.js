describe('Navegar hasta la página y seleccionar', function() {
    before('Esto se carga antes de las pruebas', function() {
        cy.log('Acá comienzan las pruebas');
               
    })
    beforeEach('Cargo la página', function() {
        cy.visit('http://automationpractice.com/index.php');
        
    })
    it('Agrego los pasos del caso de pruebas', function() {
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click();
        cy.get('.block_content > .tree > .last > a').click();
        cy.get('#layered_id_attribute_group_3').check();
        cy.get('#layered_id_feature_11').check();
        cy.get('#layered_id_feature_20').check();  
    })
    it('Usando el select del dropdown', function() {
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click();
        cy.get('#selectProductSort').select('Product Name: A to Z');
		
    })

})