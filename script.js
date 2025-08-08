function sortearAmigoSecreto() {
  if (listaDeAmigos.length < 2) {
    alert("Adicione pelo menos 2 amigos para o sorteio.");
    return;
  }

  let sorteio = {};
  let embaralhados = [...listaDeAmigos].sort(() => Math.random() - 0.5);

  for (let i = 0; i < listaDeAmigos.length; i++) {
    let amigo = listaDeAmigos[i];
    let amigoSecreto = embaralhados[i];

    // evitar que a pessoa tire ela mesma
    if (amigo === amigoSecreto) {
      return sortearAmigoSecreto(); // refaz o sorteio
    }

    sorteio[amigo] = amigoSecreto;
  }

  console.log("Sorteio:", sorteio);
  alert("Sorteio realizado! Confira no console.");
}
