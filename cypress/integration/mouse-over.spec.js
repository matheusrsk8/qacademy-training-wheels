

it('deve exibir o nome da tecnologia ao passar o mouse', function(){
    cy.visit('/hovers');
 
    const techs = [
        {img: 'img[src*=python]', tag: '.tag-python', brand: 'Python'},
        {img: 'img[src*=golang]', tag: '.tag-golang', brand: 'Golang'},
        {img: 'img[src*=nodejs]', tag: '.tag-nodejs', brand: 'Node.js'},
        {img: 'img[src*=netcore]', tag: '.tag-netcore', brand: '.NETCore'},  
    ]

    techs.forEach(function(t){
    cy.wait(50)
    cy.get(t.img)
        .realHover('mouse')

    cy.get(t.tag)
        .should('be.visible')
        .should('have.text', t.brand)
    })
})