import React, { useState } from 'react';
import Teste from './teste';

function App() {
  const [pokemon, setPokemon] = React.useState({});
  const [id_poke, setIdPoke] = React.useState(1);
  

  function Carregar(id_poke){
    fetch('https://pokeapi.co/api/v2/pokemon/' + id_poke)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setPokemon(data);
    });
  }

  function Volta() {
    Carregar(id_poke);  
    if(id_poke > 1)
      setIdPoke(id_poke - 1)
    
}

  function Proximo() {
      Carregar(id_poke);  
      setIdPoke(id_poke + 1)
  }


  function teste(){
    return pokemon.abilities.map(data => <Teste text={data.ability.name} />)
  }

  return (
    pokemon.sprites ?
      <div>
        <h1> #{id_poke} - {pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} />
        <p>{teste()}</p>
        <button onClick={Volta}>Anterior</button>
        <button onClick={Proximo}>Próximo</button>
      </div>
    :
      <div>
        <button onClick={Carregar(id_poke)}>Carregar</button>
      </div>
    );
    
}

export default App;