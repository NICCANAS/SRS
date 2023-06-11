describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/')
  })
  it('passes', () => {
    //Presionar el boton de inicio de sesion
    cy.get('button').click()

    //Ingresar datos
    //Correo
    cy.get('input[name="email"]').type('fe.fernandez@duocuc.cl')
    //Contraseña
    cy.get('input[name="password"]').type('felipe1')
    //Iniciar sesion
    cy.contains('Ingresar').click()

    //Modificar el perfil
    cy.contains('Mi Perfil').click()
    //Datos del perfil nuevo
    //Nombre
    cy.get('input[id="username"]').type('Miguel')
    //Correo
    cy.get('input[id="emailAddress"]').type('tna566@gmail.com')
    //Contraseña
    cy.get('input[id="password"]').type('miguel1')
    cy.get('input[id="passwordConfirmation"]').type('miguel1')

    //Guardar los cambios
    cy.contains('Guardar').click()
  })
})
