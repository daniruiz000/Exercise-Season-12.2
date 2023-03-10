import React from "react";
import useFetch from '../../hooks/useFetch';
import { LoginContext, ThemeContext } from '../../App'


const StarWarsInfo = () => {

  const API_URL = "https://swapi.dev/api/people/1";

  const [info] = useFetch(API_URL);

  const theme = React.useContext(ThemeContext);
  const login = React.useContext(LoginContext)

  return (
    login.currentUserName ?
      <div style={{ background: theme.background, color: theme.fontColor }}>
        <p>Información de Luke Skywalker:</p>

        {info ?
          <div style={{ background: theme.background, color: theme.fontColor }}>
            <p>Tema actual es: {theme.name}</p>
            <p>Nombre: {info.name}</p>
            <p>Altura: {info.height}</p>
            <p>Peso: {info.mass}</p>
            <p>Color de ojos: {info.eye_color}</p>
            <p>Color de pelo: {info.hair_color}</p>
          </div>
          : <p>Cargando...</p>
        }
      </div>
      : <p style={{ background: theme.background, color: theme.fontColor }}> Acceso no permitido</p>
  );
}

export default StarWarsInfo;