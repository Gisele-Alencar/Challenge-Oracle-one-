let nomes = [];

function adicionarNome() {
  const input = document.getElementById("nome");
  const nome = input.value.trim();

  if (nome !== "") {
    nomes.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
  }
}

function atualizarLista() {
  const ul = document.getElementById("lista");
  ul.innerHTML = "";

  nomes.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    ul.appendChild(li);
  });
}

function sortearNome() {
  if (nomes.length === 0) {
    alert("Adicione pelo menos um nome para sortear.");
    return;
  }

  const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
  document.getElementById("resultado").textContent = `Nome sorteado: ${sorteado}`;
}
