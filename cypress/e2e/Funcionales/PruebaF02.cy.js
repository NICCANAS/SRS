describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/')
  })
  it('passes', () => {
    //Presionar el boton de inicio de sesion
    cy.get('button').click()
    //Presionar el boton de registrarse
    cy.contains('Registrarse').click()
    //Boton del formulario de empresas
    cy.contains('Empresa / Pymes').click()

    //Dentro de registrarse, rellenar los datos del formulario
    //Rut
    cy.get('input[name="floating_rut"]').type('197672108')
    //Tipo empresa
    cy.get('[id=Empresa]').select('Empresa')
    //Correo
    cy.get('input[name="floating_email"]').type('pruebaempresa1@gmail.com')
    //Contraseña
    cy.get('input[name="floating_password"]').type('empresa1')
    //repetir contraseña
    cy.get('input[name="repeat_password"]').type('empresa1')
    //Nombre
    cy.get('input[name="floating_first_name"]').type('Empresa Prueba')
    //Direccion
    cy.get('input[name="floating_last_name"]').type('Condell 345')
    //CElular
    cy.get('input[name="floating_phone"]').type('986324342')
    //Combobox
    cy.get('[id="countries"]').select('Maipu')
    //Insertar imagen
    const fileImage = 'cypress/e2e/testImages/testUserImage.png';
    cy.get('[id="user_avatar"]').selectFile(fileImage)

    //Registrarse
    cy.contains('Registrarse').click()
  })
})
