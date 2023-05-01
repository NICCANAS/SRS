import Layout from "../../hocs/layouts/layout"
import ListServs from "../../components/list-services/listservs"
import CardServs from "../../components/list-services/cardservs"


function Home () {
    return (
        <Layout>
            <ListServs/>
            {/* <CardServs/> */}
        </Layout>
    )
}
export default Home;