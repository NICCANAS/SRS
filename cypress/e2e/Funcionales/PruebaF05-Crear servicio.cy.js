describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/');
  })
  it('passes', () => {
    //Presionar el boton de inicio de sesion
    cy.get('a[id="button"]').click();
    //Boton del formulario de empresas
    cy.contains('Empresa / Pymes').click();
    
    //Ingresar datos
    //Correo
    cy.get('input[name="email"]').type('PruebaEmpresa@gmail.com');
    //Contraseña
    cy.get('input[name="password"]').type('felipe1');
    //Iniciar sesion
    cy.contains('Ingresar').click();

    //Dentro del menu de la empresa
    cy.contains('Agregar Servicios').click();

    //Ingresar los datos para agregar servicio
    //Nombre
    cy.get('input[id="nombre_serv"]').type('Servicio de Prueba 1');
    //Descripcion
    cy.get('input[id="descrp_serv"]').type('Este es un servicio de prueba');
    //valor
    cy.get('input[id="valor_serv"]').type('{selectall}{backspace}');//borrar el 0 default
    cy.get('input[id="valor_serv"]').type('63000');
    //direccion
    cy.get('input[id="Dirección"]').type('Los Tulipanes 322');
    //dias servicio
    cy.get('input[id="Dia_serv"]').type('Lunes 19 de Junio');
    //foto servicio
    const fileImage = 'cypress/e2e/testImages/testServImage.jpg';
    cy.get('[id="usuprofile_help"]').selectFile(fileImage);
    //tipo servicio
    cy.get('[id="countries"]').select('Ayudantia');
    
    //Crear el servicio
    cy.contains('Crear nuevo servicio').click();
  })
})
