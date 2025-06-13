let currentPokemonId = null;

const tiposPT = {
    normal: "normal",
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

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
} // deixa a primeira letra do pokemon maiuscula

//async function executa operações que demoram um tempo para terminar como a propria pokeapi (nao sei se a necessidade mas vi que é bom)

async function carregarPokemon(pokemon) {
    const pokemonInfo = document.getElementById('pokemon-info');

  
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toString().toLowerCase()}`);
        if (!response.ok) throw new Error('Pokémon não encontrado');
        const data = await response.json();

        currentPokemonId = data.id;

        document.getElementById('name').textContent = capitalize(data.name);
        document.getElementById('num').textContent = `#${data.id}`;
        document.getElementById('imagem').src = data.sprites.other['official-artwork'].front_default;

        const tipos = data.types.map(t => tiposPT[t.type.name] || t.type.name);
        document.getElementById('tipo').textContent = `Tipo: ${tipos.join(', ')}`;

        pokemonInfo.style.display = 'flex';

        document.getElementById('pokemon').value = '';

    } catch (error) {
        alert(error.message);
        pokemonInfo.style.display = 'none';
    }
}

function Clicar() {
    const input = document.getElementById('pokemon').value.trim();
    if (!input) {
        alert("Por favor, insira o nome ou número do Pokémon.");
        return;
    }
    carregarPokemon(input);
}

const input = document.getElementById('pokemon')
document.getElementById('pokemon').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      Clicar();
    }
  });

document.getElementById('anterior').addEventListener('click', () => {
    if (currentPokemonId && currentPokemonId > 1) {
        carregarPokemon(currentPokemonId - 1);
    } else {
        alert("Este é o primeiro Pokémon!");
    }
});

document.getElementById('proximo').addEventListener('click', () => {
    const maxPokemonId = 1010; 
    if (currentPokemonId && currentPokemonId < maxPokemonId) {
        carregarPokemon(currentPokemonId + 1);
    } else {
        alert("Este é o último Pokémon da Pokédex!");
    }
});
