import { connect } from 'react-redux'
//constantes, uso de API y ref para el formulario
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function PerfilEmp() {
    const userID = localStorage.getItem('loggedId');

    //Recoger datos del usuario
    const [cancellUseEffect, setCancel] = useState(false);
    //combobox
    const [types, setTypes] = useState([]);
    const [comunas, setComunas] = useState([]);

    //Guardar los datos a cambiar
    const [direction, setDirection] = useState('');
    const [typeid, setTypeID] = useState(1);
    const [comunaID, setComunaID] = useState(1);


    //Establecer las constantes (set)
    const directionChange = event => { setDirection(event.target.value); };
    //const typeChange = event => { setTypeID(event.target.value); };
    //const comunaChange = event => { setComunaID(event.target.value); };

    //Crear una referencia del formukario
    const formRef = useRef(null);//Cree una referencia al formulario, para poder utilizar submit en la funcion onSubmitHandler

    //recojer id comuna del combobox
    const handleComunaChange = (event) => {
        let selectedOption = event.target.options[event.target.selectedIndex];
        let value = selectedOption.value;
        let label = selectedOption.text;

        console.log("1): " + value);//Esto es lo que se guardara en la base de datos del usuario
        console.log("2): " + label);//Esto es el label de la opcion, lo puse solamente para ver si recogia bien el dato
        //console.log("2): "+valor_sel);
        setComunaID(value);//Establecer la id de la comuna
    }

    //recojer tipo comuna del combobox
    const handleTipoChange = (event) => {
        let selectedOption = event.target.options[event.target.selectedIndex];
        let value = selectedOption.value;
        let label = selectedOption.text;

        console.log("1): " + value);//Esto es lo que se guardara en la base de datos del usuario
        console.log("2): " + label);//Esto es el label de la opcion, lo puse solamente para ver si recogia bien el dato
        //console.log("2): "+valor_sel);
        setTypeID(value);//Establecer la id de la comuna
    }

    ///////////////////////////////Funciones
    useEffect(() => {
        //Establecer las comunas  y empresas del combobox
        if (!cancellUseEffect) {
            setTypeOracle();
            setComunasOracle();
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
        return res.data.query;
    }

    //Recoger los tipos de empresa
    async function setTypeOracle() {
        let array = await returnOracle("SELECT ID_TIPEMP, NOM_TIPEMP FROM TIPO_EMPRESA");
        setTypes(array);
        console.log(array);
    }

    //Recoger las comunas desde la base de datos
    async function setComunasOracle() {
        let array = await returnOracle("SELECT ID_COM, NOM_COM FROM COMUNA");
        setComunas(array);
        console.log(array);
    }

    //Recoger los datos del usuario
    async function setUserDataOracle() {
        let array = await returnOracle("SELECT DIRECCION_EMP, TIPO_EMPRESA_ID_TIPEMP, COMUNA_ID_COM FROM EMPRESA WHERE RUT_EMP='" + userID + "'");
        //setUserData(array);
        setDirection(array[0][0]);
        setTypeID(array[0][1]);
        setComunaID(array[0][2]);
    }

    function valFormFrontEnd() {
        if (direction == "") {
            alert('Ingresa una direccion valida para tu empresa')
            return false;
        }
        return true
    }

    async function onSubmitHandler(e) {
        e.preventDefault();//Evitar que el formulario se envie
        //--Validacion en front end--
        let varfront = valFormFrontEnd();
        if (!varfront) return //Si la funcion devolvio negativo, terminar la funcion


        let orc = await returnOracle("UPDATE EMPRESA SET DIRECCION_EMP='"+direction+"', TIPO_EMPRESA_ID_TIPEMP="+typeid+", COMUNA_ID_COM="+comunaID+" WHERE RUT_EMP='"+userID+"'");
        console.log(orc)

        //Loguear al usuario con local storage
        formRef.current.submit();
    }

    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-6 dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Configuración perfil</h2>

            <form onSubmit={onSubmitHandler} ref={formRef} action="/Empresa">
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                    <div>{/* Cambiar direccion de la empresa */}
                        <label className="text-gray-700 dark:text-gray-200" for="username">Dirección</label>
                        <input onChange={directionChange} value={direction} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div className="relative z-0 w-full mb-1 group"> {/* Tipo de empresa */}
                        <label for="Empresa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de Empresa</label>
                        <select onChange={handleTipoChange} id="Empresa" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {types.map((tp) => (
                                <option value={tp[0]}>{tp[1]}</option>
                            ))}
                        </select>
                    </div>

                    <div className="relative z-0 w-full mb-1 group">
                        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comuna</label>
                        <select onChange={handleComunaChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {comunas.map((cm) => (
                                <option value={cm[0]}>{cm[1]}</option>
                            ))}
                        </select>
                    </div>

                </div>

                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Guardar nuevos cambios</button>
                </div>
            </form>
        </section>

    )

}



const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(PerfilEmp)