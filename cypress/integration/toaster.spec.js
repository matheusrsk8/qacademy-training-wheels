

before(function(){
    cy.visit('/toaster');
})


it('Deve lidar com alerts popup', function(){

    cy.contains('button', 'Toast Rápido').click();
    cy.get('div[class^=notification]')
        .should('have.text', 'Essa notificação é muito rápida!')
    
    /*
    Técnica para pegar o corpo do HTML e inspecionar um toast rápido com Cypress
    cy.get('body')
    cy.wait(2000)
    */

})