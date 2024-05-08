import { useEffect, useState } from "react";
import { useGetAllPokemonQuery } from "../Store/pokemonApi";
import Navbar from "../components/Navbar/Navbar";
import EachPokemon from "../components/EachPokemon/EachPokemon";
import './displayPokemon.css'

const DisplayPokemon = () => {
	const responseInfo = useGetAllPokemonQuery();

	if (responseInfo.isError) return <h2>An error occurred, {responseInfo.error.error}</h2>;

	return (
		<div>
			<Navbar />
			{responseInfo.isLoading ? <div> Loading...</div> : (
				<div className="pokemon-list">
					{responseInfo.data?.results.map((pokemon) => (
						<div key={pokemon.name}>
							<hr></hr>
							<EachPokemon pokemon={pokemon}></EachPokemon>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default DisplayPokemon;