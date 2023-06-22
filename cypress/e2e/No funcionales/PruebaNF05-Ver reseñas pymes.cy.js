describe('e2e-pruebaFuncional01', () => {
  beforeEach(() => {
    //Iniciar la pagina
    cy.visit('http://127.0.0.1:8000/')
  })
  it('passes', () => {
    //Redirigir la pagina hacia la mitad
    cy.scrollTo('center');
    
    //Comprobar que todas las reseñas de pymes sean visibles
    cy.get('.-mx-3 > :nth-child(1) > :nth-child(1)').should('be.visible');
    cy.get('.-mx-3 > :nth-child(2) > :nth-child(1)').should('be.visible');
    cy.get('.-mx-3 > :nth-child(3) > :nth-child(1)').should('be.visible');
    cy.get('.-mx-3 > :nth-child(1) > :nth-child(2)').should('be.visible');
    cy.get('.-mx-3 > :nth-child(2) > :nth-child(2)').should('be.visible');
    cy.get('.-mx-3 > :nth-child(3) > :nth-child(2)').should('be.visible');
  })
})
