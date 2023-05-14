import { connect } from 'react-redux'
//import IniEmp from '../list-empress/ini-servs'
import AddServ from '../list-empress/add-servs'
import SeguiServ from '../list-empress/seguimiento'
import HisEmp from '../list-empress/history-servs'
import PerfilEmp from '../list-empress/perfilemp'
import ModEmp from '../list-empress/mod-servs'
import MyEmp from '../list-empress/mi-empresa'
import CardServsemp from "../list-empress/cardEmp"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';


function ListEmp() {
    //ID usuario activo
    const userID = localStorage.getItem('loggedId');
    const userType = localStorage.getItem('loggedType');

    const [userData, setUserData] = useState([])
    const [cancellUseEffect, setCancel] = useState(false);
    const [active, setActive] = useState("IniEmp")
    const [servicios, setServicios] = useState([]);//Establecer los servicios

    ///////////////////////////////Funciones
    useEffect(() => {
        //Establecer los servicios y los datos del usuario
        if (!cancellUseEffect) {
            setUserDataOracle();
            setServicesOracle();
            setCancel(true);
        }
    });

    //Cerrar sesion
    //Redireccion
    const navigate = useNavigate();

    function closeSession() {
        localStorage.removeItem('loggedId');//Eliminar el id del usuario en localStorage
        localStorage.removeItem('loggedType');//Eliminar el tipo de usuario (cliente-empresa)
        //Mandarlo al login
        navigate('/LoginEmp');
    }

    //API de oracle
    async function returnOracle(string) {
        const params = {
            query: string,//las query no deben terminar en ";"
        }
        const res = await axios.get('http://127.0.0.1:8000/oracleAPI/', { params });
        return res.data.query;
    }

    //Recoger los datos del usuario
    async function setUserDataOracle() {
        if (userType == "emp") {
            let data = await returnOracle("SELECT NOM_EMP, CORREO_EMP, DIRECCION_EMP, CEL_EMP, IMG_EMP FROM EMPRESA WHERE RUT_EMP=" + userID);
            setUserData(data[0]);//los datos se devuelven como un array de un array

        } else {
            //Aqui devolver a la pagina principal, pues, si no tiene tipo, no esta logeado
            //La validacion de la redireccion se hace en App.js
            console.log("No esta logueado")
        }
    }

    //Recoger las comunas de la base de datos y ponerlas en la constante
    async function setServicesOracle() {
        let array = await returnOracle("SELECT * FROM SERVICIO WHERE EMPRESA_RUT_EMP="+userID);
        setServicios(array);
        console.log(array);
    }

    //Recorrer la constante, crear los componentes y almacenarlos dentro de otra constante para poder llamarlo en front-end
    const carservConst = servicios.map((sv) => (
        <CardServsemp
            id={sv[0]}
            nombre={sv[1]}
            descripcion={sv[2]}
            valor={sv[3]}
            direccion={sv[4]}
            dias={sv[5]}
            horas={sv[6]}
            tipoId={sv[7]}
            empresaRut={sv[8]}
            imagenUrl={sv[9]} />
    ));

    return (
        <div class="flex flex-wrap bg-gray-100 w-full h-screen">
            <div class="w-3/12 bg-white rounded p-3 shadow-lg">
                <div onClick={() => setActive("MyEmp")} class="flex items-center space-x-4 p-2 mb-5">
                    <img class="h-12 rounded-full" alt='fotousu' src={userData[4]} />
                    <div>
                        <h4 class="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">{userData[0]}</h4>
                        <span class="text-sm tracking-wide flex items-center space-x-1">
                        </span>
                    </div>
                </div>
                <ul class="space-y-2 text-sm">
                    <li>
                        <a onClick={() => setActive("IniEmp")} class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline">
                            <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <span>Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => setActive("seguimiento")} class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </span>
                            <span >Seguimiento Servicios Activos</span>
                        </a>
                    </li>

                    <li>
                        <a onClick={() => setActive("add-servs")} class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </span>
                            <span>Agregar Servicios</span>
                        </a>
                    </li>

                    <li>
                        <a onClick={() => setActive("ModEmp")} class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </span>
                            <span>Modificar Servicios</span>
                        </a>
                    </li>

                    {/* <li>
                        <a onClick={() => setActive("history-servs")} class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </span>
                            <span>Historial Servicios</span>
                        </a>
                    </li> */}

                    <li>
                        <a onClick={() => setActive("PerfilEmp")} class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span>Mi Empresa</span>
                        </a>
                    </li>

                    <li>
                        <a onClick={() => closeSession()} class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </span>
                            <span>Cerrar Sesión</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="w-9/12">
                <div class="p-4 bg-gradient-to-b from-gray-300 to-gray-100">
                    {/* Aca solo se va mostrar los servicios de la empresa registrada */}
                    {active === "IniEmp" && carservConst}
                    {/* Aca en addservs la empresa agrega servicios.*/}
                    {active === "add-servs" && <AddServ />}
                    {/* Aca es un seguimiento de los clientes pedidos por los usuarios*/}
                    {active === "seguimiento" && <SeguiServ />}
                    {/*Acá mostrar un historial de todos lo servicios hechos???*/}
                    {/* {active === "history-servs" && <HisEmp />} */}
                    {/* Acá solo mostrara la opcion de cambiar el perfil de la empresa */}
                    {active === "PerfilEmp" && <PerfilEmp />}
                    {/* Acá invoca al componente de modificar servicio */}
                    {active === "ModEmp" && <ModEmp />}
                    {/*Acá invoco al componente de mi Empresa*/}
                    {active === "MyEmp" && <MyEmp nombre={userData[0]} correo={userData[1]} direccion={userData[2]} celular={userData[3]} imagenUrl={userData[4]}/>}

                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(ListEmp)