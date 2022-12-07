$(document).ready(function () {
    $("#myformOne").validate({
        rules: {
            Nome: {
                required: true,
                minlength: 4,
                maxlength: 30,
                pattern: "^[a-zA-Z'.\\s]{1,30}$"
            },
            Email: {
                required: true,
                maxlength: 50,
                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            },
            Idade: {
                required: true,
                min: 18,
                max: 80
            },
            CPF: {
                required: true,
                minlength: 14,
            },
            CNPJ: {
                required: true,
                minlength: 14,
            },
            CartaoCredito: {
                required: true,
                minlength:16
            },
            Date: {
                required: true,
            }

                

        },
        messages: {
            Nome: "Por favor preencha o nome.",
            Email: "Seunome@dominio.com",
            Idade: "Digite uma idade válida entre 18 e 80 anos",
            CPF: "Digite um CPF Válido",
            CNPJ: "Digite um CNPJ Válido",
            CartaoCredito: "Digite um Cartao Válido"

        }




    });

    jQuery.validator.addMethod("validDate", function (value, element) {
        return this.optional(element) || moment(value, "DD/MM/YYYY").isValid();
    }, "Please enter a valid date in the format DD/MM/YYYY");
})

