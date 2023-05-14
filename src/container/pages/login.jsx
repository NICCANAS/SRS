import Layout from "../../hocs/layouts/layout"
import Login from "../../components/log-in/login"
import { useNavigate } from 'react-router-dom';

function Home () {
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
            <Login/>
        </Layout>
    )
}
export default Home;