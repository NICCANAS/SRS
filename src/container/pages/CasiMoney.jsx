import Layout from "../../hocs/layouts/layout"
import AlmostPay from "../../components/list-services/AlmostPay"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';

function CasiMoney () {
    const { serviceID } = useParams();
    const [cancellUseEffect, setCancel] = useState(false);
    const [servicio, setServicio] = useState([]);//Establecer los servicios
    
    const [resennaAVG, setResennaAVG] = useState(0);
    const [resennaCount, setResennaCount] = useState(0);//Cantidad de las reseñas (para ponerlo en parentesis)

    ///////////////////////////////Funciones
    useEffect(() => {
        //Establecer los servicios
        if (!cancellUseEffect) {
            console.log("Service ID: "+serviceID)
            setServiceOracle();
            setResennasOracle();
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

    //Recoger los datos del servicio
    async function setServiceOracle() {
        let array = await returnOracle("SELECT SV.ID_SERV, SV.NOM_SERV, SV.DESCP_SERV, SV.VALOR_SERV, SV.DIREC_SERV, SV.DIAS_SERV, SV.HORAS_SERV, TS.NOM_TIPSERV, EMP.NOM_EMP, SV.IMG_REF FROM SERVICIO SV INNER JOIN EMPRESA EMP ON SV.EMPRESA_RUT_EMP=EMP.RUT_EMP INNER JOIN TIPO_SERVICIO TS ON SV.TIPO_SERVICIO_ID_TIPSERV=TS.ID_TIPSERV WHERE SV.ID_SERV="+serviceID);
        setServicio(array[0]);//Los servicios estan devolviendose en un array de arrays
    }
    //Recoger las resennas (valores) de ese servicio
    async function setResennasOracle() {
        let avg = await returnOracle("SELECT NVL(ROUND(AVG(VAL_RES)),0) FROM RESENNA_SERV WHERE SERVICIO_ID_SERV=" + serviceID + "");
        let count = await returnOracle("SELECT COALESCE(COUNT(*), 0) FROM RESENNA_SERV WHERE SERVICIO_ID_SERV=" + serviceID + "");
        setResennaAVG(avg);
        setResennaCount(count);
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
            empresaNom={servicio[8]} 
            imgURL={servicio[9]}
            avgRes={resennaAVG}
            countRes={resennaCount}
            />
        </Layout>
    )
}
export default CasiMoney;