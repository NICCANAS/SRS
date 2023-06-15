import { connect } from 'react-redux'
import { ReactComponent as SvgLogoUsado } from '../../components/svg/logo_empresa.svg'
import { Link } from 'react-router-dom'

function forgotPass() {
    return (
        <div className='h-screen bg-gradient-to-r from-pink-700 to-purple-900'>
            <section className="bg-gray-50 dark:bg-gray-900 h-screen bg-gradient-to-r from-green-400 to-purple-600">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <SvgLogoUsado />
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <Link to="/Login" type="button" className=" rotate-180 flex flex-row text-indigo-700 border border-indigo-700 hover:bg-indigo-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-indigo-500 dark:text-indigo-500 dark:hover:text-white dark:focus:ring-indigo-800 dark:hover:bg-indigo-500">
                                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Icon description</span>
                            </Link>

                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                ¿Haz Olvidado tu Contraseña?
                            </h1>

                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nombre@direccion.com" required="" />
                                </div>

                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nueva Contraseña</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>

                                <div className="pb-3">
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar Nueva Contraseña</label>
                                    <input type="password" name="password" id="confPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                
                                <Link to="/login"><button type="submit" onClick={validarFormulario} className=" mt-3 w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-primary-800">Guardar</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

function validarFormulario(evento){
    evento.preventDefault();
    var email = document.getElementById('email').value;
    var expr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;

    //Validacion Email Vacio
    if(email == ""){
        alert('El campo email NO puede estar vacio!')
        return;
    }
    
    //Validacion Clave Vacia
    var clave = document.getElementById('password').value;
    var cofClave = document.getElementById('confPassword').value;
    if(clave.length == 0) {
        alert('El campo clave NO puede estar vacio!')
        return;
    }

    //Validacion Confirmar Clave
    if(cofClave == ""){
        alert('Debe ingresar confirmar contraseña')
        return;
    }else if(cofClave != clave){
        alert('Las claves NO coinciden')
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(forgotPass)