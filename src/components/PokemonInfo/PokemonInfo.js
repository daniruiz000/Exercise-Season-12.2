import React from "react";
import useFetch from '../../hooks/useFetch';
import { ThemeContext } from "../../App";
import { LoginContext } from "../../App";

const PokemonInfo = () => {

  const API_URL = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const theme = React.useContext(ThemeContext)
  const login = React.useContext(LoginContext)
  
  const [info] = useFetch(API_URL)

  return (
    login.currentUserName ? <div style={{background:theme.background, color: theme.fontColor}}>
      <p>Información de Pikachu:</p>


      {info ?
        <div>
          <p>Tema actual es: {theme.name}</p>
          <p>Nombre: {info.name}</p>
          <p>Altura: {info.height}</p>
          <p>Peso: {info.weight}</p>
          <img alt="Imagen de pikachu" src={info.sprites.front_default} />
        </div>
        : <p>Cargando...</p>
      }

    </div>
    : <p style={{background:theme.background, color: theme.fontColor}}> Acceso no permitido</p>
  );
}

export default PokemonInfo;