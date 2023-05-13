import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'
//import axios from 'axios';

//una api que, lo unico que hace, es llamar django y pedirle que haga un print
/* function printAPI(stringf){
  const params  = {
    string: stringf,
  }
  axios.get('http://127.0.0.1:8000/printAPI/', {params});
  
} */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
