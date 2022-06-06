
const iframeBom = function () {
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap);
}

const iframeRuim = function () {
    return cy
        .get('iframe[src*=instagram]')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap);
}

it('deve validar o nome da página pelo id (BOM)', function(){
    cy.visit('/nice_iframe');

    iframeBom()
        .contains('.UsernameText', 'qacademy_oficial')
        .should('be.visible');


})

it('deve validar o nome da página sem o id (RUIM)', function(){
    cy.visit('/bad_iframe');

    iframeRuim()
        .contains('.UsernameText', 'qacademy_oficial')
        .should('be.visible');


})