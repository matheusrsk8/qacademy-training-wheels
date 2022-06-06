# qacademy-training-wheels
Projeto de estudo para praticar eventos no cypress como drag-drop, 
mouse-over e etc e também trabalhar com alguns elementos (ex.: iframe, datapicker, radio, select e etc...)

> O Cypress não tem um comando nativo para trabalhar com o mouse over, pra isso instalamos um plugin e importamos em "support/index.js"

Trabalhei com stubs, 'forjando' o prompt do navegador:

```javascript
cy.window().then(function($win){
        cy.stub($win, 'prompt').returns('Lorem Ipsum');
        cy.contains('button', 'Prompt').click();
    })
```

* [TRADE-OFFS - Documentação Cypress](https://docs.cypress.io/guides/references/trade-offs)

* [Workarounds - hover (gambiarra rs) - Documentação Cypress](https://docs.cypress.io/api/commands/hover#Workarounds)



