import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SeguirServ() {
    //ID usuario activo
    const userID = localStorage.getItem('loggedId');
    //const userType = localStorage.getItem('loggedType');
    const [cancellUseEffect, setCancel] = useState(false);
    const [ordenes, setOrdenes] = useState([]);//Establecer las ordenes de servicios

    ///FUNCIONES
    useEffect(() => {
        //Establecer las ordenes creadas por el usuario
        if (!cancellUseEffect) {
            setOrdenesOracle();
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
    async function setOrdenesOracle() {
        //React no me deja hacer la sentencia en mas de una linea
        let array = await returnOracle("SELECT EMP.IMG_EMP, EMP.NOM_EMP, SERV.NOM_SERV, ORD.FECHA_INI, ESTSERV.NOM_ESTADO FROM ORDEN_SERV ORD INNER JOIN ESTADO_SERV ESTSERV ON ORD.ESTADO_SERV_ID_ESTADO=ESTSERV.ID_ESTADO INNER JOIN SERVICIO SERV ON ORD.SERVICIO_ID_SERV=SERV.ID_SERV INNER JOIN EMPRESA EMP ON SERV.EMPRESA_RUT_EMP=EMP.RUT_EMP WHERE ORD.CLIENTE_RUT_CLI='" + userID + "'");
        setOrdenes(array);
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
                                            Empresa
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
                                    {ordenes.map((ord) => (
                                        <tr>
                                            {/* Columna imagen y nombre empresa */}
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div class="flex items-center">
                                                    {/* Imagen de la empresa */}
                                                    <div class="flex-shrink-0 w-10 h-10">

                                                        <img class="w-full h-full rounded-full"
                                                            src={ord[0]}
                                                            alt="" />
                                                    </div>
                                                    {/* Nombre de la empresa */}
                                                    <div class="ml-3">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            {ord[1]}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            {/* Columna nombre servicio */}
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">{ord[2]}</p>
                                            </td>
                                            {/* Columna fecha de inicio */}
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    {ord[3]}
                                                </p>
                                            </td>
                                            {/* Columna estado de la orden */}
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span
                                                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span aria-hidden
                                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                    <span class="relative">{ord[4]}</span>
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* <div
                                class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                <span class="text-xs xs:text-sm text-gray-900">

                                </span>
                                <div class="inline-flex mt-2 xs:mt-0">
                                    <button
                                        class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                        Atrás
                                    </button>
                                    <button
                                        class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                        Siguiente
                                    </button>
                                </div>
                            </div> */}
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

})(SeguirServ)