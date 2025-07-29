import { faker } from '@faker-js/faker';
import produtosArr from "../fixtures/produtos.json"
/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC ✅
        Para fazer um pedido de 4 produtos ✅
        Fazendo a escolha dos produtos ✅
        Adicionando ao carrinho ✅
        Preenchendo todas opções no checkout ✅
        E validando minha compra ao final ✅ */

    let nome = faker.person.firstName()
    let sobrenome = faker.person.lastName()
    let nomeEmpresa = faker.company.name()
    let endereco = faker.location.streetAddress(false)
    let cidade = faker.location.city()
    let cep = "01001000"
    let telefone = "(11)95645-2374"
    let email = faker.internet.email({ firstName: `${nome}`, lastName: `${sobrenome}` })
    const msgPedido = '.woocommerce-message'
    const msgCheckout = '.woocommerce-notice'

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        cy.realizarPedido(0).then(() => {
            cy.get(msgPedido).should('contain', `“${produtosArr[0].nomeProduto}” foi adicionado no seu carrinho.`)
        })
        cy.realizarPedido(1).then(() => {
            cy.get(msgPedido).should('contain', `“${produtosArr[1].nomeProduto}” foi adicionado no seu carrinho.`)
        })
        cy.realizarPedido(2).then(() => {
            cy.get(msgPedido).should('contain', `“${produtosArr[2].nomeProduto}” foi adicionado no seu carrinho.`)
        })
        cy.realizarPedido(3).then(() => {
            cy.get(msgPedido).should('contain', `“${produtosArr[3].nomeProduto}” foi adicionado no seu carrinho.`)
        })
        cy.realizarCheckout(nome, sobrenome, nomeEmpresa, endereco, cidade, cep, telefone, email).then(() => {
            cy.get(msgCheckout).should('contain', 'Obrigado. Seu pedido foi recebido.')
        })
    });
})