import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import myAxios from "../myAxios";

export default function Details() {
    const [pokemonDetails, setPokemonDetails] = useState({});
    const routeParams = useParams();

    async function fetchPokemonDetails() {
        const {data} = await myAxios(`pokemon/${routeParams.name}`);
        console.log(data);
        setPokemonDetails(data);
    }

    useEffect(() => {
        fetchPokemonDetails();
    }, []);

    return (
        <div className="pokemon-details p-4 shadow-[0_0_8px_rgba(0,0,255,0.3)] rounded-md my-4 max-w-[450px] mx-auto">
            <img
                src={pokemonDetails?.sprites?.other?.dream_world?.front_default}
                alt="Pokemon image"
                className="block h-[150px] mx-auto"
            />
            <h2 className="text-center font-bold capitalize text-2xl mt-4">{pokemonDetails?.name}</h2>

            <div className="mt-5">
                { 
                    pokemonDetails?.stats?.map((item, ind) => (
                        <div key={ind} className="flex justify-between">
                            <span className="uppercase font-semibold">{item.stat.name}</span>
                            <span className="font-semibold text-blue-500">{item.base_stat}</span>
                        </div>
                    ))
                }
            </div>

            <div className="flex justify-between">
                <div className="mt-5">
                    <p className="font-semibold text-xl">Abilities</p>
                    {
                        pokemonDetails?.abilities?.map((item, ind) => (
                            <p key={ind} className="text-grey capitalize">{item.ability.name}</p>
                        ))
                    }
                </div>
                <div className="mt-5">
                    <p className="font-semibold text-xl text-right">Moves</p>
                    {
                        pokemonDetails?.moves?.slice(0, 10)?.map((item, ind) => (
                            <p key={ind} className="text-grey capitalize text-right">{item.move.name}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
