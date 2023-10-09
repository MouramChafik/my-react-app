import React from 'react';
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const selectedPokemon = pokemonList[0]; // Sélectionnez le Pokémon que vous souhaitez transmettre
  return (
    <div className="App">
      <PokemonCard pokemon={selectedPokemon} />
    </div>
  );
}

export default App;
