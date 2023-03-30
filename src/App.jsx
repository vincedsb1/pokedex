import './App.css'
import PokemonCard from "./components/PokemonCard.jsx";
import { useState } from "react";

function App() {
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
}

export default App;
