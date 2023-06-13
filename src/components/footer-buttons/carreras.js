import { connect } from 'react-redux'
import NavbarFooter from './NavbarFooter'
//constantes, uso de API y ref para el formulario
function Carreras() {
    return (
        <>
            <NavbarFooter />
            <div className='flex'>
                Carreras de caballo o una wea así
            </div></>
    )
}
const mapStateToProps = state => ({

})


export default connect(mapStateToProps, {

})(Carreras)