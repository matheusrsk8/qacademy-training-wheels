
before(function(){
    cy.visit('/new_tab');
})


it('Deve contar a quantidade de séries', function(){

    cy.contains('a', 'Clique aqui').invoke('removeAttr', 'target');
    cy.contains('a', 'Clique aqui').click();

    cy.get('input[name=q]').type('Paçoca{enter}')
    

})