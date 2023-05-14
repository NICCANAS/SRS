import { connect } from 'react-redux'
import { ReactComponent as SvgLogoUsado } from '../../components/svg/logo_empresa.svg'
import { Link } from 'react-router-dom'
//constantes, uso de API y ref para el formulario
import React, { useState, useRef } from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');//Recoger el email del input
    const [password, setPassword] = useState('');//Recoger el password del input

    const formRef = useRef(null);//Cree una referencia al formulario, para poder utilizar submit en la funcion onSubmitHandler

    //Establece el email a medida que el usuario va escribiendo
    const emailChange = event => {
        setEmail(event.target.value);
    };
    //Establece la contraseña a medida que el usuario esta escribiendo
    const passwordChange = event => {
        setPassword(event.target.value);
    };

    //Consultar oracle sobre la contraseña del usuario
    async function oracleCheckUser() {
        const params = {
            query: "SELECT COALESCE(COUNT(*), 0) FROM CLIENTE WHERE CORREO_CLI='" + email + "' AND CONTRA_CLI='" + password + "'",//las query no deben terminar en ";"
        }
        console.log(params.query)
        const res = await axios.get('http://127.0.0.1:8000/oracleAPI/', { params });

        return res.data.query[0]//Devuelve un array con un dato, por lo que le pido el primero
    }

    //Recoger el rut del usuario despues de validar email y contraseña
    async function oracleGetRut(){
        const params = {
            query: "SELECT RUT_CLI FROM CLIENTE WHERE CORREO_CLI='" + email + "'",//las query no deben terminar en ";"
        }
        console.log(params.query)
        const res = await axios.get('http://127.0.0.1:8000/oracleAPI/', { params });

        return res.data.query;
    }

    //Evento que maneja la validacion del formulario
    async function onSubmitHandler(e) {
        e.preventDefault();//Evitar que el formulario se envie
        //--Validacion en front end--
        //Validacion Email Vacio
        if (email == "") {
            alert('El campo email NO puede estar vacio!')
            return;
        }

        if (password.length == 0) {
            alert('El campo clave NO puede estar vacio!')
            return;
        }


        //--Validacion en back end--
        let res = await oracleCheckUser();
        if (res == 1) {
            //Guardar la id del usuario activo mas tipo cliente
            let rut = await oracleGetRut();
            //Loguear al usuario con local storage
            localStorage.setItem('loggedId', rut);
            localStorage.setItem('loggedType', 'cli');
            //Subir el formulario para pasar de pagina
            formRef.current.submit();
        } else {
            alert('El usuario o la contraseña son incorrectos')
        }

    }

    return (
        <div class='h-screen bg-gradient-to-r from-pink-700 to-purple-900'>
            <section class="bg-gray-50 dark:bg-gray-900 h-screen bg-gradient-to-r from-green-400 to-purple-600">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <SvgLogoUsado />
                    </a>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <Link to="/" type="button" class=" rotate-180 flex flex-row text-indigo-700 border border-indigo-700 hover:bg-indigo-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-indigo-500 dark:text-indigo-500 dark:hover:text-white dark:focus:ring-indigo-800 dark:hover:bg-indigo-500">
                                <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Icon description</span>
                            </Link>
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Inicio de Sesion
                            </h1>
                            {/* Cambio de componente */}
                            <div class="flex overflow-x-auto whitespace-nowrap">
                            {/* Login cliente */}
                                <Link class="inline-flex items-center h-12 px-2 py-2 text-center text-gray-700 border border-b-0 border-gray-300 sm:px-4 dark:border-gray-500 rounded-t-md -px-1 dark:text-white whitespace-nowrap focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                    </svg>

                                    <span class="mx-1 text-sm sm:text-base">
                                        Cliente
                                    </span>
                                </Link>

                                {/* Login empresa */}
                                <Link to="/LoginEmp" class="inline-flex items-center h-12 px-2 py-2 text-center text-gray-700 bg-transparent border-b border-gray-300 sm:px-4 dark:border-gray-500 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>

                                    <span class="mx-1 text-sm sm:text-base">
                                        Empresa / Pymes
                                    </span>
                                </Link>
                            </div>
                            {/* Inicio del form */}
                            <form class="space-y-4 md:space-y-6" action="/Listservs" onSubmit={onSubmitHandler} ref={formRef}>
                                <div>
                                    {/* Email */}
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                                    <input type="email" name="email" id="email" onChange={emailChange} value={email} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nombre@direccion.com" required="" />
                                </div>
                                <div>
                                    {/* Password */}
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                    <input type="password" name="password" id="password" onChange={passwordChange} value={password} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                {/* <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-indigo-50 focus:ring-3 focus:ring-indigo-300 dark:bg-indigo-700 dark:border-indigo-600 dark:focus:ring-indigo-600 dark:ring-offset-indigo-800" required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            
                                            <label for="remember" class="text-gray-500 dark:text-gray-300">Recordarme en este equipo</label>
                                        </div>
                                    </div>
                                    
                                    <Link to="/forgotpass" class="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-500">¿Olvidaste tu Contraseña?</Link>
                                </div> */}
                                {/* boton submit */}
                                <button type="submit" class="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-primary-800">Ingresar</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    ¿No te encuentras registrado?
                                    <Link to="/Register" className="font-medium text-indigo-600 hover:underline dark:text-indigo-500"> Registrarse</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(Login)