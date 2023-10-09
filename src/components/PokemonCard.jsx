import React from 'react';

function PokemonCard(props) {
  const { pokemon } = props; // Utilisation de la destructuration pour accéder à props.pokemon
  console.log(pokemon); // Affiche l'objet pokemon dans la console

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
}

export default PokemonCard;
