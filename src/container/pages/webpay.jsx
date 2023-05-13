import Layout from "../../hocs/layouts/layout"
import React, { useState } from 'react';
import axios from 'axios';

function WebpayTransaction() {
    const [webpayData, setWebpay] = useState("");
    const [finish, setFinish] = useState(false);
    const queryParameters = new URLSearchParams(window.location.search)
    const token = queryParameters.get("token_ws")

    if (!finish){    
         webpayTokenStatus(token);
        console.log("token: "+token);
        setFinish(true);//A veces el proceso entra en bucle
    }
    

    //API de oracle
    async function returnOracle(string) {
        const params = {
            query: string,//las query no deben terminar en ";"
        }
        const res = await axios.get('http://127.0.0.1:8000/oracleAPI/', { params });
        return res.data.query;
    }

    async function webpayTokenStatus(tkn) {
        const params  = {
            token: tkn,//recoger el valor del prop para pasarlo a la funcion webpay
          }
        console.log("el token que le envio: "+params.token)
        const res = await axios.post('http://127.0.0.1:8000/webpayAPI/', params );
        console.log(res.data);
        setWebpay(res.data)//Esto es exclusivamente para manejar los datos en front-end (vease cambiar los componentes o similar)
        
        let code = res.data.code;
        let id = res.data.order_id;

        if (code == 0){
            //Modificar los valores de la transaccion para que asi pase a estar como pagada
            await returnOracle("UPDATE ORDEN_SERV SET ORD_ESTADO_ID_PAGO=1 WHERE ID_ORD="+id+"");
        } else {
            //La transaccion fue rechazada, por ende, eliminar esa orden de servicio
            await returnOracle("DELETE FROM ORDEN_SERV WHERE ID_ORD="+id+"");
        }
        
    }

    return (
        <Layout>
        <p>El token es: {token}</p>
        <p>El order id del token es: {webpayData.order_id}</p>
        {webpayData.code === 0 && <p>La transaccion es valida</p>}
        {webpayData.code === -1 && <p>La transaccion NO es valida</p>}
        </Layout>
    )
}
export default WebpayTransaction;