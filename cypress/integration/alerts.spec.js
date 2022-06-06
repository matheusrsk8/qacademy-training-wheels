
before(function(){
    cy.visit('/javascript_alerts');
})


it('Deve lidar com alerts popup', function(){


    cy.contains('button', 'Alerta').click();

    cy.on('window:alert', function(result){
        expect(result).to.eql('Isto é uma mensagem de alerta')
    })


})

it('Deve confirmar a solicitacao popup', function(){

    cy.contains('button', 'Confirma').click();

    cy.on('window:confirm',() => true);
    cy.get('#result').should('have.text', 'Mensagem confirmada');

})

it('Deve cancelar a solicitacao popup', function(){

    cy.contains('button', 'Confirma').click();

    cy.on('window:confirm', () => false);
    cy.get('#result').should('have.text', 'Mensagem não confirmada');

})

it('Deve exibir mensagem de boas vindas com meu texto (prompt, stubs)', function(){

    cy.window().then(function($win){
        cy.stub($win, 'prompt').returns('Lorem Ipsum');
        cy.contains('button', 'Prompt').click();
    })

    cy.get('#result').should('have.text', 'Olá, Lorem Ipsum');

})