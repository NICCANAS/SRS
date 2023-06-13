import { connect } from 'react-redux'
import NavbarFooter from './NavbarFooter'
//constantes, uso de API y ref para el formulario
function Reclamo() {
    return (
        <>
            <NavbarFooter />
            <div className='flex'>
                Reclamo
            </div></>
    )
}
const mapStateToProps = state => ({

})


export default connect(mapStateToProps, {

})(Reclamo)