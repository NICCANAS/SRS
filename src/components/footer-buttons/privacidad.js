import { connect } from 'react-redux'
import NavbarFooter from './NavbarFooter'
//constantes, uso de API y ref para el formulario
function Privacidad() {
    return (
        <>
            <NavbarFooter />
            <div className='flex'>
                Privacidad
            </div></>
    )
}
const mapStateToProps = state => ({

})


export default connect(mapStateToProps, {

})(Privacidad)