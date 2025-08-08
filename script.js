const nomeInput = document.getElementById('nome-input');
const adicionarBtn = document.getElementById('adicionar-btn');
const listaNomes = document.getElementById('lista-nomes');
const sortearBtn = document.getElementById('sortear-btn');
const resultado = document.getElementById('resultado');

let nomes = [];

function adicionarNome() {
    const nome = nomeInput.value.trim();

    if (nome) {
        nomes.push(nome);
        atualizarLista();
        nomeInput.value = '';
    } else {
        alert('Digite um nome antes de adicionar!');
    }
}

function atualizarLista() {
    listaNomes.innerHTML = '';
    nomes.forEach(n => {
        const li = document.createElement('li');
        li.textContent = n;
        listaNomes.appendChild(li);
    });
}

function sortearNome() {
    if (nomes.length === 0) {
        resultado.textContent = 'Nenhum nome para sortear!';
        return;
    }
    const indice = Math.floor(Math.random() * nomes.length);
    resultado.textContent = `Nome sorteado: ${nomes[indice]}`;
}

adicionarBtn.addEventListener('click', adicionarNome);
sortearBtn.addEventListener('click', sortearNome);        const nomeVencedor = nomes[randomIndex];
        resultado.textContent = `Nome sorteado: ${nomeVencedor}`;
    } else {
        resultado.textContent = 'Nenhum nome para sortear!';
    }
}

// Eventos dos botões
adicionarBtn.addEventListener('click', adicionarNome);
sortearBtn.addEventListener('click', sortearNome);        const nomeVencedor = nomes[randomIndex];
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
