import './App.css'
import PokemonCard from "./components/PokemonCard.jsx";
import PokemonCard2 from "./components/PokemonCard2.jsx";

function App() {

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

  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]}/>
      <PokemonCard2 />
    </div>
  )
}

export default App
