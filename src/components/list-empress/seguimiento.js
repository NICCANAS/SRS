import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SeguiServ() {
    //ID usuario activo
    const userID = localStorage.getItem('loggedId');

    const [cancellUseEffect, setCancel] = useState(false);
    const [servicios, setServicios] = useState([]);//Establecer los servicios

    //////////FUNCIONES
    useEffect(() => {
        //Establecer las ordenes creadas por el usuario
        if (!cancellUseEffect) {
            setServiciosOracle();
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
        let array = await returnOracle("SELECT CLI.NOM_CLI, CLI.APE_CLI, SERV.NOM_SERV, ORD.FECHA_INI, EST.NOM_ESTADO FROM ORDEN_SERV ORD INNER JOIN SERVICIO SERV ON ORD.SERVICIO_ID_SERV=SERV.ID_SERV INNER JOIN ESTADO_SERV EST ON ORD.ESTADO_SERV_ID_ESTADO=EST.ID_ESTADO INNER JOIN CLIENTE CLI ON ORD.CLIENTE_RUT_CLI=CLI.RUT_CLI WHERE SERV.EMPRESA_RUT_EMP='" + userID + "'");
        setServicios(array);
        console.log(array);
    }

    return (
        <body class="antialiased font-sans ">
            <div class="container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div>
                    </div>
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Cliente
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Servicio
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Fecha
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Estado
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {servicios.map((serv) => (
                                        <tr>
                                            {/* Nombre usuario */}
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div class="flex items-center">
                                                    <div class="ml-3">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            {serv[0]} {serv[1]}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Servicio */}
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">{serv[2]}</p>
                                            </td>

                                            {/* Fecha */}
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    {serv[3]}
                                                </p>
                                            </td>
                                            {/* Aca siempre serian los activos */}
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span
                                                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span aria-hidden
                                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                    <span class="relative">{serv[4]}</span>
                                                </span>
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