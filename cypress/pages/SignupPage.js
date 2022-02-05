class SignupPage {

    go() {
        
        cy.visit('/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

    }

    fillForm(deliver) {
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[placeholder="E-mail"]').type(deliver.email)
        cy.get('input[placeholder="Whatsapp"]').type(deliver.wpp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"][placeholder="Rua"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"][placeholder="Bairro"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"][placeholder="Cidade/UF"]').should('have.value', deliver.address.city_state)
    
        cy.contains('.delivery-method li', deliver.delivery_method).click()

        cy.get('.dropzone input[accept^="image"]').attachFile(deliver.cnh)
    }

    submit() {
        cy.get('form .button-success').click()
    }

    modalContentShouldBe(expectedMessage) {        
        cy.get('#swal2-html-container').should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage) {
        //cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')


    }
}

export default new SignupPage;