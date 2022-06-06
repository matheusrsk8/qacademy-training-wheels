

it('Deve selecionar uma única opção', function() {
    cy.visit('/apps/select2/index.html');

    cy.get('span[class$=--single]').click();
    cy.contains('.select2-results__option', 'Cypress').click();

})

it.only('Deve selecionar uma única opção', function() {
    cy.visit('/apps/select2/index.html');

    const frameworks = [
        'Cypress',
        'Robot Framework',
        'WebdriverIO',
    ]

    frameworks.forEach(function(f){
        cy.get('span[class$=--multiple]').click();
        cy.contains('.select2-results__option', f).click();
    })
       
    
    

})