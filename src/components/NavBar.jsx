// NavBar.jsx

import React from 'react';

function NavBar({ pokemonList, handlePokemonClick, selectedPokemonIndex }) {
    return (
        <div className="button-container">
            {pokemonList.map((pokemon, index) => (
                <button
                    key={index} 
                    onClick={() => handlePokemonClick(index)} 
                    className={selectedPokemonIndex === index ? "active" : ""} // Applique une classe pour le style actif.
                >
                    {pokemon.name}
                </button>
            ))}
        </div>
    );
}

export default NavBar;
