const nomeInput = document.getElementById('nome-input');
const adicionarBtn = document.getElementById('adicionar-btn');
const listaNomes = document.getElementById('lista-nomes');
const sortearBtn = document.getElementById('sortear-btn');
const nomeSorteado = document.getElementById('resultado'); // Corrigido para 'resultado'

// Array para armazenar os nomes
let nomes = [];

// Função para adicionar um nome
function adicionarNome() {
  const nome = nomeInput.value.trim();
  if (nome) {
    nomes.push(nome);
    renderizarNomes();
    nomeInput.value = '';
  }
}

// Função para renderizar os nomes na lista
function renderizarNomes() {
  listaNomes.innerHTML = '';
  nomes.forEach(nome => {
    const li = document.createElement('li');
    li.textContent = nome;
    listaNomes.appendChild(li);
  });
}

// Função para sortear um nome
function sortearNome() {
  if (nomes.length > 0) {
    const randomIndex = Math.floor(Math.random() * nomes.length);
    const nomeVencedor = nomes[randomIndex];
    nomeSorteado.textContent = `Nome sorteado: ${nomeVencedor}`;
  } else {
    nomeSorteado.textContent = "Nenhum nome para sortear!";
  }
}

// Adicionando os event listeners aos botões
adicionarBtn.addEventListener('click', adicionarNome);
sortearBtn.addEventListener('click', sortearNome);
