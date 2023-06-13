import { connect } from 'react-redux'
//constantes, uso de API y ref para el formulario
function Terminos() {
    return (
        <div class='h-screen'>

            Términos y condiciones de la página de venta de servicios:

            1. Servicios ofrecidos: La página ofrece servicios específicos que se detallan en cada descripción de producto. El cliente debe revisar cuidadosamente la información proporcionada antes de realizar una compra.

            2. Precios y pagos: Los precios de los servicios están claramente indicados en la página y pueden estar sujetos a cambios sin previo aviso. El cliente debe realizar el pago completo antes de recibir el servicio. Todos los pagos se deben realizar en la moneda especificada en la página.

            3. Cancelaciones y reembolsos: En caso de que el cliente desee cancelar un servicio antes de su ejecución, se aplicarán las políticas de cancelación establecidas en la página. No se realizarán reembolsos una vez que el servicio haya sido entregado o completado, a menos que exista un acuerdo previo entre ambas partes.

            4. Responsabilidad del cliente: El cliente es responsable de proporcionar información precisa y completa al realizar una compra. Cualquier error en la información proporcionada que afecte la entrega del servicio será responsabilidad del cliente.

            5. Propiedad intelectual: Todos los derechos de propiedad intelectual relacionados con los servicios ofrecidos en la página pertenecen a sus respectivos propietarios. El cliente no tiene derecho a utilizar, copiar o distribuir ningún contenido protegido sin el consentimiento expreso del propietario.

            6. Limitación de responsabilidad: La página no se hace responsable de cualquier daño directo, indirecto, incidental o consecuente que pueda surgir del uso de los servicios adquiridos. El cliente asume toda la responsabilidad y riesgo asociados con el uso de los servicios.

            7. Privacidad y protección de datos: La página se compromete a proteger la privacidad y los datos personales del cliente de acuerdo con las leyes y regulaciones aplicables. Se recomienda al cliente revisar la política de privacidad de la página para obtener más información.

            Estos son solo ejemplos generales de términos y condiciones para una página de venta de servicios. Es importante adaptarlos a las necesidades específicas de cada negocio y consultar con un profesional legal para garantizar que cumplan con todas las leyes y regulaciones aplicables en su jurisdicción.
        </div>
    )
}
const mapStateToProps = state => ({

})


export default connect(mapStateToProps, {

})(Terminos)