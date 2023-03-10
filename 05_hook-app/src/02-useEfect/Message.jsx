import React, { useEffect } from 'react'

export const Message = () => {
    useEffect(() => {
      console.log('message mounted')
    
      return () => {
       console.log('message unmounted')
      }
    }, [])
    
  return (
    <>
        <h1> usuario ya existe</h1>
    </>
  )
}
