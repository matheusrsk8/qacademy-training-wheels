

it('Selecionar loki por ID', function(){

    cy.visit('/select');
    cy.get('#avengerList').select('Loki').should('have.value', '6')

})

it('Selecionar Bucky sem ser por ID', function(){
    cy.visit('/select');
    cy.contains('option', 'Selecione um personagem')
        .parent()
        .select('Bucky').should('have.value', '2')
})