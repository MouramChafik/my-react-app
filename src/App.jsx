import React, { useState } from 'react';
import PokemonCard from './components/PokemonCard';
import './App.css'
import NavBar from './components/NavBar';
import { useEffect } from 'react';


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
    const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(0);
    const handlePokemonClick = (index) => {
      setSelectedPokemonIndex(index);
  };

    useEffect(() => {
      alert('Hello Pokemon Trainer :)');
    }, []);


    return (

      <div className="App">
        <div>
        <NavBar
                pokemonList={pokemonList}
                handlePokemonClick={handlePokemonClick}
                selectedPokemonIndex={selectedPokemonIndex}
            />    
            </div>
        <PokemonCard pokemon={pokemonList[selectedPokemonIndex]} />
      </div>
    );
  }
  

export default App;
