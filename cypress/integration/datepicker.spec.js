

it('Deve seleionar a data do dia da consciencia negra', function() {
    cy.visit('/datepicker');

    const date = {
        day: '20',
        month: 'nov',
        year: '2003',
    }

    const value =`${date.day}/11/${date.year}`

    

    cy.get('.datetimepicker-dummy-input').click();

    cy.get('.datepicker-nav-month').click();
    cy.contains('.datepicker-month', date.month).click();

    cy.get('.datepicker-nav-year').click();
    cy.contains('.datepicker-year span', date.year).click();

    cy.contains('button[class=date-item]', date.day).click();

    cy.get('input[id=date]').should('have.value', value);

})

it('Deve seleionar a data do ano novo (bug dia 1)', function() {
    cy.visit('/datepicker');

    const date = {
        day: '1',
        month: 'jan',
        year: '1999',
    }

    const value =`${'0'}${date.day}/01/${date.year}`

    cy.get('.datetimepicker-dummy-input').click();

    cy.get('.datepicker-nav-month').click();
    cy.contains('.datepicker-month', date.month).click();

    cy.get('.datepicker-nav-year').click();
    cy.contains('.datepicker-year span', date.year).click();

    cy.contains('button[class=date-item]', new RegExp('^' + date.day + '$', 'g')).click();

    cy.get('input[id=date]').should('have.value', value);

})