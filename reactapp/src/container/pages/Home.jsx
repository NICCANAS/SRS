import Footer from "../../components/navigation/Footer";
import Layout from "../../hocs/layouts/layout"
import Navbar from "../../components/navigation/Navbar";
import Header from "../../components/home/cambiotext";
import Wave from "../../components/home/wave";
import Card from "../../components/home/card";
import Endwave from "../../components/home/endwave";
import Emprev from "../../components/home/emprev";
import Endhome from "../../components/home/endhome";

function Home () {
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