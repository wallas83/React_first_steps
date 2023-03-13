import React, { useState } from 'react'
import { useCounter } from '../hooks'
import { Smally } from './Small'

export default function Memorize() {
const {counter, increment} = useCounter(10)
const [show, setShow] = useState(true)
  return (
    <>
        <h1>Counter: <Smally value={counter} /> </h1>
        <hr />

        <button
            className='btn btn-primary'
            onClick={()=> increment()}
        >   

            +1
        </button>

        <button
            className='btn btn-secondary'
            onClick={() => setShow( !show)}
        >
                Show/ocultar {JSON.stringify(show)}
        </button>
    </>
  )
}
