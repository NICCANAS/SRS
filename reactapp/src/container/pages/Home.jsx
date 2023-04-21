import Footer from "../../components/navigation/Footer";
import Layout from "../../hocs/layouts/layout"
import Navbar from "../../components/navigation/Navbar";
import Header from "../../components/home/cambiotext";
function Home () {
    return (
        <Layout>
            <Navbar />
            <Header />
            <Footer />
        </Layout>
    )

}
export default Home;