import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard.jsx";
import PokemonCard2 from "./components/PokemonCard2.jsx";
import PropTypes from "./components/PokemonCard.jsx";


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];


function App() {

  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]}/>
      <p>lala </p>

    </div>
  )
}

export default App
