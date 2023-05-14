import Layout from "../../hocs/layouts/layout"
import Paymentsucc from "../../components/list-services/PaymentSucc"
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function WebpayTransaction() {
    const [webpayData, setWebpay] = useState("");
    const [finish, setFinish] = useState(false);
    const queryParameters = new URLSearchParams(window.location.search)
    const token = queryParameters.get("token_ws")
    const badToken = queryParameters.get("TBK_TOKEN")
    const badOrder = queryParameters.get("TBK_ORDEN_COMPRA")
    
    //Redireccion
    const userType = localStorage.getItem('loggedType');
    const navigate = useNavigate();

    console.log("userType: "+userType);
    
    if (userType == "emp"){
        //Si esta logueado como empresa mandarlo a su respectivo contenedor
        navigate('/Empresa');
    } else if (userType == null){
        //si no esta logueado, mandarlo al login cliente
        navigate('/Login');
    }

    if (!finish){    
        //Si no hubo problemas con la transaccion, pasar el token recogido
        if (token != undefined) webpayTokenStatus(token);
        //Si hubo problemas con la transaccion, eliminar la fila de la bdd
        if (badToken != undefined){
            console.log("Se cancelo la transaccion")
            returnOracle("DELETE FROM ORDEN_SERV WHERE ID_ORD="+badOrder+"");
        } 
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
        
        {webpayData.code === 0 && <Paymentsucc code={0} order_id={webpayData.order_id}/>}
        {webpayData.code === -1 && <Paymentsucc code={-1} order_id={webpayData.order_id}/>}

        {/* Este es en caso de que se anule la compra de webpay, lo que provocara que no se devuelva el token normal */}
        {badToken != undefined && <Paymentsucc code={-1}/>}
        
        
        </Layout>
    )
}
export default WebpayTransaction;