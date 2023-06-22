describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/')
  })
  it('passes', () => {
    //Presionar el boton de inicio de sesion
    cy.get('a[id="button"]').click();
    //Boton del formulario de empresas
    cy.contains('Empresa / Pymes').click();
    
    //Ingresar datos
    //Correo
    cy.get('input[name="email"]').type('PruebaEmpresa@gmail.com');
    //Contraseña
    cy.get('input[name="password"]').type('felipe1');
    //Iniciar sesion
    cy.contains('Ingresar').click();
    //Comprobar que exista al menos el primer servicio de la empresa
    cy.get(':nth-child(1) > .bg-white > .hidden > .aspect-square').should('be.visible');
  })
})
