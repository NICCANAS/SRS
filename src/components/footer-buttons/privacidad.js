import { connect } from 'react-redux'
import NavbarFooter from './NavbarFooter'
//constantes, uso de API y ref para el formulario
function Privacidad() {
    return (
        <>
            <NavbarFooter />
            <div id="services" class="section relative pt-40 pb-8 md:pt-16 md:pb-0 bg-white">
                <div class="container xl:max-w-6xl mx-auto px-4">

                    <header class="text-center mx-auto mb-12 pt-12 lg:px-20">
                        <h2 class="text-2xl leading-normal mb-2 pt-30 font-bold text-black">Privacidad de la página</h2>
                        <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Estos son nuestros termino de privacidad de la página</p>
                    </header>

                    <div class="flex flex-wrap flex-row -mx-4 text-center">
                        <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">

                            <details class="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                                >
                                    <h2 class="font-medium">
                                        ¿Vendemos los datos?
                                    </h2>

                                    <svg
                                        class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </summary>

                                <p class="mt-4 px-4 leading-relaxed text-gray-700">
                                    Pues claro que si!, se los vendemos a unos chinitos que conocimos en una esquina, y a un tal josepablo ya que se nos metio en la base de datos y ya no sabemos como sacarlo ayua
                                </p>
                            </details>
                        </div>
                        <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                            <details class="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                                >
                                    <h2 class="font-medium">
                                        ¿Hacemos juguito?
                                    </h2>

                                    <svg
                                        class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </summary>

                                <p class="mt-4 px-4 leading-relaxed text-gray-700">No. Jordan se tomó todo</p>
                            </details>
                        </div>
                        <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                            <details class="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                                >
                                    <h2 class="font-medium">
                                        ¿Privacidad del usuario?
                                    </h2>

                                    <svg
                                        class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </summary>

                                <p class="mt-4 px-4 leading-relaxed text-gray-700">
                                Pues bueno como ya dijimos se los vendimos a unos chinos.
                                </p>
                            </details>

                        </div>
                        <div class="flex-shrink px-4 pt-10 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                            <details class="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                                >
                                    <h2 class="font-medium">
                                        ¿Nos quedamos sin ideas de privacidad?
                                    </h2>

                                    <svg
                                        class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </summary>

                                <p class="mt-4 px-4 leading-relaxed text-gray-700">
                                    Sip, Por favor ayuda :( </p>
                            </details>

                        </div>
                        <div class="flex-shrink px-4 pt-10 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" >
                            <details class="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                                >
                                    <h2 class="font-medium">
                                        ¿Privacidad de tarjetas?
                                    </h2>

                                    <svg
                                        class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </summary>

                                <p class="mt-4 px-4 leading-relaxed text-gray-700">
                                    El jordan comprara con tu tarjeta de debito, Crédito, hasta con la plata que no tienes en merchandising de persona 5
                                </p>
                            </details>

                        </div>
                        <div class="flex-shrink px-4 pt-10 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" >
                            <details class="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                                >
                                    <h2 class="font-medium">
                                        ¿Hotel?
                                    </h2>

                                    <svg
                                        class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </summary>

                                <p class="mt-4 px-4 leading-relaxed text-gray-700">
                                    Trivago
                                </p>
                            </details>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
const mapStateToProps = state => ({

})


export default connect(mapStateToProps, {

})(Privacidad)