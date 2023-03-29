import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard.jsx"
import PokemonCard2 from "./components/PokemonCard2.jsx";

function App() {
  return (
    <div>
      <PokemonCard />

      <PokemonCard2 />

    </div>
  )
}

export default App
