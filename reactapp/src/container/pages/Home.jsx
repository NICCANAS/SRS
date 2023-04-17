import Footer from "../../components/navigation/Footer";
import Layout from "./reactapp/src/hocs/Layouts";
import Navbar from "../../components/navigation/Navbar";

function Home () {
    return (
        <Layout>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">Welcome to the Home Page</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )

}
export default Home;