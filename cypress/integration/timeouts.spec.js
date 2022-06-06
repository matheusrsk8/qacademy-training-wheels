

it('exemplo de timeout', function() {

    cy.visit('/timeout');
    cy.contains('button', 'Habilita').click();

    /*
    O cy.wait(7000) não é uma boa opçao, pois hoje o sistema está demorando 7sec 
    mas amanhã pode n estar, por isso uso {timeout: 7000} dentro da funcao
    que estou usando para mudar da espera default de 4sec para 7sec, dessa forma irá eseprar ATÉ 7sec
    e não POR 7sec
    */

    // cy.wait(7000);

    cy.get('#firstname')
        .type('Lorem Ipsum', {timeout: 7000})

})