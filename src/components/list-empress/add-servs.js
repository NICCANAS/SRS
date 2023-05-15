import { connect } from 'react-redux'
//constantes, uso de API y ref para el formulario
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


function AddServ() {
    //ID usuario activo
    const userID = localStorage.getItem('loggedId');
    //Recojer combobox
    const [cancellUseEffect, setCancel] = useState(false);
    const [tipoServicios, setTipoServicios] = useState([]);//Establecer las comunas del combobox
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [valor, setValor] = useState(0);
    const [direccion, setDireccion] = useState('');
    const [dias, setDias] = useState('');
    const [tipoId, setTipoId] = useState(1);//id Tipo servicio

    //Imagen del formulario
    const [image, setImage] = useState(null);//La imagen que se recojera del input (blob)

    //Establecer las desde el formulario (set)
    const nameChange = event => { setNombre(event.target.value); };
    const descriptionChange = event => { setDescripcion(event.target.value); };
    const valueChange = event => { setValor(event.target.value); };
    const directionChange = event => { setDireccion(event.target.value); };
    const dayChange = event => { setDias(event.target.value); };

    //Crear una referencia del formukario
    const formRef = useRef(null);//Cree una referencia al formulario, para poder utilizar submit en la funcion onSubmitHandler

    //recojer id tipo servicio del combobox
    const handleTipoChange = (event) => {
        let selectedOption = event.target.options[event.target.selectedIndex];
        let value = selectedOption.value;
        let label = selectedOption.text;

        console.log("1): " + value);//Esto es lo que se guardara en la base de datos del usuario
        console.log("2): " + label);//Esto es el label de la opcion, lo puse solamente para ver si recogia bien el dato
        //console.log("2): "+valor_sel);
        setTipoId(value);//Establecer la id de la comuna
    }

    //Imagen del formulario (blob)
    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    ///////////////////////////////Funciones
    useEffect(() => {
        //Establecer combobox
        if (!cancellUseEffect) {
            setTipoServiciosOracle();
            setCancel(true);
        }
    });

    //Recoger tipo servicios bdd
    async function setTipoServiciosOracle() {
        let array = await returnOracle("SELECT ID_TIPSERV, NOM_TIPSERV FROM TIPO_SERVICIO");
        setTipoServicios(array);
        console.log(array);
    }

    //API de oracle
    async function returnOracle(string) {
        const params = {
            query: string,//las query no deben terminar en ";"
        }
        const res = await axios.get('http://127.0.0.1:8000/oracleAPI/', { params });
        return res.data.query;
    }

    //subir imagen del servicio a github y retornar url
    async function uploadImage(id) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.onload = async () => {
                const base64Image = fileReader.result.split(',')[1];

                // Agrega tus propias credenciales
                const GITHUB_USERNAME = 'Jordan108';
                const GITHUB_TOKEN = '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';//Token de github, se elimina despues de 30 dias desde el 07/05
                const REPO_NAME = 'reactImage';
                const FILE_PATH = 'Servicios';
                const FILE_NAME = 'Serv_' + id + '.png';

                const uploadUrl = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents/${FILE_PATH}/${FILE_NAME}`;

                const response = await axios({
                    method: 'PUT',
                    url: uploadUrl,
                    headers: {
                        'Authorization': `token ${GITHUB_TOKEN}`,
                        'Content-Type': 'application/json'
                    },
                    data: {
                        message: `Upload ${FILE_NAME}`,
                        content: base64Image//formData.get('file')
                    }
                });
                //setImageUrl(response.data.content.download_url)
                console.log(response.data.content.download_url);
                //return response.data.content.download_url
                //setImageUrl(response.data.content.download_url);
                resolve(response.data.content.download_url);
            };

            //Manejar el estado de error
            fileReader.onerror = (error) => {
                reject("");//devolvera un string vacio
            };

            //Carga la imagen
            fileReader.readAsDataURL(image);
        });
        //return imageReturn
    };

    //Validar el formulario
    function valFormFrontEnd() {
        if (nombre == "") {
            alert('Debe ingresar un nombre para el servicio)')
            return false;
        }

        if (descripcion == "") {
            alert('Debe ingresar una descripcion para el servicio')
            return false;
        }

        if (valor <= 0) {
            alert('Debe ingresar un valor valido para su servicio')
            return false;
        }

        if (direccion == "") {
            alert('Debe ingresar una direccion valida de su servicio')
            return false;
        }

        if (dias == "") {
            alert('Debe ingresar una fecha de disponibilidad para su servicio')
            return false;
        }

        if (image == null) {
            alert('Debe ingresar una imagen para su servicio')
            return false;
        }

        return true
    }

    //Funcion que valida el submit del formulario
    async function onSubmitHandler(e) {
        e.preventDefault();//Evitar que el formulario se envie
        //--Validacion en front end--
        let varfront = valFormFrontEnd();
        if (!varfront) return //Si la funcion devolvio negativo, terminar la funcion

        //--Validacion en back end--
        //Primero tenemos que verificar si no existe un usuario que tenga ese rut o ese correo
        let maxID = await returnOracle("SELECT NVL(MAX(ID_SERV), 0) FROM SERVICIO");
        let orderID = parseInt(maxID) + 1;

        let githubURL = await uploadImage(orderID);//El propio script establece el url, 

        let orc = await returnOracle("INSERT INTO SERVICIO VALUES("+orderID+", '"+nombre+"', '"+descripcion+"', "+valor+", '"+direccion+"', '"+dias+"', null, "+tipoId+", "+userID+", '"+githubURL+"')");
        console.log(orc);
        formRef.current.submit();
    }

    return (
        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-6 dark:bg-gray-800">
            <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Agregar Servicio </h2>

            <form onSubmit={onSubmitHandler} ref={formRef} action="/Empresa">
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                    <div> {/*Nombre del servicio */}
                        <label class="text-gray-700 dark:text-gray-200" for="nombre_serv">Nombre del servicio</label>
                        <input onChange={nameChange} value={nombre} id="nombre_serv" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div> {/* descripción del serv */}
                        <label class="text-gray-700 dark:text-gray-200" for="descrp_serv">Descripción del servicio </label>
                        <input onChange={descriptionChange} value={descripcion} id="descrp_serv" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div> {/* Valor servicio */}
                        <label class="text-gray-700 dark:text-gray-200" for="valor_serv">Valor servicio</label>
                        <input onChange={valueChange} value={valor} id="valor_serv" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div> {/* Direccion */}
                        <label class="text-gray-700 dark:text-gray-200" for="Dirección">Dirección</label>
                        <input onChange={directionChange} value={direccion} id="Dirección" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div> {/* Dia del servicio */}
                        <label class="text-gray-700 dark:text-gray-200" for="Dia_serv">Día disponible para el servicio</label>
                        <input onChange={dayChange} value={dias} id="Dia_serv" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div> {/* Foto del servicio */}
                        <label class="text-gray-700 dark:text-gray-200" for="Foto_del_serv">Foto del servicio</label>
                        <input onChange={handleImageChange} aria-describedby="Foto_del_serv" id="usuprofile_help" type="file" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    {/* Aca deberia de elegir el tipo de trabajo */}
                    <div class="relative z-0 w-full mb-1 group">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de servicio</label>
                        <select onChange={handleTipoChange} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {tipoServicios.map((ts) => (
                                <option value={ts[0]}>{ts[1]}</option>
                            ))}
                        </select>
                    </div>

                </div>

                <div class="flex justify-end mt-6">{/* Acá deberia de enviar los datoos a la bd  */}
                    <button type="submit" class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Crear nuevo servicio</button>
                </div>
            </form>
        </section>

    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(AddServ)