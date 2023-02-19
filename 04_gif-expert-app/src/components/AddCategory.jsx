import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

   const [inputValue, setInputValue] = useState('');
   const onInputChange = (event) => {
      // otra alternativa seria destructurar el evento y sacar el target: ({target}) =>
      setInputValue(event.target.value);
      // console.log(event.target.value);
   }
   const onSubmit = (event) => {
      event.preventDefault();
      if(inputValue.trim().length <1) return;
      // console.log(inputValue);
      // onAddCategoriesSet( categories => [inputValue,...categories]);
      onNewCategory(inputValue.trim());
      setInputValue('');
   }
   return (
      <form onSubmit={ onSubmit}>
      {/* <form onSubmit={(event) => onSubmit(event)}> */}
      
         <input type="text"
            placeholder=" Buscar Gifs"
            value={inputValue}
            // se recive eel evento que hay en el input
            onChange={onInputChange}
         // onChange=  {(event) => onInputChange(event)}, esto es lo mismo que lo de arriba
         />
      </form>


   )
}
