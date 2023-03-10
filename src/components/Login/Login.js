import React from 'react';
import './Login.css';
import { LoginContext } from '../../App';

const Login = () => {

    const login = React.useContext(LoginContext)

    const [error, setError] = React.useState();

    const inputUser = React.useRef(null);
    const inputPassword = React.useRef(null);

    const doLogin = (event) => {

        event.preventDefault()
        const userName = inputUser.current.value;
        const password = inputPassword.current.value;


        if (userName === 'admin') {

            setError('Estás logado')

            if (password === '1234') {
                setError(null)
                login.updateUserInfo(userName)
            } else {

                setError('Contraseña incorrecta')
            }

        } else {

            setError('Usuario Inexistente')
        }
    }

    return (
        
        <>
            <p>Usuario: {login.currentUserName}</p>
            {login.currentUserName ? 
                <button onClick={()=>login.updateUserInfo(null)}>Logout</button>
                :<div>
                    <form onSubmit={doLogin} className='login'>
                        <p><input ref={inputUser} type='text' placeholder='Nombre de usuario' /></p>
                        <p><input ref={inputPassword} type='password' placeholder='Contraseña' /></p>
                        <button type='submit'>Login</button>
                        <p className='error'>{error}</p>
                    </form>
                </div>
            }
        </>
    )
}

export default Login;