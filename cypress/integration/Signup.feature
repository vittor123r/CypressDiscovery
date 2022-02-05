Feature: Cadastrar Usuario Entregador

  I como Usuario
  Quero me cadastrar
  Para poder trabalhar como entregador
  
  
  Scenario: Cadastrar entregador com sucesso
    Given que eu estou na tela principal
    And acesso a tela de Cadastro
    When preencho o formulario
    And submeto o cadastro
    Then eu vejo a mensagem de cadastro concluido com sucesso

    
    Scenario: CPF inválido
    Given que eu estou na tela principal
    And acesso a tela de Cadastro
    When preencho o formulario com CPF inválido
    And submeto o cadastro
    Then eu vejo a mensagem "Oops! CPF inválido" no campo de CPF

    
    Scenario: Email inválido
    Given que eu estou na tela principal
    And acesso a tela de Cadastro
    When preencho o formulario com Email inválido
    And submeto o cadastro
    Then eu vejo a mensagem "Oops! Email com formato inválido." no campo de email

    @focus
    Scenario: Campos Obrigatórios
    Given que eu estou na tela principal
    And acesso a tela de Cadastro
    When não preencho o formulario
    And submeto o cadastro
    Then eu vejo mensagens informando os campos que são obrigatórios