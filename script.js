const nomeInput = document.getElementById('nome-input');
const adicionarBtn = document.getElementById('adicionar-btn');
const listaNomes = document.getElementById('lista-nomes');
const sortearBtn = document.getElementById('sortear-btn');
const nomeSorteado = document.getElementById('nome-sorteado');

// Array para armazenar os nomes
let nomes = [];

// Função para adicionar um nome
function adicionarNome() {
    const nome = nomeInput.value.trim(); // Remove espaços extras
    if (nome) { 
        nomes.push(nome); 
        renderizarNomes(); 
        nomeInput.value = ''; 
        nomeInput.focus();
    } else {
        alert('Digite um nome antes de adicionar!');
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
        nomeSorteado.textContent = 'Nenhum nome para sortear!';
    }
}

// Eventos dos botões
adicionarBtn.addEventListener('click', adicionarNome);
sortearBtn.addEventListener('click', sortearNome);        nomeSorteado.textContent = 'Adicione nomes para sortear!';
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
