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

<<<<<<< Updated upstream
fetchAndDisplayPokemons();
=======
fetchAndDisplayPokemons();
var expandir = document.querySelector("#expandir")
var menu = document.querySelector(".menu-lateral")
var btnExpandir = document.querySelector(".btn-expandir");
expandir.addEventListener("click", function () {
    menu.classList.toggle("aberto")
    if (document.getElementById("pesquisa").style.display == "flex") {
        document.getElementById("pesquisa").style.display = "none"
        document.querySelector(".pokemon-list").style.opacity = "0"
        document.querySelector(".pokeinfo").style.border = "6px solid black"
        document.querySelector(".borda-pokeinfo").style.width = "35vw"
        document.querySelector(".borda-pokeinfo").style.height = "70vh"
        document.querySelector(".bolaesq").style.display = "block"
        document.querySelector(".boladir").style.display = "block"
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
>>>>>>> Stashed changes
