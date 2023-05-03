import React, { useState, useEffect } from 'react';
import axios from 'axios';

 function MyComponent() {
 const [data, setData] = useState(null);//data es para ocuparlo en el return

 /*
  useEffect(() => {

    async function oracle(){
      const response = await axios.get('/getCSRFToken');
      axios.defaults.headers.post['X-CSRF-Token'] = response.data.CSRFToken;

      console.log(response.data.CSRFToken);

      let data = new FormData();
      data.append("query", "SELECT * FROM jordan");
      data.append("csrfmiddlewaretoken", '{{csrf_token}}');
      const res = await axios.post('http://127.0.0.1:8000/oracleAPI/', data);
      setData(res.data);
      console.log(res.data);
    }
    
    oracle();

    //Hacerle un get a la funcion de webpay
    /* async function loadWebpay(){
      const res =  await axios.get('http://127.0.0.1:8000/webpayAPI/');
      setData(res.data);
      console.log(res.data);
      console.log("restoken: " + res.data.token);
      console.log("resamoun: " + res.data.amount);

    }
    
    loadWebpay(); */
    //console.log("data: " + data);
    
    /* async function createWebpay(){
      let data = new FormData();
      data.append("plata", 13201230) 
      data.append("csrfmiddlewaretoken", '{{csrf_token}}')

      const res = await axios.post('http://127.0.0.1:8000/webpayAPI/',data);//Tener en cuenta que 127.0.0.1 se debe cambiar por localhost si es que al ejecutar manage.py es localhost
      console.log(res);
      console.log(res.data);
    }

    createWebpay(); */

  //}, []);  

  async function createWebpayButton(){
    const res =  await axios.get('http://127.0.0.1:8000/webpayAPI/');
      setData(res.data);
      console.log(res.data);
      console.log("restoken: " + res.data.token);
      console.log("resamoun: " + res.data.amount);
  }

  async function oracleButton(string){
    const response = await axios.get('/getCSRFToken');
    axios.defaults.headers.post['X-CSRF-Token'] = response.data.CSRFToken;

    console.log(response.data.CSRFToken);

    /* let data = new FormData();
    data.append("query", "SELECT * FROM jordan");
    data.append("csrfmiddlewaretoken", '{{csrf_token}}'); */
    const params  = {
      query: string,//"INSERT INTO JORDAN (ID_JO,NOM_JO,DESC_JO) VALUES (3, 'joldan3', 'probando desde react/django')",//las query no deben terminar en ";"
    }
    const res = await axios.get('http://127.0.0.1:8000/oracleAPI/', {params});
    setData(res.data);
    console.log(res.data);
  }
    
  return (
    <div>
      <button onClick={createWebpayButton}>Ejecutar Webpay</button>
      <button onClick={() => oracleButton("SELECT * FROM jordan")}>SQL Query</button>
        {/* <button onClick={WebpayClickGET}>Ejecutar webpay get</button> 
        <button onClick={WebpayClickPOST}>Ejecutar webpay post</button>  */}
    </div>
  );
}

export default MyComponent;