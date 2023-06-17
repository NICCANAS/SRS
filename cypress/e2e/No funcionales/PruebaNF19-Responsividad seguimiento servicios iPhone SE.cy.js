describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    //cy.viewport('iphone-se2');//Establecer la resolucion iPhone SE
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/');
  })
  it('passes', () => {
    //Presionar el boton de inicio de sesion
    cy.get('a[id="button"]').click();
    
    //Ingresar datos
    //Correo
    cy.get('input[name="email"]').type('fe.fernandez@duocuc.cl');
    //Contraseña
    cy.get('input[name="password"]').type('felipe1');
    //Iniciar sesion
    cy.contains('Ingresar').click();

    //Clickear en seguimiento servicios
    cy.contains('Seguimiento servicios').click();

    //Verificar que los header de la tabla sean visibles
    cy.get('thead > tr > :nth-child(1)').should('be.visible');
    cy.get('thead > tr > :nth-child(2)').should('be.visible');
    cy.get('thead > tr > :nth-child(3)').should('be.visible');
    cy.get('thead > tr > :nth-child(4)').should('be.visible');
  })
})
