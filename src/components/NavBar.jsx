import React from 'react';

function NavBar(props) {

    return (
       <div className="button-container">
      {props.pokemonIndex > 0 && (
        <button onClick={props.handlePrevClick}>Précédent</button>
      )}
      {props.pokemonIndex < props.pokemonList.length - 1 && (
        <button onClick={props.handleNextClick}>Suivant</button>
      )}
    </div>
    )
}

export default NavBar;
