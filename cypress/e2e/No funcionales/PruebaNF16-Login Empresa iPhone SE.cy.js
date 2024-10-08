describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    cy.viewport('iphone-se2');//Establecer la resolucion iPhone SE
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/');
  })
  it('passes', () => {
    //Presionar el boton de inicio de sesion
    cy.get('a[id="button"]').click();
    //Boton del formulario de empresas
    cy.contains('Empresa / Pymes').click();

    //Verificar que la url sea la del login de empresas
    cy.url().should('include','/LoginEmp');
    
  })
})
