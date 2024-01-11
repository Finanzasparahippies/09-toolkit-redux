import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";



export const PokemonApp = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch( getPokemons() );

  }, [])
  

  return (
    <>
        <h1>Pokemon App</h1>
        <hr />

        <span>Loading: { !true ? 'True': 'False' }</span>

        <ul>
          {/* { pokemonSlice.map } */}
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
        </ul>

        <button
          // disabled= { isLoading }
          // onClick={ () => dispatch( getPokemons(page) ) }
          >
          Next
        </button>
    </>
  )
}
