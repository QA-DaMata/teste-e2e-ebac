import checkoutPage from "../page_objects/checkout.page";

Cypress.Commands.add('realizarCheckout', (nome, sobrenome, nomeEmpresa, endereco, cidade, cep, telefone, email) => {
    checkoutPage.realizaCheckout(nome, sobrenome, nomeEmpresa, endereco, cidade, cep, telefone, email)
});