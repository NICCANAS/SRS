import Layout from "../../hocs/layouts/layout"
import ListServs from "../../components/list-services/listservs"
import { useNavigate } from 'react-router-dom';

function Home () {
    //Redireccion
    const userType = localStorage.getItem('loggedType');
    const navigate = useNavigate();

    console.log("userType: "+userType);
    
    if (userType == "emp"){
        //Si esta logueado como empresa mandarlo a su respectivo contenedor
        navigate('/Empresa');
    } else if (userType == null){
        //si no esta logueado, mandarlo al login cliente
        navigate('/Login');
    }

    return (
        <Layout>
            <ListServs/>
        </Layout>
    )
}
export default Home;