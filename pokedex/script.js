function Clicar(){
    var input = document.getElementById('pokemon')
    var name = document.getElementById('name')
    var tipo = document.getElementById ('tipo')
    var num = document.getElementById ('num')
    var imagem = document.getElementById ('imagem')
    var url = "https://pokeapi.co/api/v2/pokemon/" + input.value

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


    aaa