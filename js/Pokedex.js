const pokemonList = document.querySelector('.pokemon-list');




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
    console.log(pokemon)
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
document.querySelector

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
