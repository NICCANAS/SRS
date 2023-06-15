import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SeguiServ() {
    //ID usuario activo
    const userID = localStorage.getItem('loggedId');

    const [cancellUseEffect, setCancel] = useState(false);
    const [servicios, setServicios] = useState([]);//Establecer los servicios
    const [estOrdenes, setEstOrdenes] = useState([]);

    const handleEstadoChange = (arg) => (event) => {
        let selectedOption = event.target.options[event.target.selectedIndex];
        let value = selectedOption.value;
        let label = selectedOption.text;

        console.log("1): " + value);//Esto es lo que se guardara en la base de datos del usuario
        console.log("2): " + label);//Esto es el label de la opcion, lo puse solamente para ver si recogia bien el dato
        
        returnOracle("UPDATE ORDEN_SERV SET ESTADO_SERV_ID_ESTADO="+value+" WHERE ID_ORD='" + arg + "'");
        //console.log("2): "+valor_sel);
        //setComunaId(value);//Establecer la id de la comuna
    }

    //////////FUNCIONES
    useEffect(() => {
        //Establecer las ordenes creadas por el usuario
        if (!cancellUseEffect) {
            setServiciosOracle();
            setEstadoOrdenesOracle();
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

    //Recoger las ordenes de servicios de la bdd
    async function setServiciosOracle() {
        //React no me deja hacer la sentencia en mas de una linea
        let array = await returnOracle("SELECT CLI.NOM_CLI, CLI.APE_CLI, SERV.NOM_SERV, ORD.FECHA_INI, EST.ID_ESTADO, EST.NOM_ESTADO, ORD.ID_ORD FROM ORDEN_SERV ORD INNER JOIN SERVICIO SERV ON ORD.SERVICIO_ID_SERV=SERV.ID_SERV INNER JOIN ESTADO_SERV EST ON ORD.ESTADO_SERV_ID_ESTADO=EST.ID_ESTADO INNER JOIN CLIENTE CLI ON ORD.CLIENTE_RUT_CLI=CLI.RUT_CLI WHERE SERV.EMPRESA_RUT_EMP='" + userID + "' AND ORD.ORD_ESTADO_ID_PAGO=1");
        setServicios(array);
        console.log(array);
    }

    //Recoger el estado de las ordenes
    async function setEstadoOrdenesOracle() {
        //React no me deja hacer la sentencia en mas de una linea
        let array = await returnOracle("SELECT ID_ESTADO, NOM_ESTADO FROM ESTADO_SERV");
        setEstOrdenes(array);
        console.log(array);
    }

    return (
        <body className="antialiased font-sans ">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Cliente
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Servicio
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Fecha
                                        </th>
                                        {/* <th
                                            class="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Estado
                                        </th> */}
                                        <th
                                            className="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Modificar Estado
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {servicios.map((serv) => (
                                        <tr>
                                            {/* Nombre usuario */}
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {serv[0]} {serv[1]}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Servicio */}
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{serv[2]}</p>
                                            </td>

                                            {/* Fecha */}
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {serv[3]}
                                                </p>
                                            </td>
                                            {/* Aca siempre serian los activos */}
                                           {/*  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span
                                                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span aria-hidden
                                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                    <span class="relative">{serv[5]}</span>
                                                </span>
                                            </td> */}
                                            {/* Modificar estado */}
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                               {/*  <span
                                                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span aria-hidden
                                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                    <span class="relative">{serv[4]}</span> */}
                                                    <select onChange={handleEstadoChange(serv[6])} value={serv[4]} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                        {estOrdenes.map((est) => (
                                                            <option value={est[0]}>{est[1]}</option>
                                                        ))}
                                                    </select>
                                                {/* </span> */}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </body>


    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(SeguiServ)