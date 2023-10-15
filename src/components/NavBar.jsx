// NavBar.jsx
import React from 'react';

function NavBar({ pokemonList, handlePokemonClick }) {

    const handlePokemonSelection = (pokemonName) => {
        if (pokemonName === 'pikachu') {
            alert('pika pikachu !!!');
        }
    };

    return (
        <div className="button-container">
            {pokemonList.map((pokemon, index) => (
                <button
                    key={index}
                    onClick={() => {
                        handlePokemonClick(index);
                        handlePokemonSelection(pokemon.name); 
                    }}
                >
                    {pokemon.name}
                </button>
            ))}
        </div>
    );
}

export default NavBar;
