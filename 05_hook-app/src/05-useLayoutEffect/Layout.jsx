import React from 'react'

import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';


export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

  // console.log({ data, isLoading, hasError })
  // si la data tiene valor toma el valor de la data en la posicion 0
  // para este caso espoecifico no se usa [] por que no es un array
  // const {name, species} = !!data && data[0];
  const { name, species, image } = !!data && data;
  return (
    <>
      <h1>rick an morty </h1>
      <hr />
      {
        (isLoading)
          ?
           <LoadingQuote />
          : 
            <Quote name={name} species={species} image={image}/>
          

      }

      <button onClick={() => increment(1)} className="btn btn-primary mt2" disabled={isLoading}>
        next
      </button>


    </>
  )
}
