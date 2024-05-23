const pokemonList = document.querySelector('.pokemon-list');
let choro = ""
let fotoShiny = ""
let fotoNormal = ""
let fotoMacho = ""
let fotoFemea = null
let shiny = false
let femea = false
let tocando = false
async function showinfo(e) {
    let id = e.target.id
    console.log(id)
    if (id != null) {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemonData = await fetchPokemon(url);
        console.log(pokemonData)
        document.querySelector(".genero").src = "assets/gênero/macho.png"
        let foto = document.querySelector(".pokefoto")
        document.querySelector(".pokenome").innerText = pokemonData.name
        document.querySelector(".tipo2").style.display = "none"
        foto.src = pokemonData.sprites.other['official-artwork'].front_default
        fotoNormal = pokemonData.sprites.other['official-artwork'].front_default
        fotoShiny = pokemonData.sprites.other['official-artwork'].front_shiny
        fotoMacho = fotoNormal
        fotoFemea = pokemonData.sprites.front_female
        document.querySelector(".shiny").addEventListener("click", _switchShiny)
        document.querySelector(".genero").addEventListener("click", _switchGender)
        showatribbutes(pokemonData)
        closemenu(pokemonData)
        console.log(pokemonData.types.length)
        document.querySelector(".type1").src = `./assets/tipos/${pokemonData.types[0].type.name}.png`
        choro = pokemonData.cries.latest
        let tipo = pokemonData.types[0].type.name
        if (pokemonData.types.length == 2) {
            document.querySelector(".type2").src = `./assets/tipos/${pokemonData.types[1].type.name}.png`
            document.querySelector(".tipo2").style.display = "flex"
        }
        document.querySelector(".chadot").addEventListener("click", playSound)
        types1 = document.querySelector(".tipo1")
        if (tipo == "fire") {
            document.querySelector(".meialua").style.background = "#F08030"
            document.querySelector(".atributos").style.background = "#F08030"
        }
        if (tipo == "water") {
            document.querySelector(".meialua").style.background = "#6890F0"
            document.querySelector(".atributos").style.background = "#6890F0"
        }
        if (tipo == "grass") {
            document.querySelector(".meialua").style.background = "#78C850"
            document.querySelector(".atributos").style.background = "#78C850"
        }
        if (tipo == "ice") {
            document.querySelector(".meialua").style.background = "#98D8D8"
            document.querySelector(".atributos").style.background = "#98D8D8"
        }
        if (tipo == "electric") {
            document.querySelector(".meialua").style.background = "#F8D030"
            document.querySelector(".atributos").style.background = "#F8D030"
        }
        if (tipo == "fighting") {
            document.querySelector(".meialua").style.background = "#C03028"
            document.querySelector(".atributos").style.background = "#C03028"
        }
        if (tipo == "poison") {
            document.querySelector(".meialua").style.background = "#A040A0"
            document.querySelector(".atributos").style.background = "#A040A0"
        }
        if (tipo == "ground") {
            document.querySelector(".meialua").style.background = "#E0C068"
            document.querySelector(".atributos").style.background = "#E0C068"
        }
        if (tipo == "flying") {
            document.querySelector(".meialua").style.background = "#A890F0"
            document.querySelector(".atributos").style.background = "#A890F0"
        }
        if (tipo == "psychic") {
            document.querySelector(".meialua").style.background = "#F85888"
            document.querySelector(".atributos").style.background = "#F85888"
        }
        if (tipo == "bug") {
            document.querySelector(".meialua").style.background = "#A8B820"
            document.querySelector(".atributos").style.background = "#A8B820"
        }
        if (tipo == "rock") {
            document.querySelector(".meialua").style.background = "#B8A038"
            document.querySelector(".atributos").style.background = "#B8A038"
        }
        if (tipo == "ghost") {
            document.querySelector(".meialua").style.background = "#705898"
            document.querySelector(".atributos").style.background = "#705898"
        }
        if (tipo == "dragon") {
            document.querySelector(".meialua").style.background = "#7038F8"
            document.querySelector(".atributos").style.background = "#7038F8"
        }
        if (tipo == "dark") {
            document.querySelector(".meialua").style.background = "#705848"
            document.querySelector(".atributos").style.background = "#705848"
        }
        if (tipo == "steel") {
            document.querySelector(".meialua").style.background = "#B8B8D0"
            document.querySelector(".atributos").style.background = "#B8B8D0"
        }
        if (tipo == "fairy") {
            document.querySelector(".meialua").style.background = "#EE99AC"
            document.querySelector(".atributos").style.background = "#EE99AC"
        }
        if (tipo == "normal") {
            document.querySelector(".meialua").style.background = "#A8A878"
            document.querySelector(".atributos").style.background = "#A8A878"
        }














    }
}













function showatribbutes(pokemonData) {
    document.querySelector("#hp").value = pokemonData.stats[0].base_stat
    document.querySelector("#atk").value = pokemonData.stats[1].base_stat
    document.querySelector("#spa").value = pokemonData.stats[2].base_stat
    document.querySelector("#spd").value = pokemonData.stats[3].base_stat
    document.querySelector("#spe").value = pokemonData.stats[4].base_stat
    document.querySelector("#def").value = pokemonData.stats[5].base_stat
    document.querySelector("#hp_value").innerText = pokemonData.stats[0].base_stat
    document.querySelector("#atk_value").innerText = pokemonData.stats[1].base_stat
    document.querySelector("#spa_value").innerText = pokemonData.stats[2].base_stat
    document.querySelector("#spd_value").innerText = pokemonData.stats[3].base_stat
    document.querySelector("#spe_value").innerText = pokemonData.stats[4].base_stat
    document.querySelector("#def_value").innerText = pokemonData.stats[5].base_stat
}
function closemenu(pokemonData) {
    document.querySelector(".pokeinfo").style.border = "5px solid black"
    document.querySelector(".borda-pokeinfo").style.width = "35vw"
    document.querySelector(".borda-pokeinfo").style.height = "70vh"
    document.querySelector(".bolaesq").style.display = "block"
    document.querySelector(".boladir").style.display = "block"
    menu.classList.remove("aberto")
    btnExpandir.classList.remove("escala-invertida");
}



pokemons = []



const fetchPokemon = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
    }
};

const displayPokemon = (pokemon) => {
    if (pokemon.img != null) {
        const pokemonCard = document.createElement('fieldset');
        pokemonCard.classList.add('pokemon-card');

        const pokemonName = document.createElement('legend');
        pokemonName.innerText = pokemon.name;

        const pokemonImage = document.createElement('img');
        pokemonImage.src = pokemon.img;

        const pokemonId = document.createElement('p');
        pokemonId.innerText = pokemon.id

        pokemonCard.appendChild(pokemonName);
        pokemonCard.appendChild(pokemonImage);
        pokemonCard.appendChild(pokemonId);
        pokemonList.appendChild(pokemonCard);
        pokemonCard.id = pokemon.id
        pokemonCard.addEventListener("click", showinfo);
    }

};


function showGen(gen) {
    pokemonList.innerHTML = '';
    pokemons.forEach((pokemon) => {
        if (pokemon.gen == gen) displayPokemon(pokemon);
    });
}

const fetchAndDisplayPokemons = async () => {
    const limit = 1025;
    for (let i = 1; i <= limit; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const pokemonData = await fetchPokemon(url);
        if (i <= 151) gen = 1
        else if (i <= 251) gen = 2
        else if (i <= 386) gen = 3
        else if (i <= 493) gen = 4
        else if (i <= 649) gen = 5
        else if (i <= 721) gen = 6
        else if (i <= 809) gen = 7
        else if (i <= 905) gen = 8
        else if (i <= 1025) gen = 9
        let poke = {
            id: pokemonData.id,
            name: pokemonData.name,
            img: pokemonData.sprites.other['official-artwork'].front_default,
            gen: gen,
            som: pokemonData.cries.latest
        }
        pokemons.push(poke)
        console.log(i)
    }
    showGen(1);

};

fetchAndDisplayPokemons();
var expandir = document.querySelector("#expandir")
var menu = document.querySelector(".menu-lateral")
var btnExpandir = document.querySelector(".btn-expandir");
expandir.addEventListener("click", function () {
    menu.classList.toggle("aberto")
    if (document.getElementById("pesquisa").style.display == "flex") {
        document.getElementById("pesquisa").style.display = "none"
        document.getElementById("pesquisa").style.display = "flex"
        document.querySelector(".pokemon-list").style.opacity = "1"
        document.querySelector(".pokeinfo").style.border = "0"
        document.querySelector(".borda-pokeinfo").style.width = "0"
        document.querySelector(".borda-pokeinfo").style.height = "0"
        document.querySelector(".bolaesq").style.display = "none"
        document.querySelector(".boladir").style.display = "none"
    }
    else {
        document.getElementById("pesquisa").style.display = "flex"
        document.querySelector(".pokemon-list").style.opacity = "1"
        document.querySelector(".pokeinfo").style.border = "0"
        document.querySelector(".borda-pokeinfo").style.width = "0"
        document.querySelector(".borda-pokeinfo").style.height = "0"
        document.querySelector(".bolaesq").style.display = "none"
        document.querySelector(".boladir").style.display = "none"

    }
    btnExpandir.classList.toggle("escala-invertida");
})

var menuItem = document.querySelectorAll(".item-menu button")
function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove("ativo")
    )
    this.classList.add("ativo")
}

menuItem.forEach((item) =>
    item.addEventListener("click", selectLink)
)


document.getElementById("lupa").addEventListener("keyup", function (e) {
    const searchData = e.target.value.toLowerCase();

    const filteredPokemons = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchData) || pokemon.id.toString().includes(searchData);
    })
    pokemonList.innerHTML = '';
    filteredPokemons.forEach((pokemon) => {
        displayPokemon(pokemon);
    });
});

document.querySelectorAll(".atr_input").forEach(atr => {
    atr.disabled = true
});
function playSound() {
    let audio = new Audio(choro)
    audio.volume = 0.1
    audio.play()
}
function playShiny() {
    let audio = new Audio("./assets/som_shiny.mp3")
    audio.volume = 0.1
    audio.play()
}

function _switchShiny(e) {
    let foto = e.srcElement.offsetParent.offsetParent.children[2].children[0]
    if (foto.src == fotoNormal) {
        foto.src = fotoShiny
        shiny = true
        playShiny()
    } else {
        foto.src = fotoNormal
        shiny = false
    }
}
function _switchGender(e) {
    console.log(fotoFemea)
    let foto = e.srcElement.offsetParent.children[2].children[0]
    if (foto.src == fotoMacho && fotoFemea != null) {
        foto.src = fotoFemea
        femea = true
        document.querySelector(".genero").src = (femea) ? "assets/gênero/fêmea.png" : "assets/gênero/macho.png"
    } else {
        foto.src = fotoMacho
        femea = false
        document.querySelector(".genero").src = (femea) ? "assets/gênero/fêmea.png" : "assets/gênero/macho.png"
    }
}
document.querySelector(".chadot").addEventListener("mouseover", function () {
    this.src = "assets/chatot/chatotbicoabertacomsom.png"
})
document.querySelector(".chadot").addEventListener("mouseout", function () {
    this.src = "assets/chatot/chatotbicofechado.png"
})
window.addEventListener("click", tocarmusica)
function tocarmusica() {
    if (!tocando) {
        let musica = document.getElementById("musga")
        musica.volume = 0.1
        musica.play()
    }
}