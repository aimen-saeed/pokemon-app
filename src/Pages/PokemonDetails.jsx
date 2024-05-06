import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import '../Styling/pokemonDetails.css'
const PokemonDetails = () => {
    const location = useLocation();
    const { name } = useParams();
    const types = location.state.pokemon_data.pokemon.types;

    return (
        <div >
            <Navbar title={name}></Navbar>

            <img src={location.state.pokemon_data.pokemon.sprites?.front_default} alt="pokemon-img" className='pokemon-image-d pokemon-card'/>

            <table id="vertical-1" className='pokemon-details bordered-table'>
            <tr>
              <th>Name</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th>Weight</th>
        <td>{location.state.pokemon_data.pokemon.weight} kg</td>
    </tr>
    <tr>
        <th>Height</th>
        <td>{location.state.pokemon_data.pokemon.height} cm</td>
    </tr>

    <tr>
        <th>Types</th>
        {types.map((type)=>(
            <tr>
               <td key={type.type.name}> 
                {type.type.name}
               </td>
            </tr>
               
               
            ) )}
    </tr>
</table>

        </div>
    );
};

export default PokemonDetails;
