import { connect } from 'react-redux'
import NavbarFooter from './NavbarFooter'
//constantes, uso de API y ref para el formulario
function Info() {
    return (
        <>
            <NavbarFooter />
            <div className='flex'>
            Info
            </div></>
    )
}
const mapStateToProps = state => ({

})


export default connect(mapStateToProps, {

})(Info)