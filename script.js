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
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    // Validação do 2 DV
    soma = 0;

    for (let i=1; i<=10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 | resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

document.querySelector("#cpfForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const cpfInput = document.querySelector("#cpf").value;
    const containerMessage = document.querySelector("#message");

    if (validarCPF(cpfInput)) {
        containerMessage.textContent = `CPF Válido!`;
        containerMessage.className = 'message success';
    } else {
        containerMessage.textContent = `CPF Inválido!`;
        containerMessage.className = 'message error ';
    }
});