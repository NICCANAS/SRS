import { connect } from 'react-redux'
import NavbarFooter from './NavbarFooter'
//constantes, uso de API y ref para el formulario
function Nosotros() {
    return (
        <>
            <NavbarFooter />

            <div class="pt-40 py-16 bg-white">
                
                <div class="container pt-50 m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div class="md:5/12 lg:w-5/12">
                            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height=""/>
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Sobre Nosotros de SRS</h2>
                            <p class="mt-6 text-gray-600">Desde que comenzamos nuestra operación hace menos de un año, nos hemos esforzado por ofrecer un servicio excepcional y una experiencia satisfactoria para nuestros clientes. A pesar de ser nuevos en el campo, nos hemos dedicado a desarrollar relaciones sólidas con proveedores confiables y a construir una reputación basada en la calidad y la confiabilidad.</p>
                            <p class="mt-4 text-gray-600"> En nuestro equipo, nosotros contamos con expertos en diferentes sectores, quienes se encargan de evaluar y seleccionar cuidadosamente a los proveedores con los que colaboramos. Nosotros nos aseguramos de que cumplan con los estándares de calidad y confiabilidad que buscamos para nuestros clientes.</p>
                        </div>
                    </div>
                </div>
            </div></>
    )
}
const mapStateToProps = state => ({

})


export default connect(mapStateToProps, {

})(Nosotros)