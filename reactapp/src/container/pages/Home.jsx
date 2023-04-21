import Footer from "../../components/navigation/Footer";
import Layout from "../../hocs/layouts/layout"
import Navbar from "../../components/navigation/Navbar";
import Header from "../../components/home/cambiotext";
import Wave from "../../components/home/wave";
import Card from "../../components/home/card";
function Home () {
    return (
        <Layout>
            <Navbar />
            <Header />
            <Wave/>
            <Card />
            <Footer />
        </Layout>
    )

}
export default Home;