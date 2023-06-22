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
    cy.visit('http://127.0.0.1:8000/');

    cy.contains('Instagram').click();
    cy.url().should('eq', 'https://www.instagram.com/');
    cy.visit('http://127.0.0.1:8000/');

    cy.contains('Twitter').click();
    cy.url().should('eq', 'https://twitter.com/login');
    cy.visit('http://127.0.0.1:8000/');

    cy.contains('GitHub').click();
    cy.url().should('eq', 'https://github.com/');
    cy.visit('http://127.0.0.1:8000/');

    cy.contains('guasa').click();
    cy.url().should('eq', 'https://web.whatsapp.com/');
    cy.visit('http://127.0.0.1:8000/');
    
    cy.contains('Marketing').click();
    cy.url().should('include', '/Marketing');
    cy.visit('http://127.0.0.1:8000/');
    
    cy.contains('Comunicate con nosotros').click();
    cy.url().should('include', '/contacto');
    cy.visit('http://127.0.0.1:8000/');
    
    cy.contains('Nosotros').click();
    cy.url().should('include', '/Nosotros');
    cy.visit('http://127.0.0.1:8000/');
  })
})