describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/')
  })
  it('passes', () => {
    //Presionar el boton de inicio de sesion
    cy.get('button').click()
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
    cy.contains('Modificar Servicios').click()
    //Modificar un servicio
    cy.contains('Modificar').click()

    //Datos para modificar el servicio
    //Nombre
    cy.get('input[id="nombre_serv"]').type('Prueba Modificación 1')
    //Descripcion
    cy.get('input[id="descrp_serv"]').type('Esta es una prueba de modificación')
    //Valor servicio
    cy.get('input[id="valor_serv"]').type('34000')
    //Direccion
    cy.get('input[id="Dirección"]').type('Los Geranios 106')
    //Dias disponibles
    cy.get('input[id="Dia_serv"]').type('Viernes 21 de Julio')

    //Guardar los cambios
    cy.contains('Guardar nuevos cambios').click()
  })
})
