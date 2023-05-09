import { connect } from 'react-redux'
import { ReactComponent as SvgLogoUsado } from '../../components/svg/logo_empresa.svg'
import { Link } from 'react-router-dom'
//API y ref
import React, { useState, useRef } from 'react';
import axios from 'axios';

function Login() {
//const [queryData, setQuery] = useState([]);//Recoger los elementos de sql
const [email, setEmail] = useState('');//Recoger el email del input
const [password, setPassword] = useState('');//Recoger el password del input

const formRef = useRef(null);//Creo una referencia al formulario, para poder utilizar submit en la funcion onSubmitHandler

//Establece el email a medida que el usuario va escribiendo
const emailChange = event => {
    setEmail(event.target.value);
    //console.log('email es:', event.target.value);
};
//Establece la contraseña a medida que el usuario esta escribiendo
const passwordChange = event => {
    setPassword(event.target.value);
    //console.log('password es:', event.target.value);
};

//Consultar oracle sobre la contraseña del usuario
async function oracleCheckUser(){
    const params  = {
      query: "SELECT COALESCE(COUNT(*), 0) FROM CLIENTE WHERE CORREO_CLI='"+email+"' AND CONTRA_CLI='"+password+"'",//las query no deben terminar en ";"
    }
    console.log(params.query)
    const res = await axios.get('http://127.0.0.1:8000/oracleAPI/', {params});

    return res.data.query[0]//Devuelve un array con un dato, por lo que le pido el primero
} 

  //Evento que maneja la validacion del formulario
async function onSubmitHandler(e){
    e.preventDefault();//Evitar que el formulario se envie
    console.log("Validando el submit");
    let res = await oracleCheckUser();
    console.log("resultado: "+res);
    if (res == 1){
        console.log("se subio el form")
        //Despues de validar, enviar el formulario manualmente
        formRef.current.submit();
    } else {
        console.log("poner aqui el validador")
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
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Inicio de Sesion
                            </h1>
                            {/* Inicio del form */}
                            <form class="space-y-4 md:space-y-6" action="#" onSubmit={onSubmitHandler} ref={formRef}>
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
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            {/* checkbox recordar*/}
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-indigo-50 focus:ring-3 focus:ring-indigo-300 dark:bg-indigo-700 dark:border-indigo-600 dark:focus:ring-indigo-600 dark:ring-offset-indigo-800" required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            {/* label recordar  */}
                                            <label for="remember" class="text-gray-500 dark:text-gray-300">Recordarme en este equipo</label>
                                        </div>
                                    </div>
                                    {/* Boton olvidar contraseña */}
                                    <a href="#" class="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-500">¿Olvidaste tu Contraseña?</a>
                                </div>
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