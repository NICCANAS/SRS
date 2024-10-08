describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
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

    //Ir a modificar el perfil
    cy.contains('Mi Perfil').click();
    //Comprobar que el input del nombre tenga el nombre y correo bien
    cy.get('#username').should('have.value','Felipe');
    cy.get('#emailAddress').should('have.value','fe.fernandez@duocuc.cl');
  })
})
