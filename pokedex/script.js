function Clicar() {
    var input = document.getElementById('pokemon').value.trim();
    var pokemonInfo = document.getElementById('pokemon-info');

    if (!input) {
        alert("Por favor, insira o nome ou número do Pokémon.");
        return;
    }

    var url = "https://pokeapi.co/api/v2/pokemon/" + input;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon não encontrado');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('name').textContent = data.name;
            document.getElementById('num').textContent = data.order;
            document.getElementById('imagem').src = data.sprites.other['official-artwork'].front_default;
            document.getElementById('tipo').textContent = data.types[0].type.name;

            // torna a div visível
            pokemonInfo.style.display = 'flex'; // ou 'block', dependendo do layout desejado
        })
        .catch(error => {
            console.error('Erro: ', error);
            alert("Erro ao buscar Pokémon. Verifique se o nome ou número está correto.");
        });
}
