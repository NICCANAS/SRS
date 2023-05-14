import Layout from "../../hocs/layouts/layout"
import Register from "../../components/register/register"
import { useNavigate } from 'react-router-dom';

function Registro () {
    const userType = localStorage.getItem('loggedType');
    //Redireccion
    const navigate = useNavigate();

    console.log("userType: "+userType);
    
    if (userType == "cli"){
        //Si esta logueado como cliente, mandarlo a su respectivo contenedor
        navigate('/Listservs');
    }
    else if (userType == "emp") {
        //Si esta logueado como empresa, mandarlo a su respectivo contenedor
        navigate('/Empresa');
    }
    return (
        <Layout>
            <Register/>
        </Layout>
    )
}
export default Registro;
