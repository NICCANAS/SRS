import { connect } from 'react-redux'



function AddServ() {
    return (
        <div class="w-9/12">
            <div class="p-4 text-gray-500">

                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Agregar servicios</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Rellene el formulario para publicar su servicio.
                    </p>
                </div>

                <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="sm:col-span-2">
                        <div>
                            <label htmlFor="Servicio" className="block text-sm font-semibold leading-6 text-gray-900">
                                Nombre del servicio
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="Servicio"
                                    name="nombre servicio"
                                    id="idServ"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                            Compañia
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="compañia"
                                id="idCompañia"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="Presupuesto" className="block text-sm font-semibold leading-6 text-gray-900">
                            Presupuesto
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="number"
                                name="Plata"
                                id="idMoney"
                                autoComplete="number"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                            Información sobre el servicio
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="mensaje"
                                id="idMensaje"
                                rows={10}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>

                    <div className="mt-10">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Imagen de Perfil</label>
                        <input class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" aria-describedby="user_avatar_help" id="user_avatar" type="file"></input>
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Publicar Servicio
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(AddServ)