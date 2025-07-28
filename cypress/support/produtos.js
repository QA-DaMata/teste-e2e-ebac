import produtosPage from "../support/page_objects/produtos.page";


Cypress.Commands.add('realizarPedido', (locPorduto) => {
    cy.fixture('produtos').then(res => {
        produtosPage.encontrarProduto(res[locPorduto].nomeProduto)
        produtosPage.addProduto(res[locPorduto].tamanho, res[locPorduto].cor, res[locPorduto].quantidade)
    })
});
