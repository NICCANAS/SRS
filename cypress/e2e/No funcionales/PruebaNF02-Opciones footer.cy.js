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
    cy.url().should('eq', 'https://es-la.facebook.com/');
    cy.go('back');

    cy.contains('Instagram').click();
    cy.url().should('eq', 'https://www.instagram.com/');
    cy.go('back');

    cy.contains('Twitter').click();
    cy.url().should('eq', 'https://twitter.com/login');
    cy.go('back');

    cy.contains('GitHub').click();
    cy.url().should('eq', 'https://github.com/');
    cy.go('back');

    cy.contains('guasa').click();
    cy.url().should('eq', 'https://web.whatsapp.com/');
    cy.go('back');
    
    cy.contains('Marketing').click();
    cy.url().should('include', '/marketing');
    
    cy.go('back');
    
    cy.contains('Comunicate con nosotros').click();
    cy.url().should('include', '/contacto');
    cy.go('back');
    
    cy.contains('Nosotros').click();
    cy.url().should('include', '/nosotros');
    cy.go('back');
    
    cy.contains('Claim').click();
    cy.url().should('include', '/claim');

  })
})