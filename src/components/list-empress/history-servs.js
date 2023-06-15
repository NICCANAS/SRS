import { connect } from 'react-redux'


function HisEmp() {
    return (
                <body className="antialiased font-sans ">
                    <div className="container mx-auto px-4 sm:px-8">
                        <div className="py-8">
                            <div>
                            </div>
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th
                                                    className="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Cliente
                                                </th>
                                                <th
                                                    className="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Trabajo
                                                </th>
                                                <th
                                                    className="px-5 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Fecha
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="ml-3">
                                                            {/* No creo que sea necesario esto xd */}
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                NOMBRE CLIENTE
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                {/* Aca solo muestre el trabajo realizado */}
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">NOMBRE TRABAJO</p>
                                                </td>
                                                {/*Aca solo muestre fecha cuando se realizo  */}
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        FECHA
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div
                                        className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                        <span className="text-xs xs:text-sm text-gray-900">
                                          
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