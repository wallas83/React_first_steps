import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import {App} from './HellloWorldApp';
import {CounterApp} from './counterApp';
import './styles.css';
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      {/* <FirstApp title = "Hola, Soy wilson" subTitle={1234}></FirstApp> */}
      <CounterApp value={0}></CounterApp>
    </React.StrictMode>
  );

 