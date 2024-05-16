const pokemonList = document.querySelector('.pokemon-list');

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
    if (pokemon.sprites.front_default != null) {
        const pokemonCard = document.createElement('fieldset');
        pokemonCard.classList.add('pokemon-card');

        const pokemonName = document.createElement('legend');
        pokemonName.innerText = pokemon.name;

        const pokemonImage = document.createElement('img');
        pokemonImage.src = pokemon.sprites.other['official-artwork'].front_default; // Image URL from PokéAPI
        //pokemonImage.src = `https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__00${pokemon.id}__xy.gif`; //Pokémons 3D

        const pokemonId = document.createElement('p');
        pokemonId.innerText = pokemon.id

        pokemonCard.appendChild(pokemonName);
        pokemonCard.appendChild(pokemonImage);
        pokemonCard.appendChild(pokemonId);
        pokemonList.appendChild(pokemonCard);

    }

};

const fetchAndDisplayPokemons = async () => {
    const limit = 151;
    for (let i = 1; i <= limit; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const pokemonData = await fetchPokemon(url);
        displayPokemon(pokemonData)
    }

};

fetchAndDisplayPokemons();
var expandir = document.querySelector("#expandir")
var menu = document.querySelector(".menu-lateral")
var btnExpandir = document.querySelector(".btn-expandir");
expandir.addEventListener("click", function () {
    menu.classList.toggle("aberto")
    if (document.getElementById("pesquisa").style.display == "flex") {
        document.getElementById("pesquisa").style.display = "none"
        document.querySelector(".pokemon-list").style.opacity = "0"
    }
    else {
        document.getElementById("pesquisa").style.display = "flex"
        document.querySelector(".pokemon-list").style.opacity = "1"

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