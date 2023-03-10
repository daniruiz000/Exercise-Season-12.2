import React from "react";

const ThemeState = ()=>{

    const theme = React.useContext(ThemeContext);

    return(
        <div>
            <h2>Temas:</h2>
            <p>Tema Actual: {theme.name}</p>
            <button onClick={() => theme.setThemeState(theme === theme.ligth ? theme.dark : theme.ligth)}>Cambiar Tema</button>
        </div>

    )
}

export default ThemeState;