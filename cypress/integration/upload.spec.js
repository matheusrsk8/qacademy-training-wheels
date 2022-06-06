

it('deve subir uma imagem', function() {

    cy.visit('/upload')

    const imageFile = 'cypress/fixtures/images/mat.jpg';

    cy.get('input[name=file]').selectFile(imageFile, {force: true})

    cy.get('input[value=Upload]').click();

    cy.get('img[src="/uploads/mat.jpg"]', {timeout: 7000})
        .should('be.visible')

})