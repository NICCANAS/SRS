import { connect } from 'react-redux'

function PerfilEmp() {
    return (
        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-6 dark:bg-gray-800">
            <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Configuración perfil</h2>

            <form>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">


                    <div>{/* Cambiar direccion de la empresa */}
                        <label class="text-gray-700 dark:text-gray-200" for="username">Dirección</label>
                        <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div class="relative z-0 w-full mb-1 group"> {/* Tipo de empresa */}
                        <label for="Empresa" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de Empresa</label>
                        <select id="Empresa" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Empresa</option>
                            <option>Pyme</option>
                            <option>Independiente</option>
                        </select>
                    </div>

                    <div>{/* Descripcion pequeña de la empresa */}
                        <label class="text-gray-700 dark:text-gray-200" for="descrp_emp">Descripcion Empresa</label>
                        <input id="descrp_emp" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div> {/* Para cambiar la potografia*/}
                        <label class="text-gray-700 dark:text-gray-200" for="usu_emp">Cambiar Foto empresa</label>
                        <input aria-describedby="usu_emp" id="usuprofile_help" type="file" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div class="relative z-0 w-full mb-1 group">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comuna</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Viña del Mar</option>
                            <option>Quilpue</option>
                            <option>Villa Alemana</option>
                            <option>Belloto</option>
                            <option>Curauma</option>
                            <option>Casa Blanca</option>
                        </select>
                    </div>

                </div>

                <div class="flex justify-end mt-6">
                    <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Guardar nuevos cambios</button>
                </div>
            </form>
        </section>

    )

}



const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(PerfilEmp)