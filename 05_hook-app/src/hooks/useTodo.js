

import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer'

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false
    // },

    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra del almillas',
    //     done: false
    // },


];

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos')) || [];
}
export const useTodo = () => {

   
    //el state es el todos que serial el initialstate
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos))

    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        // console.log({todo});
        dispatchTodo(action)
    }

    const handleDeleteTodo = ( id) => {
        dispatchTodo(
            {
                type: '[TODO] Remove Todo',
                payload: id
            }
        );
    }

    const handleToggleTodo = ( id) => {
        // console.log(id);
        dispatchTodo(
            {
                type: '[TODO] Toggle Todo',
                payload: id
            }
        );
    }


   
  return {
    todos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todosCount : todos.length,
    pendingTodosCount : todos.filter(todo => !todo.done).length

  }
   
  
}
