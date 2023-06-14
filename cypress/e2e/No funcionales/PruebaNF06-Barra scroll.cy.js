describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/')
  })
  it('passes', () => {
    //Mover la barra de la pagina hacia la mitad
    cy.scrollTo('center');
    cy.wait(500);//Poder ver que la pagina esta a la mitad
    //Recargar pagina
    cy.reload();
    //Mover la barra de la pagina hacia la mitad
    cy.scrollTo('center');
    cy.wait(500);//Poder ver que la pagina esta a la mitad

    //Clickear una carta
    cy.get('section > .mx-auto > .mt-12 > :nth-child(1)').click();
  })
})