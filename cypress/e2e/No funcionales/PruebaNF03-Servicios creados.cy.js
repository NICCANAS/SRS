describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/');
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

    //Apretar en agregar servicio
    cy.contains('Agregar Servicios').click();
    cy.get('.max-w-4xl').should('be.visible');//Comprobar que exista el componente
    //Volver al apartado inicio
    cy.contains('Inicio').click();
    //Verificar que exista una carta de servicio
    cy.get('.bg-gradient-to-b > :nth-child(1) > .bg-white > .flex').should('be.visible');


  })
})
