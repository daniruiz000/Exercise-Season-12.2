import React from "react";
import useCounter from "../../hooks/useCounter";
import { ThemeContext } from "../../App";
import { LoginContext } from "../../App";

const Counter = () => {

    const login = React.useContext(LoginContext)
    const theme = React.useContext(ThemeContext)

    const [counter, handleDecrement, handleIncrement] = useCounter(25);

    return (
      login.currentUserName ?  
        <div style={{background:theme.background, color: theme.fontColor}}>
            <p>Valor actual: {counter}</p>
            <button onClick={handleDecrement}>Decrementar</button>
            <button onClick={handleIncrement}>Aumentar</button>
        </div> 
        : <p style={{background:theme.background, color: theme.fontColor}}> Acceso no permitido</p>
    )
}

export default Counter;