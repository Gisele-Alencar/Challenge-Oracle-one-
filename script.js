const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 1;

function verificarChute() {
  const chute = Number(document.getElementById("inputNumero").value);
  const mensagem = document.getElementById("mensagem");

  if (chute < 1 || chute > 10) {
    mensagem.textContent = "Digite um número entre 1 e 10!";
    mensagem.style.color = "red";
    return;
  }

  if (chute === numeroSecreto) {
    mensagem.textContent = `Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativa(s).`;
    mensagem.style.color = "green";
  } else {
    mensagem.textContent = chute < numeroSecreto ? "Tente um número maior!" : "Tente um número menor!";
    tentativas++;
    mensagem.style.color = "hotpink";
  }
}
