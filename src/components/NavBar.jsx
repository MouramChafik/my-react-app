// NavBar.jsx

import React from 'react';

function NavBar({ pokemonIndex, handlePrevClick, handleNextClick }) {
  return (
    <div className="button-container">
      <button onClick={handlePrevClick}>Précédent</button>
      <button onClick={handleNextClick}>Suivant</button>
    </div>
  );
}

export default NavBar;

