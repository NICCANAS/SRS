describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/')
  })
  it('passes', () => {
    //Redirigir la pagina hacia abajo
    cy.scrollTo('bottom');

    //Presionar los botones y redirigir hacia esa pagina
    cy.contains('Facebook').click();
    cy.wait(500);//Para poder ver que si se cambio a la pagina
    cy.go('back');

    cy.contains('Instagram').click();
    cy.wait(500);//Para poder ver que si se cambio a la pagina
    cy.go('back');

    cy.contains('Twitter').click();
    cy.wait(500);//Para poder ver que si se cambio a la pagina
    cy.go('back');

    cy.contains('GitHub').click();
    cy.wait(500);//Para poder ver que si se cambio a la pagina
    cy.go('back');

    cy.contains('guasa').click();
    cy.wait(500);//Para poder ver que si se cambio a la pagina
    cy.go('back');
    
    cy.contains('Marketing').click();
    cy.wait(500);//Para poder ver que si se cambio a la pagina
    cy.go('back');
    
    cy.contains('Comunicate con nosotros').click();
    cy.wait(500);//Para poder ver que si se cambio a la pagina
    cy.go('back');
    
    cy.contains('Nosotros').click();
    cy.wait(500);//Para poder ver que si se cambio a la pagina
    cy.go('back');
    
    cy.contains('Claim').click();

  })
})