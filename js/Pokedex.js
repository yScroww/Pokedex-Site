const pokemonList = document.querySelector('.pokemon-list');
async function showinfo(e){
    let id = e.target.id
    console.log(id)
    if(id != null){
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemonData = await fetchPokemon(url);
        console.log(pokemonData)
        document.querySelector(".pokenome").innerText = pokemonData.name
        document.querySelector(".pokefoto").src = pokemonData.sprites.other['official-artwork'].front_default
        showatribbutes(pokemonData)
        closemenu(pokemonData)  
        console.log(pokemonData.types.length)
        document.querySelector(".type1").src = `https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${ pokemonData.types[0].type.name}.svg`
        let tipo = pokemonData.types[0].type.name
        if(tipo == "fire"){
            document.querySelector(".meialua").style.background = "#F08030"
        }
        if(tipo == "water"){
            document.querySelector(".meialua").style.background = "#6890F0"
        }
        if(tipo == "grass"){
            document.querySelector(".meialua").style.background = "#78C850"
        }
        if(tipo == "ice"){
            document.querySelector(".meialua").style.background = "#98D8D8"
        }
        if(tipo == "electric"){
            document.querySelector(".meialua").style.background = "#F8D030"
        }
        if(tipo == "fighting"){
            document.querySelector(".meialua").style.background = "#C03028"
        }
        if(tipo == "poison"){
            document.querySelector(".meialua").style.background = "#A040A0"
        }
        if(tipo == "ground"){
            document.querySelector(".meialua").style.background = "#E0C068"
        }
        if(tipo == "flying"){
            document.querySelector(".meialua").style.background = "#A890F0"
        }
        if(tipo == "psychic"){
            document.querySelector(".meialua").style.background = "#F85888"
        }
        if(tipo == "bug"){
            document.querySelector(".meialua").style.background = "#A8B820"
        }
        if(tipo == "rock"){
            document.querySelector(".meialua").style.background = "#B8A038"
        }
        if(tipo == "ghost"){
            document.querySelector(".meialua").style.background = "#705898"
        }
        if(tipo == "dragon"){
            document.querySelector(".meialua").style.background = "#7038F8"
        }
        if(tipo == "dark"){
            document.querySelector(".meialua").style.background = "#705848"
        }
        if(tipo == "steel"){
            document.querySelector(".meialua").style.background = "#B8B8D0"
        }
        if(tipo == "fairy"){
            document.querySelector(".meialua").style.background = "#EE99AC"
        }
        if(tipo == "normal"){
            document.querySelector(".meialua").style.background = "#A8A878"
        }














    }
}













function showatribbutes(pokemonData){
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
function closemenu(pokemonData){
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
        if(pokemon.gen == gen) displayPokemon(pokemon);
    });
}

const fetchAndDisplayPokemons = async () => {
    const limit = 1025;
    for (let i = 1; i <= limit; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const pokemonData = await fetchPokemon(url);
        if(i <= 151) gen = 1
        else if(i <= 251) gen = 2
        else if(i <= 386) gen = 3
        else if(i <= 493) gen = 4
        else if(i <= 649) gen = 5
        else if(i <= 721) gen = 6
        else if(i <= 809) gen = 7
        else if(i <= 905) gen = 8
        else if(i <= 1025) gen = 9
        let poke = {
            id: pokemonData.id,
            name: pokemonData.name,
            img: pokemonData.sprites.other['official-artwork'].front_default,
            gen: gen
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

