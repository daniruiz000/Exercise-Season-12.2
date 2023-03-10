import React from 'react';
import './App.css';
import ApisInfoGroup from './components/ApisInfoGroup/ApisInfoGroup';
import Counter from './components/Counter/Counter';
import Login from './components/Login/Login';


export const ThemeContext = React.createContext();
export const LoginContext = React.createContext();



const themes = {
  ligth: {
    name: 'ligth',
    background: '#FFF',
    fontColor: '#000'
  },
  dark: {
    name: 'dark',
    background: '#000',
    fontColor: '#FFF'
  }
}

const LongTextLazy = React.lazy(() => import('./components/LongText/LongText'))

function App() {


  const [themeState, setThemeState] = React.useState(themes.dark);
  const [userState, setUserState] = React.useState();



  const updateUserInfo = (userState) => {
    setUserState(userState)
  }

  const loginProviderValue = {
    currentUserName: userState,
    updateUserInfo: updateUserInfo
  }


  return (

    <LoginContext.Provider value={loginProviderValue} >
      <ThemeContext.Provider value={themeState}>
        <div className="App">


          <h2>Login:</h2>
          <Login />

          <h2>Temas:</h2>
          <p>Tema Actual: {themeState.name}</p>
          <button onClick={() => setThemeState(themeState === themes.ligth ? themes.dark : themes.ligth)}>Cambiar Tema</button>

          <h2>Componente Lazy:</h2>
          <React.Suspense fallback={<p>Cargando...</p>}>
            <LongTextLazy></LongTextLazy >
          </React.Suspense>

          <h2>Contadores:</h2>
          <Counter />
          <Counter />

          <h2>Peticiones a la API</h2>

          <ApisInfoGroup />



        </div>
      </ThemeContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;