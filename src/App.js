import './App.css';
import DisplayPokemon from './Pages/displayPokemon';
import PokemonDetails from './Pages/PokemonDetails';
import {Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' Component={DisplayPokemon}></Route>
        <Route exact path="/:name" Component={PokemonDetails}></Route>
      </Routes>
    </div>
  );
}
export default App;