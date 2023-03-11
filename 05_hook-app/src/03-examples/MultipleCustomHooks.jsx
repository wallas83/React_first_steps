import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

  console.log({ data, isLoading, hasError })
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
          ? (

            <div className=' alert alert-info text-center'>
              Loading...
            </div>
          )
          : (
            <> 

            <img src={image} alt={`imagen de ${name}`}  />
            <blockquote className='blockquote text-center'>
              <p className='mb-1'> {name} </p>
              <footer className='blockquote-footer'> {species}</footer>
            </blockquote>


            </>
          )

      }

      <button onClick={() => increment(1)} className="btn btn-primary mt2" disabled={isLoading}>
        next quote
      </button>


    </>
  )
}
