describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/')
  })
  it('passes', () => {
    //Presionar el boton de inicio de sesion
    cy.get('a[id="button"]').click();
    //Boton del formulario de empresas
    cy.contains('Empresa / Pymes').click()
    
    //Ingresar datos
    //Correo
    cy.get('input[name="email"]').type('PruebaEmpresa@gmail.com')
    //Contraseña
    cy.get('input[name="password"]').type('felipe1')
    //Iniciar sesion
    cy.contains('Ingresar').click()

    //Dentro del menu de la empresa
    cy.contains('Mi Empresa').click()
    
    //Datos para modificar la empresa
    //Direccion
    cy.get('input[id="username"]').type('Av brasil 897')
    //Tipo de empresa
    cy.get('[id="Empresa"]').select('Pyme')
    //Comuna
    //cy.get('[id="countries"]').select('Punta Arenas')
    
    //Guardar los cambios
    cy.contains('Guardar nuevos cambios').click()
  })
})
