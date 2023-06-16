describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/')
  })
  it('passes', () => {
    //Presionar el boton de inicio de sesion
    cy.get('a[id="button"]').click();
    cy.url().should('include', '/Login');//Comprobar que el url sea del login
    //Presionar para volver
    cy.get('.rotate-180').click();
    cy.url().should('eq', 'http://127.0.0.1:8000/');//Comprobar que el url sea del login
  })
})