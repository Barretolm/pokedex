const input = document.getElementById('pokemon');
const infoDiv = document.getElementById('infoDiv');

function Clicar() {
    const name = document.getElementById('name');
    const tipo = document.getElementById('tipo');
    const num = document.getElementById('num');
    const imagem = document.getElementById('imagem');
    const btnNovo = document.getElementById('botao-novo-pokemon'); 

    const valor = input.value.trim().toLowerCase();
    if (!valor) {
        input.style.border = "2px solid red";
        input.focus();
        return;
    }

    input.style.border = "";

    if (btnNovo) { 
        btnNovo.remove();
    }

    infoDiv.classList.remove('show');

    const url = "https://pokeapi.co/api/v2/pokemon/" + valor;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon não encontrado'); 
            }
            return response.json();
        })
        .then(data => {
            name.textContent = data.name;
            num.textContent = "Número: " + data.order;
            imagem.src = data.sprites.other['official-artwork'].front_default;
            tipo.textContent = "Tipo: " + data.types.map(t => t.type.name).join(', ');

            setTimeout(() => {
                infoDiv.classList.add('show');
            }, 100);
            criarBotaoNovoPokemon();
        })
        .catch(error => console.error('Erro: ', error));
}

function criarBotaoNovoPokemon() {
    if (document.getElementById('botao-novo-pokemon')) return;

    const btn = document.createElement('button');
    btn.id = "botao-novo-pokemon";
    btn.textContent = "Consultar outro Pokémon";
    btn.setAttribute('aria-label', 'Consultar outro Pokémon');
    btn.addEventListener('click', () => {
        resetarConsulta();
    });
    infoDiv.appendChild(btn);
}

function resetarConsulta() {
    // limpa o conteúdo e esconde as informações
    document.getElementById('name').textContent = '';
    document.getElementById('num').textContent = '';
    document.getElementById('tipo').textContent = '';
    document.getElementById('imagem').src = '';

    // remove o botão de consultar outro Pokémon
    const btnNovo = document.getElementById('botao-novo-pokemon');
    if (btnNovo) btnNovo.remove();

    // limpa e foca o input para novo uso
    input.value = '';
    input.style.border = ''; // Limpa a borda
    input.focus();
}

function ValidarTexto() {
    if (input.value.trim() !== "") {
        input.style.border = ""; // limpa a borda se o campo não estiver vazio
    } else {
        input.style.border = "2px solid red"; // ldiciona borda vermelha se estiver vazio
    }
}
