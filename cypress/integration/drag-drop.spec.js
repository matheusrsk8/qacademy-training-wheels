
describe('Drag and Drop', function(){
    
    it('Deve arrastar cypress para a caixa do node', function(){
        cy.visit('/drag_and_drop')
    
        const dataTransfer = new DataTransfer();
         cy.get('img[alt=Cypress]').trigger('dragstart', {dataTransfer});
         cy.get('.nodejs figure[draggable=true]').trigger('drop', {dataTransfer});
    
    
    })
    
    it('Deve arrastar robot para a caixa do python', function(){
    
        const dataTransfer = new DataTransfer();
    
         cy.get('img[alt="Robot Framework"]').trigger('dragstart', {dataTransfer});
         cy.get('.python figure[draggable=true]').trigger('drop', {dataTransfer});
    
    })

})

