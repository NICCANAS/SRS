import { connect } from 'react-redux'



function AddServ() {
    return (
        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-6 dark:bg-gray-800">
            <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Agregar Servicio </h2>

            <form>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                    <div> {/*Nombre del servicio */}
                        <label class="text-gray-700 dark:text-gray-200" for="nombre_serv">Nombre del servicio</label>
                        <input id="nombre_serv" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div> {/* descripción del serv */}
                        <label class="text-gray-700 dark:text-gray-200" for="descrp_serv">Descripción del servicio </label>
                        <input id="descrp_serv" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div> {/* Por la xita joldan, Valor servicio */}
                        <label class="text-gray-700 dark:text-gray-200" for="valor_serv">Valor servicio</label>
                        <input id="valor_serv" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div> {/* Direccion */}
                        <label class="text-gray-700 dark:text-gray-200" for="Dirección">Dirección</label>
                        <input id="Dirección" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div> {/* Dia del servicio */}
                        <label class="text-gray-700 dark:text-gray-200" for="Dia_serv">Día disponible para el servicio</label>
                        <input id="Dia_serv" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div> {/* Hora del servicio */}
                        <label class="text-gray-700 dark:text-gray-200" for="Hora_serv">Horas del servicio</label>
                        <input id="Hora_serv" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div> {/* Foto del servicio */}
                        <label class="text-gray-700 dark:text-gray-200" for="Foto_del_serv">Foto del servicio</label>
                        <input aria-describedby="Foto_del_serv" id="usuprofile_help" type="file" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    {/* Aca deberia de elegir el tipo de trabajo */}
                    <div class="relative z-0 w-full mb-1 group">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de servicio</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Joe mama</option>
                        </select>
                    </div>

                </div>

                <div class="flex justify-end mt-6">{/* Acá deberia de enviar los datoos a la bd  */}
                    <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Crear nuevo servicio</button>
                </div>
            </form>
        </section>

    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(AddServ)