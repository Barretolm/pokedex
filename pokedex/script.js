function Clicar() {
    var input = document.getElementById('pokemon').value.trim();
    var pokemonInfo = document.getElementById('pokemon-info');

    const tiposPT = {
        normal: "ormal",
        fire: "fogo",
        water: "água",
        grass: "grama",
        electric: "elétrico",
        ice: "gelo",
        fighting: "lutador",
        poison: "veneno",
        ground: "terra",
        flying: "voador",
        psychic: "psíquico",
        bug: "inseto",
        rock: "pedra",
        ghost: "fantasma",
        dragon: "dragão",
        dark: "noturno",
        steel: "aço",
        fairy: "fada"
      };
      
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
            document.getElementById('tipo').textContent = tipoIngles = data.types[0].type.name;
            

            const tipoTraduzido = tiposPT[tipoIngles] || tipoIngles;
            tipo.textContent = "tipo " + tipoTraduzido;


            // torna a div visível
            pokemonInfo.style.display = 'flex'; 
        })
        .catch(error => {
            console.error('Erro: ', error);
            alert("Erro ao buscar Pokémon. Verifique se o nome ou número está correto.");
        });
}
