import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'
import axios from 'axios';

//una api que, lo unico que hace, es llamar django y pedirle que haga un print
function printAPI(stringf){
  const params  = {
    string: stringf,
  }
  axios.get('http://127.0.0.1:8000/printAPI/', {params});
  
}

if (!localStorage.getItem('pageCounter')) {
  printAPI("//////////\nNo se detecto pageCounter asi que se creo de nuevo en 0");
  localStorage.setItem('pageCounter', '0');
}



function limpiarLocalStorage() {
  const contador = parseInt(localStorage.getItem('pageCounter'), 10) || 0;
  printAPI("Contador de local storage al limpiar: "+contador);
  localStorage.clear();
}

window.onbeforeunload = function() {
  limpiarLocalStorage();
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
