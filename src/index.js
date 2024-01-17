import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import ListaEspera from './ListaEspera'
import CambiosListaEspera from "./CambiosListaEspera"

import "./listaEspera.css";
import "./mediaListaEspera.css"
{/*import Montaje from './Montaje';
import Actualizacion from './Actualizacion';
import Desmontaje from './Desmontaje';
import "./montaje.css"*/}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ListaEspera/>
    <CambiosListaEspera/>
  </>
);

reportWebVitals();
