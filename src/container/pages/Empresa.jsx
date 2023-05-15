import Layout from "../../hocs/layouts/layout"
import ListEmp from "../../components/list-empress/listemp";
import { useNavigate } from 'react-router-dom';

function Empresa() {
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
            
            <ListEmp/>
            {/* <CardServs/> */}
        </Layout>
    )
}
export default Empresa;