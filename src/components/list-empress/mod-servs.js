import { connect } from 'react-redux'
import RealmodEmp from '../list-empress/realmodemp'
import { useState } from 'react'

function ModEmp() {
    const [active, setActive] = useState("listemp")
    return (

        <body class="antialiased font-sans ">
            <div class="container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Nombre de publicación
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Trabajo
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {/* Nombre de la publicación */}
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="flex items-center">
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        NOMBRE PUBLI
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Trabajo */}
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                                        </td>

                                        {/* Aca seria el boton modificar */}
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <a onClick={() => setActive("RealmodEmp")}
                                                class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden
                                                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                <span class="relative">Modificar</span>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Aca en este button se puede cambiar el listado de cosas que hay arriba o sea literal cambiar de pagina */}
                            <div
                                class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                                <span class="text-xs xs:text-sm text-gray-900">

                                </span>
                                <div class="inline-flex mt-2 xs:mt-0">
                                    <button
                                        class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l ">
                                        Atrás
                                    </button>
                                    <button
                                        class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                        Siguiente
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {active === "RealmodEmp" && <RealmodEmp />}
            
        </body>


    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(ModEmp)