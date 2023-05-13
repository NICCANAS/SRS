import { connect } from 'react-redux'



function MyEmp() {
    return (
        <section class="max-w-5xl p-6 mx-auto bg-white rounded-md shadow-md mt-6  dark:bg-gray-800">
            <h2 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Datos de la empresa </h2>
            <form>
                <div class="w-9/12 items-center m-8">
                    <div class="flex bg-white transition ">
                        {/* Foto de la empresa */}
                        <div class="hidden sm:block sm:basis-56">
                            <img class="h-40 rounded-full" alt='fotousu' src="https://avatars.githubusercontent.com/u/102192880?v=4" />
                        </div>

                        <div class="flex flex-1 justify-between">
                            <div class="border-gray-900/10 p-4">
                                {/* Acá va el nombre de la empresa */}
                                <h3 class="font-bold uppercase text-black-900">
                                    Fukashigi No Cartón
                                </h3>
                                {/* Descripcion de la empresa */}
                                <p class="mt-6 text-justify text-gray-700">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                    sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                    Molestias explicabo corporis voluptatem?
                                </p>
                                {/* Correo empresa */}
                                <h3 class="mt-5 font-bold uppercase text-black-900 p-2">Correo</h3>
                                <h2>MyEmpresa@negocios.cl</h2>
                                <br />
                                {/* Numero de la empresa */}
                                <h3 class="font-bold uppercase text-black-900 p-2">Numero de contacto</h3>
                                <h2>+56912345678</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="flex justify-end mt-6">{/* Boton volver atrás */}
                    <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Volver</button>
                </div>
            </form>
        </section>

    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})(MyEmp)