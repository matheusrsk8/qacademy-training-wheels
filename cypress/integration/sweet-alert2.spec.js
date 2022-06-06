
before(function(){
    cy.visit('/sweet_alert');
})

it('Deve exibir mensagem de sucesso do modal SweetAlert', function(){

    
    cy.contains('button', 'Sucesso').click();
    cy.get('.swal-text')
        .should('have.text', 'Você clicou no botão verde.');
    cy.get('button[class$=confirm]').click();

})

it('Deve exibir mensagem de ERRO/deu ruim do modal SweetAlert', function(){
    
    cy.contains('button', 'Deu Ruim').click();
    cy.get('.swal-text')
        .should('have.text', 'Você clicou no botão vermelho.');

})

