import { Routes, Route } from "react-router-dom";

import DisplayPokemon from './Pages/displayPokemon';
import PokemonDetails from './Pages/PokemonDetails';
import './App.css';


const App = () => (
  <Routes>
    <Route exact path='/' Component={DisplayPokemon}></Route>
    <Route exact path="/:name" Component={PokemonDetails}></Route>
  </Routes>
);

export default App;