import { Given, Then } from "cypress-cucumber-preprocessor/steps";

import signupFactory from '../../factories/SignupFactory'
import SignupPage from "../../pages/SignupPage";

const signupPage = new SignupPage
var deliver = signupFactory.deliver()


Given(/^que eu estou na tela principal$/, () => {
    signupPage.go()
});


When(/^acesso a tela de Cadastro$/, () => {
    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
});


When(/^preencho o formulario$/, () => {
    signupPage.fillForm(deliver)

});


When(/^submeto o cadastro$/, () => {
    signupPage.submit()
});


Then(/^eu vejo a mensagem de cadastro concluido com sucesso$/, function () {
    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signupPage.modalContentShouldBe(expectedMessage)
});


When(/^preencho o formulario com CPF inválido$/, () => {
    deliver.cpf = 'X227460607A'
    signupPage.fillForm(deliver)
});


Then(/^eu vejo a mensagem "([^"]*)" no campo de CPF$/, (alert_cpf) => {
    signupPage.alertMessageShouldBe(alert_cpf)

});


When(/^preencho o formulario com Email inválido$/, () => {
	deliver.email = 'teste#teste.com'
    signupPage.fillForm(deliver)
});


Then(/^eu vejo a mensagem "([^"]*)" no campo de email$/, (alert_email) => {
	signupPage.alertMessageShouldBe(alert_email)
});


When(/^não preencho o formulario$/, () => {
	return true;
});


Then(/^eu vejo mensagens informando os campos que são obrigatórios$/, () => {
	const messages = [
        { field: 'name', output: 'É necessário informar o nome' },
        { field: 'cpf', output: 'É necessário informar o CPF' },
        { field: 'email', output: 'É necessário informar o email' },
        { field: 'postalcode', output: 'É necessário informar o CEP' },
        { field: 'number', output: 'É necessário informar o número do endereço' },
        { field: 'delivery_method', output: 'Selecione o método de entrega' },
        { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
    ]

    messages.forEach(function (msg) {
        it(`${msg.field} is required`, function () {
            signup.alertMessageShouldBe(msg.output)
        });
    })
});

