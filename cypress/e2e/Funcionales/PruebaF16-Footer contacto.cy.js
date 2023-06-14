describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/');
  })
  it('passes', () => {
    //Redirigir la pagina hacia abajo
    cy.scrollTo('bottom');

    //Apretar el boton de contacto
    cy.contains('Comunicate con nosotros').click();
    
  })
})
