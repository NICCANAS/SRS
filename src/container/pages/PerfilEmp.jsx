import Layout from "../../hocs/layouts/layout"
import MyEmp from '../../components/list-empress/mi-empresa'
import { useNavigate } from 'react-router-dom';

function Registro () {
    const userType = localStorage.getItem('loggedType');
    //Redireccion
    const navigate = useNavigate();

    console.log("userType: "+userType);
    
    if (userType == "cli"){
        //Si esta logueado como cliente, mandarlo a su respectivo contenedor
        navigate('/Listservs');
    } else if (userType == null){
        //si no esta logueado, mandarlo al login de empresa
        navigate('/LoginEmp');
    }
    return (
        <Layout>
            <MyEmp/>
        </Layout>
    )
}
export default Registro;
