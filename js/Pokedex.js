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
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');

        const pokemonName = document.createElement('h2');
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