import { connect } from 'react-redux'

function ResennaPorqueria() {
    return (
        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-6 dark:bg-gray-800">
            <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Ingrese su reseña Acá</h2>

            <form>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    {/* aca deberia ser la valoracion */}
                    <div class="relative z-0 w-full mb-1 group">
                        <label for="valoracion" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valoración ★★★★★</label>
                        <select id="valoracion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    {/* Aca deberia de elegir la empresa o pyme */}
                    <div class="relative z-0 w-full mb-1 group">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Empresa</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Joe mama</option>
                        </select>
                    </div>

                    {/* Aca se recoge el servicio que hace la empresa seleccionada */}
                    <div class="relative z-0 w-full mb-1 group">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Servicio</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Joe mama</option>
                        </select>
                    </div>

                    <div>
                    </div>
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="descrresenna">Descripción de la reseña</label>
                    <input id="descrresenna" class=" block w-full px-4 py-5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
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