import React, { useState, useEffect } from 'react';
import axios from 'axios';

 function Testeando() {
 const [data, setData] = useState(null);//data es para ocuparlo en el return

 //Crear transaccion de webpay
  async function createWebpayButton(){
    const res =  await axios.get('http://127.0.0.1:8000/webpayAPI/');
      setData(res.data);
      console.log(res.data);
  }

  //hacer una consulta a oracle
  async function oracleButton(string){
    const response = await axios.get('/getCSRFToken');
    axios.defaults.headers.post['X-CSRF-Token'] = response.data.CSRFToken;

    console.log(response.data.CSRFToken);

    /* let data = new FormData();
    data.append("query", "SELECT * FROM jordan");
    data.append("csrfmiddlewaretoken", '{{csrf_token}}'); */
    const params  = {
      query: string,//las query no deben terminar en ";"
    }
    const res = await axios.get('http://127.0.0.1:8000/oracleAPI/', {params});
    setData(res.data);
    console.log(res.data);
  }

  async function wspMessage(phn,msg){
    const params = {
      phone: phn,
      message: msg,
    }

    const res =  await axios.get('http://127.0.0.1:8000/wspMessage/', {params});

    setData(res.data);
    console.log(res.data);
  }
    
  return (
    <div>
      <div>
        <button onClick={createWebpayButton}>Ejecutar Webpay</button>
      </div>
      <div>
      <button onClick={() => oracleButton("SELECT * FROM jordan")}>SQL Query</button>
      </div>
      <div>
        <button onClick={() => wspMessage("56930739222","Ola, este es el mensaje de prueba de react")}>Mandar mensaje por wsp</button>
      </div>
    </div>    
  );
}

export default Testeando;