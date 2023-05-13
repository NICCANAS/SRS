import { connect } from 'react-redux'
import CardServs from "../../components/list-services/cardservs"
import Barbusq from '../../components/list-services/barbusq'
import Seguiserv from './Seguiserv'
import PerfilUsu from './perfilusu'
import HistoUsu from './histoServusu'
import ResennaPorqueria from './resennausu'
import React from 'react'
import { useNavigate  } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';

function ListServs() {
    //ID usuario activo
    const userID = localStorage.getItem('loggedId');
    const userType = localStorage.getItem('loggedType');

    const [userData, setUserData] = useState([])
    const [cancellUseEffect, setCancel] = useState(false);
    const [active, setActive] = useState("Cardserv")
    const [servicios, setServicios] = useState([]);//Establecer los servicios

    //Redireccion
    const navigate = useNavigate();

    ///////////////////////////////Funciones
    useEffect(() => {
        //Establecer los servicios y los datos del usuario
        if (!cancellUseEffect) {
            setUserDataOracle();
            setServicesOracle();
            setCancel(true);
        }
    });

    function closeSession(){
        localStorage.removeItem('loggedId');//Eliminar el id del usuario en localStorage
        localStorage.removeItem('loggedType');//Eliminar el tipo de usuario (cliente-empresa)
        //Mandarlo al login
        navigate('/Login');
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
    async function setUserDataOracle(){
        if (userType == "cli"){
            let data = await returnOracle("SELECT NOM_CLI, IMG_PERF FROM CLIENTE WHERE RUT_CLI="+userID);
            setUserData(data[0]);//los datos se devuelven como un array de un array
            
        } else if (userType == "emp"){
            let data = await returnOracle("SELECT NOM_EMP, IMG_EMP FROM EMPRESA WHERE RUT_EMP="+userID);
            setUserData(data[0]);//los datos se devuelven como un array de un array
            
        } else{
            //Aqui devolver a la pagina principal, pues, si no tiene tipo, no esta logeado
            //La validacion de la redireccion se hace en App.js
            console.log("No esta logueado")
        }
    }

    //Recoger las comunas de la base de datos y ponerlas en la constante
    async function setServicesOracle() {
        let array = await returnOracle("SELECT * FROM SERVICIO");
        setServicios(array);
        console.log(array);
    }

    //Recorrer la constante, crear los componentes y almacenarlos dentro de otra constante para poder llamarlo en front-end
    const carservConst =  servicios.map((sv) => (
        <CardServs 
        id={sv[0]} 
        nombre={sv[1]} 
        descripcion={sv[2]}
        valor={sv[3]}
        direccion={sv[4]}
        dias={sv[5]}
        horas={sv[6]}
        tipoId={sv[7]}
        empresaRut={sv[8]}
        imagenUrl={sv[9]}/>
    ));

    return (
        <div class="flex flex-wrap bg-gray-100 w-full h-screen">
            <div class="w-3/12 bg-white rounded p-3 shadow-lg">
                <div class="flex items-center space-x-4 p-2 mb-5">
                    {/* Rescatar perfil del usuario */}
                    <img class="h-12 rounded-full" alt='fotousu' src={userData[1]} />
                    <div>
                    {/* Rescatar nombre del usuario */}
                        <h4 class="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">{userData[0]}</h4>
                        <span class="text-sm tracking-wide flex items-center space-x-1">
                        </span>
                    </div>
                </div>
                {/* Listado de opciones */}
                <ul class="space-y-2 text-sm">
                    <li>
                        <a onClick={() => setActive("Cardserv")} class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline">
                            <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <span>Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => setActive("SeguirServ")} class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                </svg>
                            </span>
                            <span>Seguimiento servicios</span>
                        </a>
                    </li>

                    <li>
                        <a onClick={() => setActive("HistoUsu")} class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </span>
                            <span>Historial servicios</span>
                        </a>
                    </li>

                    <li>
                        <a onClick={() => setActive("resennaUsu")} class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span >Crear reseña</span>
                        </a>
                    </li>

                    <li>
                        <a onClick={() => setActive("Cambiarperfil")} class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span >Mi Perfil</span>
                        </a>
                    </li>

                    <li>
                        <a onClick={() => closeSession()} class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                            <span class="text-gray-600">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </span>
                            <span>Cerrar sesión</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Componentes a mostrar */}
            <div class="w-9/12">
                <div class="p-4 text-gray-500">
                    {/* La barra de busqueda */}
                    {active === "Cardserv" && <Barbusq />}
                    {active === "Cardserv" && carservConst}
                    {active === "SeguirServ" && <Seguiserv/>}
                    {active === "Cambiarperfil" && <PerfilUsu/>}
                    {active === "HistoUsu" && <HistoUsu/>}
                    {active === "resennaUsu" && <ResennaPorqueria />}
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(ListServs)

