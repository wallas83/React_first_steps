import React from 'react';
import ReactDOM from 'react-dom/client';
// import { TodoApp } from './08-useReducer/TodoApp';
import {
  RouterProvider,
} from "react-router-dom";
import { MainApp } from './09-useContext/MainApp';
import { RouteMain } from './09-useContext/Route';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer'
// import { CallbackHook } from './06-memos/CallbackHook';
// import MemoHook from './06-memos/MemoHook';
// import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import Memorize from './06-memos/Memorize';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEfect/SimpleForm';


import './index.css'

const router = RouteMain();

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
   <RouterProvider router={router}/>
   </React.StrictMode>,
)
