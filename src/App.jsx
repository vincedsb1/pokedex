import './App.css'
import PokemonCard from "./components/PokemonCard.jsx";
import Navbar from "./components/Navbar.jsx";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  useEffect(
    () => {
      alert("hello pokemon trainer :)");
    },
    []
  );

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
    return (
      <div>
        <Navbar pokemonList={pokemonList} />
      </div>
    );
}

export default App;
