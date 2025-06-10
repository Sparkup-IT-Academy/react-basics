import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function PokemonList() {
    const [pokemon, setPokemon] = useState([]);

    async function fetchPokemon() {
        const { data } = await axios('pokemon');
        setPokemon(data.results);
    }

    useEffect(() => {
        fetchPokemon();
    }, 
    []);
    return (
        <div className="grid grid-cols-5 gap-3">
            { 
                pokemon.map(item => 
                    (<NavLink key={item.name} to={item.name} className="bg-sky-700 text-white text-center px-4 py-2 rounded-md mb-3">
                        { item.name }
                    </NavLink>))
            }
        </div>
    )
}
