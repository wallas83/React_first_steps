import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks'


const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('ahi vamos');

  }

  return `${ iterationNumber} iteraciones realizadas`
}

export default function MemoHook() {
  const { counter, increment } = useCounter(500);
  const [show, setShow] = useState(true);
  //redibuja cada vez que counter cambie
  const memorizedValue =  useMemo( () => heavyStuff(counter), [counter])
  return (
    <>
      <h1>Counter MeMoHook: <small>{counter}</small> </h1>
      <hr />

      <h4>{ memorizedValue }</h4>
      <button
        className='btn btn-primary'
        onClick={() => increment()}
      >

        +1
      </button>

      <button
        className='btn btn-secondary'
        onClick={() => setShow(!show)}
      >
        Show/ocultar {JSON.stringify(show)}
      </button>
    </>
  )
}
