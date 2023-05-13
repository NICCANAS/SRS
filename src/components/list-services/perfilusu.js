import { connect } from 'react-redux'
//constantes, uso de API y ref para el formulario
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function PerfilUsu() {
    const userID = localStorage.getItem('loggedId');
    const userType = localStorage.getItem('loggedType');
    //Recoger datos del usuario
    const [cancellUseEffect, setCancel] = useState(false);
    //const [userData, setUserData] = useState([]);

    //Guardar los datos a cambiar
    const [name, setName] = useState('');//nombre
    const [email, setEmail] = useState('');//Correo
    const [password, setPassword] = useState('');//contraseña
    const [Confpassword, setConfPassword] = useState('');//confirmar contraseña

    //Establecer las constantes (set)
    const emailChange = event => { setEmail(event.target.value); };
    const passChange = event => { setPassword(event.target.value); };
    const confPassChange = event => { setConfPassword(event.target.value); };
    const nameChange = event => { setName(event.target.value); };

    //Crear una referencia del formukario
    const formRef = useRef(null);//Cree una referencia al formulario, para poder utilizar submit en la funcion onSubmitHandler

    ///////////////////////////////Funciones
    useEffect(() => {
        //Establecer las comunas  y empresas del combobox
        if (!cancellUseEffect) {
            setUserDataOracle();
            setCancel(true);
        }
    });

    //API de oracle
    async function returnOracle(string) {
        const params = {
            query: string,//las query no deben terminar en ";"
        }
        const res = await axios.get('http://127.0.0.1:8000/oracleAPI/', { params });
        return res.data.query[0];
    }

    //Recoger las comunas desde la base de datos
    async function setUserDataOracle() {
        let array = await returnOracle("SELECT NOM_CLI, CORREO_CLI FROM CLIENTE WHERE RUT_CLI='"+userID+"'");
        //setUserData(array);
        setName(array[0]);
        setEmail(array[1]);
    }

    function valFormFrontEnd() {
        if (password != Confpassword) {
            alert('Las contraseñas no Coinciden')
            return false;
        }

        if (name == "") {
            alert('Debe Ingresar Nombre')
            return false;
        }

        if (email == "") {
            alert('Debe Ingresar un Email')
            return false;
        }
        return true
    }


    async function onSubmitHandler(e) {
        e.preventDefault();//Evitar que el formulario se envie
        //--Validacion en front end--
        let varfront = valFormFrontEnd();
        if (!varfront) return //Si la funcion devolvio negativo, terminar la funcion

        //--Validacion en back end--
        //Primero tenemos que verificar si no existe un usuario que tenga ese rut o ese correo
        let emailExist = await returnOracle("SELECT COALESCE(COUNT(*), 0) FROM CLIENTE WHERE CORREO_CLI='" + email + "' AND RUT_CLI NOT IN '"+userID+"'");
        if (emailExist != 0) {
            alert("Ya existe otro usuario registrado con el e-mail " + email)
            return //terminar la funcion submit sin subir
        }

        //Actualizar los campos de contraseña e imagen solo si cambiaron
        //Si se actualizo la contraseña
        if ((password != '')){
            console.log("se actualizo la contraseña y la imagen")
            await returnOracle("UPDATE CLIENTE SET NOM_CLI='"+name+"', CORREO_CLI='"+email+"', CONTRA_CLI='"+password+"' WHERE RUT_CLI='"+userID+"'");
        }
        //No se actualizo
        else if (password == ''){
            console.log("se actualizo la imagen")
            await returnOracle("UPDATE CLIENTE SET NOM_CLI='"+name+"', CORREO_CLI='"+email+"' WHERE RUT_CLI='"+userID+"'");
        }

        //Loguear al usuario con local storage
        formRef.current.submit();
    }

    return (
        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-6 dark:bg-gray-800">
            <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Configuración perfil</h2>

            <form onSubmit={onSubmitHandler} ref={formRef}>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="username">Nombre</label>
                        <input id="username" type="text" onChange={nameChange} value={name} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Cambiar Correo</label>
                        <input id="emailAddress" type="email" onChange={emailChange} value={email} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="password">Cambiar contraseña</label>
                        <input id="password" type="password" onChange={passChange} value={password} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Confirmar Contraseña</label>
                        <input id="passwordConfirmation" type="password" onChange={confPassChange} value={Confpassword} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                </div>

                <div class="flex justify-end mt-6">
                    <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Guardar</button>
                </div>

                
            </form>
        </section>

    )

}



const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(PerfilUsu)