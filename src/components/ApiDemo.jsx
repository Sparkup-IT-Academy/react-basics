import { useEffect, useState } from "react"

export default function ApiDemo() {
  const [pokemonList, setPokemonList] = useState([]);
  
  async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    setPokemonList(data.results);
  }

  useEffect(() => {
    fetchPokemon();
  }, [])
  return (
    <div>
      <h2>Pokemon List</h2>
      <div>
        {
          pokemonList.map((item, index) => <h3 key={index}>{item.name}</h3>)
        }
      </div>
    </div>
  )
}
