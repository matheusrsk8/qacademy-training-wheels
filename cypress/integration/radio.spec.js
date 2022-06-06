

it('Deve checkar radio', function(){
    cy.visit('/radios');
    cy.get('input[value=thor3]').click().should("be.visible")


})