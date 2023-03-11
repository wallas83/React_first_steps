import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [coords, setCoords] = useState({x:0, y:0});
    useEffect(() => {
      // console.log('message mounted')\
      const onMouseMove = ( {x, y}) => {
        // const coords = {x,y};
        // console.log(coords);
        setCoords({x,y});
      }
      //es mejor eliminarlo por refrencia ya que es el mismo al momento de crearce
      window.addEventListener('mousemove', onMouseMove );
      //esta funcion de return hace la limpieza en memoria para que no haya fugas
      return () => {
      //  console.log('message unmounted')
        window.removeEventListener('mousemove', onMouseMove);
      }
    }, []);
    
  return (
    <>
        <h1> usuario ya existe</h1>
        {JSON.stringify( coords)}
    </>
  )
}
