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

    //Modificar un servicio
    cy.contains('Modificar Servicios').click();
    cy.get('tbody > :nth-child(1) > :nth-child(1)').should('be.visible');
    

    //Recojer los datos del servicio a comparar
    //Nombre del servicio
    cy.get(':nth-child(1) > :nth-child(1) > .flex > .ml-3 > .text-gray-900').invoke('text').as('servName');
    //Valor del servicio
    cy.get(':nth-child(1) > :nth-child(3) > .text-gray-900').invoke('text').as('servValue');

    //Clickear en modificar
    cy.get('[name="idModificarA"]:first').click();

    //Datos para comparar el servicio
    //Nombre
    cy.get('@servName').then((name) => {
      cy.get('input[name="nombre_serv"]').should('have.value', name);
    })
    
    //Valor servicio
    cy.get('@servValue').then((val) => {
      cy.get('input[name="valor_serv"]').should('have.value', val.substring(2));
    })
    

    //cy.get('.max-w-4xl').should('be.visible');
  })
})
