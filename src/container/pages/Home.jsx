import Footer from "../../components/navigation/Footer";
import Layout from "../../hocs/layouts/layout"
import Navbar from "../../components/navigation/Navbar";
import Header from "../../components/home/cambiotext";
import Wave from "../../components/home/wave";
import Card from "../../components/home/card";
import Endwave from "../../components/home/endwave";
import Emprev from "../../components/home/emprev";
import Endhome from "../../components/home/endhome";
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
            <Navbar />
            <Header />
            <Wave/>
            <Card/>
            <Endwave/>
            <Emprev/>
            <Endhome/>
            <Footer/>
        </Layout>
    )

}
export default Home;