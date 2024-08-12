let botaoSubmeter = document.getElementById("botão-submeter");

botaoSubmeter.addEventListener("click", submeter);

function submeter() {
    let elementoNome = document.getElementById("nome").value;
    let elementoIdade = document.getElementById("idade").value;
    let elementoEmail = document.getElementById("email").value;

    console.log(elementoNome);
    console.log(elementoIdade);
    console.log(elementoEmail);

    if (validarEmail(elementoEmail)) {
        alert("Email válido!");
    } else {
        alert("Email inválido!");
    }
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
