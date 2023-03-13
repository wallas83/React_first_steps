import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    const incrementFather = useCallback(
        () => {
            //value es el valor actual de counter, de esa forma solo se actualiza el valor 
            //ya que counter esta en memorizado tambien 
            setCounter( (value) => value + 1);
        },
        [],
    )

    // const incrementFather = ()=> {
    //     setCounter(counter + 1);
    // }
    return (
        <>
            <h1> useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    )
}
