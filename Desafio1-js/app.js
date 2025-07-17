//Desafio Tópico 1 Desafio 2
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

//Desafio 3
function verificarConsole() {
    console.log("O botão foi clicado");
}

//Desafio 4
function verificarAlert() {
    console.log("Eu amo JS");
}

//Desafio 5
let cidadeBrasil;
function verificarPrompt() {
    cidadeBrasil = prompt("Diga uma cidade do Brasil");
    alert(`Estive em ${cidadeBrasil} e lembrei de você!`);
}

//Desafio 6
function verificarSoma() {
    let numero1 = parseInt(prompt("Informe um número Inteiro:"));
    let numero2 = parseInt(prompt("Informe outro número Inteiro"));
    let resultado = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${resultado}`);
}