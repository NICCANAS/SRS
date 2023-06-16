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


    //Clickear ese servicio
    cy.contains('Ver').click();
    //Verificar la url
    cy.url().should('include','/CasiMoney');
    cy.wait(500);
    //Verificar el titulo
    cy.get('.text-xl').should('have.text','Venta de Chorizos XL');
    //Verificar la descripcion
    cy.get('.italic').should('have.text','Venta de chorizos al por mayor para distintos tipos de negocios o empresas.');   
  })
})
