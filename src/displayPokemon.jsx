import { useEffect, useState } from "react";
import {useGetAllPokemonQuery} from "./pokemonApi";
import Navbar from "./Navbar";
import './displayPokemon.css'
import EachPokemon from "./EachPokemon";
const DisplayPokemon = () => {
	const responseInfo = useGetAllPokemonQuery();
	const [data, setData] = useState([]);
	useEffect(() => {
		responseInfo.isSuccess && setData(responseInfo.data?.results);
	}, [responseInfo]);

	if (responseInfo.isError) return <h2>An error occurred, {responseInfo.error.error}</h2>;


	return (
		<div>
		<Navbar></Navbar>
		  {responseInfo.isLoading ? <div> Loading...</div> : (
			<div className="pokemon-list">
			  {data.map((pokemon) => (
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