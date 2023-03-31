import React, { useState } from "react";
import PropTypes from "prop-types";
import PokemonCard from "./PokemonCard.jsx";


const Navbar = ({ pokemonList }) => {
    const [index, setIndex] = useState(0);

        const handleClick = (increment) => {
          setIndex((prevIndex) => (prevIndex + increment + pokemonList.length) % pokemonList.length);
        };
    
        const currentPokemon = pokemonList[index];    
    
    return (
        <div>
          <PokemonCard pokemon={currentPokemon} />
          <button onClick={() => handleClick(-1)}>Previous</button>{" "}
          <button onClick={() => handleClick(1)}>Next</button>
        </div>
      );
};

Navbar.propTypes = {
    pokemonList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
      })
    ).isRequired,
  };

export default Navbar;


