import React from 'react';
// import PokemonInfo from '../PokemonInfo/PokemonInfo';
// import StarWarsInfo from '../StarWarsInfo/StarWarsInfo';


const PokemonInfoLazy = React.lazy(() => import('../PokemonInfo/PokemonInfo'))
const StarWarsInfoLazy = React.lazy(() => import('../StarWarsInfo/StarWarsInfo'))


const ApisInfoGroup = () => {

    const myRef = React.useRef(null)

    const [showComponents, setShowComponents] = React.useState(false)


    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {

            entries.forEach((element) => {

                if (element.isIntersecting) {
                    setShowComponents(true)
                }
            })
        })

        observer.observe(myRef.current)

    }, [])


    return (<>
        <div ref={myRef} style={{ 'marginTop':'-100px', 'marginBottom':'100px','borderTop': '1px solid red' }}></div>

        {showComponents ?
            <>
                <React.Suspense fallback={<p>Cargando componente...</p>}>
                    <PokemonInfoLazy />
                    <StarWarsInfoLazy />
                </React.Suspense>


            </>
            : <p>Componentes ocultos</p>
        }

    </>

    )
}

export default ApisInfoGroup;