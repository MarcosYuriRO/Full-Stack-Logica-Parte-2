let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
};

function exibirMensagemInicial() {
exibirTextoNaTela("h1", "Jogo do Número Secreto");
exibirTextoNaTela("p", "Escolha um número de 1 a 10");
};

function verificarChute() {
  let chute = document.querySelector("input").value;
  
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Parabéns!!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você acertou o Número Secreto com ${tentativas} ${palavraTentativa}.`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
      if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O Número é menor.");
      } else {
        exibirTextoNaTela ("p", "O Número é maior.");
      }
      tentativas++;
      limparCampo();
  }
};

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
};

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = " ";
};

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}