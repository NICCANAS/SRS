import { connect } from 'react-redux'
import NavbarFooter from './NavbarFooter'
//constantes, uso de API y ref para el formulario
function Reclamo() {
    return (
        <>
            <NavbarFooter />
            <div class="flex min-h-screen items-center justify-start bg-white">
                <div class="mx-auto w-full max-w-lg">
                    <h1 class="text-4xl font-medium">¿Necesitas hacer un reclamo?</h1>
                    <p class="mt-3">Envianos tú reclamo y las especificaciones detalladamente</p>

                    <form action="https://api.web3forms.com/submit" class="mt-10">
                        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                        <div class="grid gap-6 sm:grid-cols-2">
                            <div class="relative z-0">
                                <input type="text" name="NombreUsu" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tú nombre</label>
                            </div>
                            <div class="relative z-0">
                                <input type="text" name="Email" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Correo</label>
                            </div>
                            <div class="relative z-0 col-span-2">
                                <textarea name="Mensaje" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Detalles del reclamo</label>
                            </div>
                        </div>
                        <button type="submit" class="mt-5 rounded-md bg-black px-10 py-2 text-white">Enviar Reclamo</button>
                    </form>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state => ({

})


export default connect(mapStateToProps, {

})(Reclamo)