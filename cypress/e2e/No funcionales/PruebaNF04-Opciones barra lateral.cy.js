describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/')
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
    cy.url().should('include','/Listservs');

    //Seguimiento servicios
    cy.contains('Seguimiento servicios').click();
    cy.get('tbody > :nth-child(1) > :nth-child(1)').should('be.visible');
    cy.contains('Crear reseña').click();
    cy.get('.max-w-4xl').should('be.visible');
    cy.contains('Mi Perfil').click();
    cy.get('.max-w-4xl').should('be.visible');
    
    cy.contains('Inicio').click();
    cy.get(':nth-child(1) > .bg-white > .hidden > .aspect-square').should('be.visible');
    //Cerrar sesion
    cy.contains('Cerrar sesión').click();
    cy.url().should('include','Login');
    
    
    

  })
})
