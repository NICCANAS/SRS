describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/')
  })
  it('passes', () => {
    //Redirigir la pagina hacia abajo
    cy.scrollTo('bottom');

    cy.contains('Facebook').click();
    cy.visit('http://127.0.0.1:8000/');

    cy.contains('Instagram').click();
    cy.visit('http://127.0.0.1:8000/');
    

    //Presionar el boton de inicio de sesion
    cy.get('button').click();
    //Presionar para volver
    cy.get('button').click();
  })
})