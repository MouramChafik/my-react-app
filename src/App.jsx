import React, { useState } from 'react';
import PokemonCard from './components/PokemonCard';
import './App.css'
import NavBar from './components/NavBar';



const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);
    const handlePrevClick = () => {
      if (pokemonIndex > 0) {
          setPokemonIndex(pokemonIndex - 1);
      }
  };

  const handleNextClick = () => {
      if (pokemonIndex < pokemonList.length - 1) {
          setPokemonIndex(pokemonIndex + 1);
      }
  };
  
    return (

      <div className="App">
        <div>
        <NavBar
                pokemonIndex={pokemonIndex}
                pokemonList={pokemonList}
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
        />    
        </div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
    );
  }
  

export default App;
