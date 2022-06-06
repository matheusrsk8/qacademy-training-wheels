
before(function(){
    cy.visit('/tables');
})


it('Deve contar a quantidade de séries', function(){

    cy.get('table tbody tr')
        .then(function(series){
            expect(series).to.have.length(7);
        })

})

it('Deve valdiar os items da série supernatural', function(){

    cy.contains('table tbody tr', 'Supernatural')
        .then(function(item){
            expect(item).to.contain('Warner Bros')
            expect(item).to.contain('PrimeVideo')
            expect(item).to.contain('2005')
            
        })

})

it('Deve excluir a série Round6', function(){

    cy.contains('table tbody tr', 'Round 6')
        .then(function(item){
            // item.find('.delete').click();    
            item.find('.delete').trigger('click');    
        }).should('not.exist')

        cy.get('table tbody tr')
        .then(function(series){
            expect(series).to.have.length(6);
        })

})