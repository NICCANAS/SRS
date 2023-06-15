import { connect } from 'react-redux'
import RealmodEmp from '../list-empress/realmodemp'
//constantes, uso de API y ref para el formulario
import { useState, useEffect } from 'react'
import axios from 'axios';

function ModEmp() {
    //ID usuario activo
    const userID = localStorage.getItem('loggedId');

    const [active, setActive] = useState("listemp")

    const [cancellUseEffect, setCancel] = useState(false);
    const [servicios, setServicios] = useState([]);//Establecer los servicios
    const [selectedService, setSelectedService] = useState([]);//Establecer el servicio elegido

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
        let array = await returnOracle("SELECT SV.ID_SERV, SV.NOM_SERV, SV.VALOR_SERV, TS.NOM_TIPSERV FROM SERVICIO SV INNER JOIN TIPO_SERVICIO TS ON SV.TIPO_SERVICIO_ID_TIPSERV=TS.ID_TIPSERV WHERE SV.EMPRESA_RUT_EMP='" + userID + "'");
        setServicios(array);
        console.log(array);
    }

    async function showService(id){
        let serviceArray = await returnOracle("SELECT ID_SERV, NOM_SERV, DESCP_SERV, VALOR_SERV, DIREC_SERV, DIAS_SERV FROM SERVICIO WHERE ID_SERV="+id+"");
        setSelectedService(serviceArray[0]);
        setActive("RealmodEmp");
    }
    return (

        <body className="antialiased font-sans ">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Servicio
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Tipo Servicio
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Valor
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {servicios.map((serv) => (
                                        <tr>
                                            {/* Nombre de la publicación */}
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {serv[1]}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Trabajo */}
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{serv[3]}</p>
                                            </td>

                                            {/* Valor */}
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">$ {serv[2]}</p>
                                            </td>

                                            {/* Aca seria el boton modificar */}
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <a id='idModificarA' onClick={() => showService(serv[0])}
                                                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span aria-hidden id='IdModificarSpan'
                                                        className="absolute inset-0 bg-amber-600 opacity-50 rounded-full"></span>
                                                    <span id='IdModificarSpan2'className="relative">Modificar</span>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* Aca en este button se puede cambiar el listado de cosas que hay arriba o sea literal cambiar de pagina */}
                            <div
                                class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                                <span class="text-xs xs:text-sm text-gray-900">
                                </span>
                                <div class="inline-flex mt-2 xs:mt-0">
                                    <button
                                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l ">
                                        Atrás
                                    </button>
                                    <button
                                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                        Siguiente
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {active === "RealmodEmp" && <RealmodEmp id={selectedService[0]} nombre={selectedService[1]} descripcion={selectedService[2]} valor={selectedService[3]} direccion={selectedService[4]} dias={selectedService[5]}/>}

        </body>

    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(ModEmp)