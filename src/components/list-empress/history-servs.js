import { connect } from 'react-redux'


function HisEmp() {
    return (
                <body class="antialiased font-sans ">
                    <div class="container mx-auto px-4 sm:px-8">
                        <div class="py-8">
                            <div>
                            </div>
                            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table class="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th
                                                    class="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Cliente
                                                </th>
                                                <th
                                                    class="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Trabajo
                                                </th>
                                                <th
                                                    class="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Fecha
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div class="flex items-center">
                                                        <div class="ml-3">
                                                            {/* No creo que sea necesario esto xd */}
                                                            <p class="text-gray-900 whitespace-no-wrap">
                                                                NOMBRE CLIENTE
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                {/* Aca solo muestre el trabajo realizado */}
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">NOMBRE TRABAJO</p>
                                                </td>
                                                {/*Aca solo muestre fecha cuando se realizo  */}
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        FECHA
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div
                                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                        <span class="text-xs xs:text-sm text-gray-900">
                                          
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
        
            )
        
        }
        
const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(HisEmp)