const nomeInput = document.getElementById('nome-input');
const adicionarBtn = document.getElementById('adicionar-btn');
const listaNomes = document.getElementById('lista-nomes');
const sortearBtn = document.getElementById('sortear-btn');
const nomeSorteado = document.getElementById('nome-sorteado');

// Array para armazenar os nomes
let nomes = [];

// Função para adicionar um nome
function adicionarNome() {
    const nome = nomeInput.value.trim(); // Pega o valor do input e remove espaços extras
    if (nome) { // Verifica se o nome não está vazio
        nomes.push(nome); // Adiciona o nome ao array
        renderizarNomes(); // Atualiza a lista na tela
        nomeInput.value = ''; // Limpa o input
    }
}

// Função para renderizar os nomes na lista
function renderizarNomes() {
    listaNomes.innerHTML = ''; // Limpa o conteúdo atual da lista
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
        nomeSorteado.textContent = 'Adicione nomes para sortear!';
    }
}

// Adiciona os event listeners aos botões
adicionarBtn.addEventListener('click', adicionarNome);
sortearBtn.addEventListener('click', sortearNome);

// Opcional: Adiciona nome ao pressionar Enter no input
nomeInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarNome();
    }
});
