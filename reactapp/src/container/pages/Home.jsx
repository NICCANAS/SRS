import Footer from "../../components/navigation/Footer";
import Layout from "../../hocs/layouts/layout"
import Navbar from "../../components/navigation/Navbar";
import Header from "../../components/home/cambiotext";
import MyComponent from "../../components/home/testeando";
function Home () {
    return (
        <Layout>
            <Navbar />
            <Header />
            <Footer />
            <MyComponent />
        </Layout>
    )

}
export default Home;