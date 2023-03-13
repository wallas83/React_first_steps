import {React, memo} from 'react'

export const Smally = memo (({value}) => {

    console.log('me volvia gfenerarz');
  return (
    <small> {value} </small>
  )
})
