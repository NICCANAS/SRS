import { connect } from 'react-redux'
import NavbarFooter from './NavbarFooter'
//constantes, uso de API y ref para el formulario
function Nosotros() {
    return (
        <>
            <NavbarFooter />
            <div className='flex'>
                Nosotros
            </div></>
    )
}
const mapStateToProps = state => ({

})


export default connect(mapStateToProps, {

})(Nosotros)