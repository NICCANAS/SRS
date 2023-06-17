describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    cy.viewport('iphone-se2');//Establecer la resolucion iPhone SE
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

    //Verificar la url
    cy.url().should('include','/Listservs')

    //Verificar el tamaño de la barra lateral
    cy.get('.w-3\\/12').should('have.css','width','40%');

    //Verificar el tamaño del panel de los servicios
    cy.get('.w-9/12').should('have.css','width','60%');
  })
})
