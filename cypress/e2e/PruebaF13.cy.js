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

    //Crear una reseña
    cy.contains('Crear reseña').click();
    //Valoracion del servicio
    cy.get('[id="valoracion"]').select('5')
    //Nombre del servicio a reseñar
    cy.get('[id="countries"]').select('Servicio de Prueba 1')
    //Descripcion de la reseña
    cy.get('input[name="descrresenna"]').type('descripcion de prueba');
    
    //Guardar la reseña
    cy.contains('Crear reseña').click();
  })
})
