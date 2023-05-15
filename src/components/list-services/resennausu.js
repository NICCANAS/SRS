import { connect } from 'react-redux'
//constantes, uso de API y ref para el formulario
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function ResennaPorqueria() {
    //ID usuario activo
    const userID = localStorage.getItem('loggedId');
    const userType = localStorage.getItem('loggedType');
    //Recojer combobox
    const [cancellUseEffect, setCancel] = useState(false);
    const [ordenes, setOrdenes] = useState([]);//Establecer servicios del combobox

    const [resennaValue, setResennaValue] = useState(1);//Cantidad de estrellas de la reseña
    const [serviceID, setServiceID] = useState(0);//servicio a reseñar
    const [description, setDescription] = useState('');//Descripcion

    //Crear una referencia del formukario
    const formRef = useRef(null);//Cree una referencia al formulario, para poder utilizar submit en la funcion onSubmitHandler

    const descChange = event => { setDescription(event.target.value);};

    useEffect(() => {
        //Establecer las comunas del combobox
        if (!cancellUseEffect) {
            setOrdenesOracle();
            setCancel(true);
        }
    });


    //recoger valoracion del combobox
    const handleResennaValueChange = (event) => {
        let selectedOption = event.target.options[event.target.selectedIndex];
        let value = selectedOption.value;
        let label = selectedOption.text;

        console.log("1): " + value);//Esto es lo que se guardara en la base de datos del usuario
        console.log("2): " + label);//Esto es el label de la opcion, lo puse solamente para ver si recogia bien el dato
        //console.log("2): "+valor_sel);
        setResennaValue(value);//Establecer id de la 
    }

    //Recoger servicio seleccionado del combobox (ordenes que el usuario compro)
    const handleServicioChange = (event) => {
        let selectedOption = event.target.options[event.target.selectedIndex];
        let value = selectedOption.value;
        let label = selectedOption.text;

        console.log("1): " + value);//Esto es lo que se guardara en la base de datos del usuario
        console.log("2): " + label);//Esto es el label de la opcion, lo puse solamente para ver si recogia bien el dato
        //console.log("2): "+valor_sel);
        setServiceID(value);//Establecer id de la 
    }

    //API de oracle
    async function returnOracle(string) {
        const params = {
            query: string,//las query no deben terminar en ";"
        }
        const res = await axios.get('http://127.0.0.1:8000/oracleAPI/', { params });
        return res.data.query;
    }
    
    //Recoger los servicios que contrato el usuario en la base de datos
    async function setOrdenesOracle() {
        let array = await returnOracle("SELECT ORD.SERVICIO_ID_SERV, SERV.NOM_SERV FROM ORDEN_SERV ORD INNER JOIN SERVICIO SERV ON ORD.SERVICIO_ID_SERV=SERV.ID_SERV WHERE ORD.CLIENTE_RUT_CLI='"+userID+"' AND ORD.ORD_ESTADO_ID_PAGO=1");
        
        setOrdenes(array);
        console.log(array);
    }

    //Funcion que valida el submit del formulario
    async function onSubmitHandler(e) {
        e.preventDefault();//Evitar que el formulario se envie
        if (serviceID == 0){
            alert("Debes de elegir un servicio para poder reseñarlo")
            return
        }

        let maxID = await returnOracle("SELECT NVL(MAX(ID_RES), 0) FROM RESENNA_SERV");
        console.log("max id: "+maxID);
        let resID = parseInt(maxID)+1;

        //Insertar la reseña de ese servicio
        await returnOracle("INSERT INTO RESENNA_SERV VALUES("+resID+", '"+description+"', "+resennaValue+", "+serviceID+", '"+userID+"')");

        formRef.current.submit();
    }

    return (
        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-6 dark:bg-gray-800">
            <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Ingrese su reseña Acá</h2>

            <form onSubmit={onSubmitHandler} ref={formRef} action="/Listservs">
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    {/* aca deberia ser la valoracion */}
                    <div class="relative z-0 w-full mb-1 group">
                        <label for="valoracion" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valoración ★★★★★</label>
                        <select onChange={handleResennaValueChange} id="valoracion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    {/* Aca se recoge el servicio que hace la empresa seleccionada */}
                    <div class="relative z-0 w-full mb-1 group">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Servicio</label>
                        <select onChange={handleServicioChange} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {/* Opcion por defecto */}
                            <option value={0}>--Selecciona un servicio</option>
                            {ordenes.map((ord) => (
                                <option value={ord[0]}>{ord[1]}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                    </div>
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="descrresenna">Descripción de la reseña</label>
                    <input onChange={descChange} value={description} id="descrresenna" class=" block w-full px-4 py-5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div class="flex justify-end mt-6">
                    <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Crear reseña</button>
                </div>
                
            </form>
        </section>

    )

}



const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(ResennaPorqueria)