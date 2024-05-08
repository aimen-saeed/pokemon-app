import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetMoreDetailsQuery } from "../../Store/pokemonApi";
import './EachPokemon.css'

const EachPokemon = ({ pokemon }) => {
	const navigate = useNavigate();
	const redirectToDetails = (name, pokemon,) => {
		navigate(`/${name}`, {
			state: {
				pokemon_data: { pokemon }
			},
		});
	};
	const moreInfo = useGetMoreDetailsQuery(pokemon.name);

	return (
		<div className="pokemon-card link" onClick={() => redirectToDetails(pokemon.name, moreInfo.data)}>
			<img src={moreInfo.data?.sprites?.front_default} alt="pokemon-img" className='pokemon-image' />
			<p>{pokemon.name}</p>
		</div>
	);
};

export default EachPokemon;
