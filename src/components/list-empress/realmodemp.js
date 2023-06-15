import { connect } from 'react-redux'
//constantes, uso de API y ref para el formulario
import { useState, useRef } from 'react'
import axios from 'axios';

function RealmodEmp(props) {
    //Constantes del formulario
    const [name, setName] = useState(props.nombre);
    const [description, setDescription] = useState(props.descripcion);
    const [value, setValue] = useState(props.valor)
    const [direction, setDirection] = useState(props.direccion)
    const [days, setDays] = useState(props.dias)

    //Establecer las constantes con respecto al formulario(set)
    const nameChange = event => { setName(event.target.value); };
    const descriptionChange = event => { setDescription(event.target.value); };
    const valueChange = event => { setValue(event.target.value); };
    const directionChange = event => { setDirection(event.target.value); };
    const dayChange = event => { setDays(event.target.value); };

    //Crear una referencia del formulario
    const formRef = useRef(null);//Cree una referencia al formulario, para poder utilizar submit en la funcion onSubmitHandler

    function valFormFrontEnd() {
        if (name == "") {
            alert('Debe ingresar un nombre para el servicio')
            return false;
        }

        if (description == "") {
            alert('Debe ingresar una descripcion para el servicio')
            return false;
        }

        if (value == null) {
            alert('Debe ingresar un valor para el servicio')
            return false;
        }

        if (direction == "") {
            alert('Debe ingresar una direccion para el servicio')
            return false;
        }

        if (days == "") {
            alert('Debe ingresar un dia de disponibilidad para el servicio')
            return false;
        }

        return true
    }

    //API de oracle
    async function returnOracle(string) {
        const params = {
            query: string,//las query no deben terminar en ";"
        }
        const res = await axios.get('http://127.0.0.1:8000/oracleAPI/', { params });
        return res.data.query;
    }

    //Funcion que valida el submit del formulario
    async function onSubmitHandler(e) {
        e.preventDefault();//Evitar que el formulario se envie
        //--Validacion en front end--
        let varfront = valFormFrontEnd();
        if (!varfront) return //Si la funcion devolvio negativo, terminar la funcion

        
        await returnOracle("UPDATE SERVICIO SET NOM_SERV='"+name+"', DESCP_SERV='"+description+"', VALOR_SERV="+value+", DIREC_SERV='"+direction+"', DIAS_SERV='"+days+"' WHERE ID_SERV="+props.id+"");

        formRef.current.submit();
    }
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-6 dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Modificar servicio </h2>

            <form onSubmit={onSubmitHandler} ref={formRef} action="/Empresa">
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                    <div> {/*Nombre del servicio */}
                        <label className="text-gray-700 dark:text-gray-200" for="nombre_serv">Nombre del servicio</label>
                        <input onChange={nameChange} value={name} id="nombre_serv" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div> {/* descripción del serv */}
                        <label className="text-gray-700 dark:text-gray-200" for="descrp_serv">Descripción del servicio </label>
                        <input onChange={descriptionChange} value={description} id="descrp_serv" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div> {/* Por la xita joldan, Valor servicio */}
                        <label className="text-gray-700 dark:text-gray-200" for="valor_serv">Valor servicio</label>
                        <input onChange={valueChange} value={value} id="valor_serv" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div> {/* Direccion */}
                        <label className="text-gray-700 dark:text-gray-200" for="Dirección">Dirección</label>
                        <input onChange={directionChange} value={direction} id="Dirección" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div> {/* Dia del servicio */}
                        <label className="text-gray-700 dark:text-gray-200" for="Dia_serv">Día disponible para el servicio</label>
                        <input onChange={dayChange} value={days} id="Dia_serv" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                </div>

                <div className="flex justify-end mt-6">{/* Acá deberia de enviar los datoos a la bd  */}
                    <button id='Guardarcambios'className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Guardar nuevos cambios</button>
                </div>
            </form>
        </section>


    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(RealmodEmp)