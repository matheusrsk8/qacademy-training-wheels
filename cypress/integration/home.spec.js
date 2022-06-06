

it('Deve acessar a pagina inicia', function(){
    cy.visit('https://training-wheels-qaninja.herokuapp.com');
    cy.title().should('eq', 'Training Wheels | QAninja');
    cy.get('ul[class=menu-list]').should('be.visible');
})