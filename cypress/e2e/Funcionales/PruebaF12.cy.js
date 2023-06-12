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

    //Entrar en un servicio
    cy.contains('Ver').click();
    //Elegir fecha del servicio
    cy.get('input[id=":r1:"]').click();
    cy.get('div[id=":r3:-grid-label"]').click();
    cy.contains('2023').click();
    //cy.get(`[aria-label="August 12, 2020"]`).click()
    cy.get('[aria-label="Próximo mes"]').click();

    cy.get('[data-timestamp="1690084800000"]').click();
    
    //cy.contains('23').click();
    cy.contains('OK').click();

    //Aceptar terminos y condiciones
    cy.get('input[id="joemama"]').click();
    //Esperar el token de webpay
    //cy.wait(2000);
    //Ir a pagar
    cy.contains('Ir a pagar').click();

    //Seleccionar tarjeta de credito
    cy.get('button[id="credito"]').click();
    //Numero de la tarjeta
    cy.get('input[id="card-number"]').type('4051885600446623');
    //Fecha de expiracion
    cy.get('input[name="fechaExpiracion"]').type('1231');
    //ccv
    cy.get('input[name="cvv"]').type('123');

    cy.contains('Continuar').click();
    cy.contains('Pagar').click();
    
    //rut cliente
    cy.get('input[name="rutClient"]').type('111111111');
    //Contraseña
    cy.get('input[name="passwordClient"]').type('123');
    //continuar
    cy.contains('Aceptar').click();
    cy.contains('Continuar').click();
  })
})
