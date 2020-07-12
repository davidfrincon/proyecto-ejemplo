describe('Pruebas de agregar al carrito', function() {
    before('ir al sitio de la tienda', function() {
    })
/*     it('ir página de Globa Nutrition, agregar varios productos al carrito', function() {
        // agrego los productos
        let i;
        for (i = 0; i < 3; i++) {
            cy.visit('https://globalnutrition.com.co/categoria-producto/nutricion-deportiva/creatinas/');
            cy.get('.attachment-woocommerce_thumbnail.size-woocommerce_thumbnail').eq(i).click();
            cy.get('.single_add_to_cart_button.button.alt[name="add-to-cart"]').click();
        } 

        // ir al carito de compras 
        cy.get('.footer-cart-contents').click();        

    }) */
    it('ir al carrito a pagar', function() {

    });
    it('Comprobar el precio de un producto en el carrito con el de lista', function() {
        cy.visit('https://globalnutrition.com.co/');
        cy.get('.card-media-left[title="Kit Max Tone Cla + Vaso Shaker"]').click();
        cy.get('.quantity').type(1);
        cy.get('.single_add_to_cart_button.button.alt').click();
        cy.wait(5000);
        cy.get('.woocommerce-notices-wrapper > :nth-child(2) > .button').click();
        cy.get('.woocommerce-Price-amount.amount').contains('106,825');

       
    })



/*     it('Navegar por la página de alkosto', function() {
        cy.visit('https://www.farmatodo.com.co/');
        // cy.get('.container-image').eq(5).click(); 
        cy.get(':nth-child(5) > .link > .figure > .container-image > .lozad').click();
        cy.get('.app-button.main.xlg.btn[id="-add-product-button-1055971"]').click();
        cy.get('#-add-product-button-107861783 > .title').click();
        cy.get('.app-button.main.xlg.btn[id="-add-product-button-1010491"]').click();
        cy.get('.cont-cart-navbar').click();
        // cy.get('circle-cart.ng-star-inserted[_ngcontent-ng-ftd-c78]').to.be.greaterThan(1);
        cy.get('.circle-cart > p').contains('2');
        
    }); */
})


