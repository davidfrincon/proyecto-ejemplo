describe('Estas son pruebas para sserts', function() {
    it('veamos una igualdad', function() {
        expect(1==1).to.equal(true);
        expect(1==1).to.be.true;
        expect(1==0).to.not.be.true;
    })
    it('veamos que no sea una igualdad', function() {
        expect(1==3).to.not.equal(true);
        expect(1==4).to.equal(false);
    })
    it('vamos a ver que una operación esté bien', function() {
        expect(12-2).to.equal(10);
        expect(5+10).to.equal(15);
        expect(12-2, "Esperaba la resta de 12-2").to.equal(120);

    })
    it('Verificar si la variable existe', function() {
        let a = 3;
        expect(a).to.exist;
    })
    it('Verificar < y > del valor de una variable', function() {
        let c = 800
        expect(24/6).to.be.lessThan(5);
        expect(c).to.be.greaterThan(200);
        expect(c, "Esperaba un número mayor que 900").to.be.greaterThan(900);

    })

})