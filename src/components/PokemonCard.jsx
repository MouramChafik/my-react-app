import React from 'react';
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



function PokemonCard() {
    const pokemon = pokemonList[0];
    return (
        <div className="pokemon-card">
          <h2>{pokemon.name}</h2>
          {pokemon.imgSrc ? (
            <img src={pokemon.imgSrc} alt={pokemon.name} />
          ) : (
            <p>???</p>
          )}
        </div>
      );
  return (
    <figure>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
      <figcaption>Bulbasaur</figcaption>
    </figure>
  );

}

export default PokemonCard;

