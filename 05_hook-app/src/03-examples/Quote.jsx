import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({name, species, image}) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width: 0 , height: 0});
  
  useLayoutEffect(() => {
     const {width, height} =  pRef.current.getBoundingClientRect() ;
      setBoxSize({width, height})
  }, [name])
  return (
    <> 

    <img src={image} alt={`imagen de ${name}`}  />
    <hr />
    <blockquote 
    className='blockquote text-end' 
    style={{display: 'flex'}}>

      <p ref={pRef} className='mb-1'> {name} </p>
      <footer className='blockquote-footer '> {species}</footer>
    </blockquote>

    <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
