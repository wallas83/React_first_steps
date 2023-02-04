import {useState} from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState (value);
    
    const  handleAdd = () =>{
        // setCounter( counter + 1);
        setCounter(  (c) => c +1);
    }
    const  handless = () =>{
        // setCounter( counter + 1);
        setCounter(  (c) => c -1);
    }
    const  handleReset = () =>{
        // setCounter( counter + 1);
        setCounter(  (c) => value);
    }
    return(
        <>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <button onClick={ handleAdd}>sumar +1</button>
        <button onClick={handless }>restar -1</button>  
        <button onClick={ handleReset }>resetear</button>
        </>
    );
}

CounterApp.propTypes ={
    value: PropTypes.number.isRequired
}