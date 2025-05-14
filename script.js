"use strict";

function validarCPF (cpf) {
    cpf = cpf.replace(/[^\d]+/g, "");

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) { // Verifica se o temanho do cpf é diferente de 11 dígitos ou se todos os digitos são iguais
        return false;
    }

    let soma = 0;
    let resto;

    // Validação do 1 DV
    for (let i=1; i<=9; i++) {
        soma += parseInt(cpf.substring(i-1, i)) * (11-i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }
}