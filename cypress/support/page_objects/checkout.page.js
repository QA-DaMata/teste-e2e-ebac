class checkoutPage {
        realizaCheckout(nome, sobrenome, nomeEmpresa, endereco, cidade, cep, telefone, email){
        cy.visit('checkout/')
        cy.get('[name="billing_first_name"]').type(nome)
        cy.get('[name="billing_last_name"]').type(sobrenome)
        cy.get('[name="billing_company"]').type(nomeEmpresa)
        cy.get('[name="billing_address_1"]').type(endereco)
        cy.get('[name="billing_city"]').type(cidade)
        cy.get('[name="billing_postcode"]').type(cep)
        cy.get('[name="billing_phone"]').type(telefone)
        cy.get('[name="billing_email"]').type(email)
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.wait(5000)

    }
}

export default new checkoutPage()