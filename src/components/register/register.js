import { connect } from 'react-redux'
import { ReactComponent as SvgLogoUsado } from '../../components/svg/logo_empresa.svg'
import { Link } from 'react-router-dom'
//constantes, uso de API y ref para el formulario
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function Register() {
//Recojer combobox
const [cancellUseEffect, setCancel] = useState(false);
const [comunas, setComunas] = useState([]);//Establecer las comunas del combobox
//Constantes del formulario
const [rut, setRut] = useState('');//Rut
const [email, setEmail] = useState('');//Correo
const [password, setPassword] = useState('');//contraseña
const [Confpassword, setConfPassword] = useState('');//confirmar contraseña
const [name, setName] = useState('');//nombre
const [lastName, setLastName] = useState('');//apellido
const [phone, setPhone] = useState('');//celular
const [comunaId, setComunaId] = useState(0);//id comuna
//Id del usuario (lo ocupare para el insert, la foto, etc)
const [userID, setUserID] = useState(0)
//Imagen del formulario
const [image, setImage] = useState(null);//La imagen que se recojera del input (blob)
const [imageUrl, setImageUrl] = useState('');//url de la imagen que devolvera github

//Establecer las constantes (set)
const rutChange = event => { setRut(event.target.value); };
const emailChange = event => { setEmail(event.target.value); };
const passChange = event => { setPassword(event.target.value); };
const confPassChange = event => { setConfPassword(event.target.value); };
const nameChange = event => { setName(event.target.value); };
const lastNameChange = event => { setLastName(event.target.value); };
const phoneChange = event => { setPhone(event.target.value); };

//Crear una referencia del formukario
const formRef = useRef(null);//Cree una referencia al formulario, para poder utilizar submit en la funcion onSubmitHandler

//recojer id comuna del combobox
const handleComunaChange = (event) =>{
    let selectedOption = event.target.options[event.target.selectedIndex];
    let value = selectedOption.value;
    let label = selectedOption.text;

    console.log("1): "+value);//Esto es lo que se guardara en la base de datos del usuario
    console.log("2): "+label);//Esto es el label de la opcion, lo puse solamente para ver si recogia bien el dato
    //console.log("2): "+valor_sel);
    setComunaId(value);//Establecer la id de la comuna
}

//Imagen del formulario (blob)
const handleImageChange = (event) => {
    setImage(event.target.files[0]);
};

///////////////////////////////Funciones
useEffect(() => {
    //Establecer las comunas del combobox
    if (!cancellUseEffect)
    {
        console.log("esta corriendo la cosita")
        setComunasOracle();
        setCancel(true);
    }
    });

//Recojer las comunas desde la base de datos
async function setComunasOracle(){
    let array = await returnOracle("SELECT ID_COM, NOM_COM FROM COMUNA");
    setComunas(array);
    console.log(array);
}

//API de oracle
async function returnOracle(string){
    const params  = {
        query: string,//las query no deben terminar en ";"
      }
      const res = await axios.get('http://127.0.0.1:8000/oracleAPI/', {params});
      return res.data.query;
}

//subir imagen a github y retornar url
const uploadImage = async () => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(image);
    fileReader.onload = async () => {
      const base64Image = fileReader.result.split(',')[1];
  
    // Agrega tus propias credenciales
    const GITHUB_USERNAME = 'Jordan108';
    const GITHUB_TOKEN = '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';//Token de github, se elimina despues de 30 dias desde el 07/05
    const REPO_NAME = 'reactImage';
    const FILE_PATH = 'main';
    const FILE_NAME = 'testFile4.png';
  
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
    setImageUrl(response.data.content.download_url)
    console.log(response.data.content.download_url);
  };
};

//Funcion que valida el submit del formulario
async function onSubmitHandler(e){
    e.preventDefault();//Evitar que el formulario se envie
    
    //Primero tenemos que verificar si no existe un usuario que tenga ese rut o ese correo
    let userExist = await returnOracle("SELECT COALESCE(COUNT(*), 0) FROM CLIENTE WHERE CORREO_CLI='"+email+"' AND RUT_CLI='"+rut+"'");
    if (userExist){
        console.log("ese usuario si existe, no sirve")
        return //terminar la funcion submit sin subir
    }

    //Ya que se valido que el usuario si se va a subir, rescatar el id que tendra el usuario en el futuro, ocuparlo en la foto
    let userId = await returnOracle("SELECT MAX ID FROM CLIENTE");//No es asi, pero es una idea
    setUserID(userId);//establesco la id del usuario
    //imageUrl = await Script del github
    //INSERT INTO CLIENTE VALUES(userID,correo, imageUrl.....)

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
        <section class="bg-gradient-to-r from-green-400 to-purple-600 h-auto w-auto">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <Link to="/" href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <SvgLogoUsado />
                </Link>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Registro Cuenta
                        </h1>
                        <div class="flex overflow-x-auto whitespace-nowrap">
                            <Link class="inline-flex items-center h-12 px-2 py-2 text-center text-gray-700 border border-b-0 border-gray-300 sm:px-4 dark:border-gray-500 rounded-t-md -px-1 dark:text-white whitespace-nowrap focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                </svg>

                                <span class="mx-1 text-sm sm:text-base">
                                    Cliente
                                </span>
                            </Link>

                            <Link to="/Registeremp" class="inline-flex items-center h-12 px-2 py-2 text-center text-gray-700 bg-transparent border-b border-gray-300 sm:px-4 dark:border-gray-500 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>

                                <span class="mx-1 text-sm sm:text-base">
                                    Empresa / Pymes
                                </span>
                            </Link>
                        </div>
                        {/* Formulario */}
                        <form onSubmit={onSubmitHandler} ref={formRef}>
                            {/* Input del rut */}
                            <div class="relative z-0 w-full mb-6 group">
                                <input onChange={rutChange} value={rut} type="text" name="floating_rut" id="floating_rut" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rut</label>
                            </div>
                            {/* Input del correo */}
                            <div class="relative z-0 w-full mb-6 group">
                                <input onChange={emailChange} value={email} type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo</label>
                            </div>
                            {/* Input de la contraseña */}
                            <div class="relative z-0 w-full mb-6 group">
                                <input onChange={passChange} value={password} type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
                            </div>
                            {/* Input de confirmar contraseña */}
                            <div class="relative z-0 w-full mb-6 group">
                                <input onChange={confPassChange} value={Confpassword} type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirmar Contraseña</label>
                            </div>
                            
                            <div class="grid md:grid-cols-2 md:gap-6">
                                {/* Input nombre */}
                                <div class="relative z-0 w-full mb-6 group">
                                    <input onChange={nameChange} value={name} type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                                </div>
                                {/* Input apellido */}
                                <div class="relative z-0 w-full mb-6 group">
                                    <input onChange={lastNameChange} value={lastName} type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
                                </div>
                            </div>
                            <div class="grid md:grid-cols-2 md:gap-6">
                                {/* Input celular */}
                                <div class="relative z-0 w-full mb-6 group">
                                    <input onChange={phoneChange} value={phone} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Celular(+56 9 32536765)</label>
                                </div>
                                {/* Combobox comunas */}
                                <div class="relative z-0 w-full mb-1 group">
                                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comuna</label>
                                    <select onChange={handleComunaChange} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {comunas.map((cm) => (
                                        <option value={cm[0]}>{cm[1]}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {/* seleccionar una imagen */}
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Imagen de Perfil</label>
                            <input onChange={handleImageChange} id="user_avatar" type="file" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" aria-describedby="user_avatar_help"></input>
                            {/* submit */}
                            <center><button type="submit" class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Registrarse</button></center>
                        </form>
                    </div>
                </div>
            </div>

        </section>


    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(Register)