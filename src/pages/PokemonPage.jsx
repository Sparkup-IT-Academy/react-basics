import { useEffect, useState } from "react"

export default function PokemonPage() {
    const [pokemon, setPokemon] = useState([]);

    async function fetchPokemon() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        setPokemon(data.results);
    }

    useEffect(() => {
        fetchPokemon();
    }, 
    []);

    return (
        <div>
            <div className="grid grid-cols-5 gap-2">
                { pokemon.map(item => <div className="bg-sky-700 text-white text-center px-4 py-2 rounded-md mb-3">{item.name}</div>) }
            </div>
        </div>
    )
}
