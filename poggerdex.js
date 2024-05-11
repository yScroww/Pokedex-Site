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
  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemon-card');

  const pokemonName = document.createElement('h2');
  pokemonName.textContent = pokemon.name;

  const pokemonImage = document.createElement('img');
  pokemonImage.src = pokemon.sprites.front_default; // Image URL from PokéAPI

  pokemonCard.appendChild(pokemonName);
  pokemonCard.appendChild(pokemonImage);

  pokemonList.appendChild(pokemonCard);
};

const fetchAndDisplayPokemons = async () => {
  const limit = 10; // Number of Pokémon to fetch (adjust as needed)
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

  try {
    const pokemonData = await fetchPokemon(url);
    pokemonData.results.forEach(pokemon => {
      fetchPokemon(pokemon.url)
        .then(data => displayPokemon(data));
    });
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
  }
  
};

fetchAndDisplayPokemons();
