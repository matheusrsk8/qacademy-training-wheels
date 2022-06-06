

it('Deve checkar checkbox', function(){
    cy.visit('/checkboxes');

    cy.get('input[type=checkbox]').check().should('be.checked'); //marca todos os checkboxes +info em https://docs.cypress.io/api/commands/check#Options
    cy.get('input[type=checkbox]').uncheck(); //desmarca todos os checkboxes

    // IMPLEMENTACAO COM FOREACH QUE EXECUTA UMA LISTA
     const movies = [
         'cap2',
         'thor3',
         'guardians'
     ]
     movies.forEach(function(m){
        cy.get(`input[name=${m}]`).click().should('be.checked');
     })
})