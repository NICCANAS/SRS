import Layout from "../../hocs/layouts/layout"
import AlmostPay from "../../components/list-services/AlmostPay"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';

function CasiMoney () {
    const { serviceID } = useParams();
    const [cancellUseEffect, setCancel] = useState(false);
    const [servicio, setServicio] = useState([]);//Establecer los servicios

    ///////////////////////////////Funciones
    useEffect(() => {
        //Establecer los servicios
        if (!cancellUseEffect) {
            console.log("Service ID: "+serviceID)
            setServiceOracle();
            setCancel(true);
        }
    });

    //API de oracle
    async function returnOracle(string) {
        const params = {
            query: string,//las query no deben terminar en ";"
        }
        const res = await axios.get('http://127.0.0.1:8000/oracleAPI/', { params });
        return res.data.query;
    }

    //Recoger las comunas de la base de datos y ponerlas en la constante
    async function setServiceOracle() {
        let array = await returnOracle("SELECT * FROM SERVICIO WHERE ID_SERV="+serviceID);
        setServicio(array[0]);//Los servicios estan devolviendose en un array de arrays
    }

    return (
        <Layout>
            <AlmostPay id={servicio[0]} 
            nombre={servicio[1]} 
            descripcion={servicio[2]} 
            valor={servicio[3]} 
            direccion={servicio[4]} 
            dias={servicio[5]} 
            horas={servicio[6]} 
            tipo={servicio[7]} 
            empresaRut={servicio[8]} 
            imgURL={servicio[9]}/>
        </Layout>
    )
}
export default CasiMoney;