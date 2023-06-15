describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/')
  })
  it('passes', () => {
    //Presionar el boton de inicio de sesion
    cy.get('button').click();
    //Presionar el boton de registrarse
    cy.contains('Registrarse').click();

    //Dentro de registrarse, rellenar los datos del formulario
    //Rut
    cy.get('input[name="floating_rut"]').type('216783219');
    //Correo
    cy.get('input[name="floating_email"]').type('nxt322@gmail.com');
    //Contraseña
    cy.get('input[name="floating_password"]').type('jose1');
    //repetir contraseña
    cy.get('input[name="repeat_password"]').type('jose1');
    //Nombre
    cy.get('input[name="floating_first_name"]').type('Jose');
    //Apellido
    cy.get('input[name="floating_last_name"]').type('Cabrera');
    //CElular
    cy.get('input[name="floating_phone"]').type('986324342');
    //Combobox
    cy.get('[id="countries"]').select('Iquique');
    //Insertar imagen
    const fileImage = 'cypress/e2e/testImages/testUserImage.png';
    cy.get('[id="user_avatar"]').selectFile(fileImage);

    //Registrarse
    cy.contains('Registrarse').click();
  })
})