var faker = require('faker')
var cpf = require('gerador-validador-cpf')
// 82274606072 - CPF Ficticio

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        
        

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            wpp: '11935219866',
            address: {
                postalcode: '09230140',
                street: 'Rua Milão',
                number: '233',
                details: 'Casa',
                district: 'Utinga',
                city_state: 'Santo André/SP'
            },
            delivery_method: 'Moto',
            cnh: 'images/cnh_gratuita.jpg'
        }

        return data
    }
}