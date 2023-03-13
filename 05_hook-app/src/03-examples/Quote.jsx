import React from 'react'

export const Quote = ({name, species, image}) => {
  return (
    <> 

    <img src={image} alt={`imagen de ${name}`}  />
    <blockquote className='blockquote text-center'>
      <p className='mb-1'> {name} </p>
      <footer className='blockquote-footer'> {species}</footer>
    </blockquote>


    </>
  )
}
