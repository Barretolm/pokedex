function Clicar(){
    var input = document.getElementById('pokemon')
    var name = document.getElementById('name')
    var tipo = document.getElementById ('tipo')
    var num = document.getElementById ('num')
    var imagem = document.getElementById ('imagem')
    var infoDiv = document.getElementById('poke-info');
    var url = "https://pokeapi.co/api/v2/pokemon/" + input.value.toLowerCase();

    fetch(url)
        .then(response => response.json())
        .then (data => {
            name.textContent = data.name
            num.textContent = data.order
            imagem.src = data.sprites.other['official-artwork'].front_default
            tipo.textContent = data.types[0].type.name})
        
        .catch(error => console.error ('Erro: ', error));
        
    }
        
    function ValidarTexto(){
        var name = document.getElementById('name')
        console.log(name.style.border != "")
        name.style.border = ""

    }


    function Clicar() {
        var input = document.getElementById('pokemon');
        var name = document.getElementById('name');
        var tipo = document.getElementById('tipo');
        var num = document.getElementById('num');
        var imagem = document.getElementById('imagem');
        var infoDiv = document.getElementById('info'); // A div que contém as informações
        var url = "https://pokeapi.co/api/v2/pokemon/" + input.value.toLowerCase(); // Converte para minúsculas
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
                tipo.textContent = "Tipo: " + data.types[0].type.name;
                // Torna a div visível
                infoDiv.style.display = 'block';
            })}