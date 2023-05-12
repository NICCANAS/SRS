import Layout from "../../hocs/layouts/layout"

function WebpayTransaction() {
    const queryParameters = new URLSearchParams(window.location.search)
    const token = queryParameters.get("token_ws")

    console.log("token: "+token)
    return (
        <Layout>
        <p>El token es: {token}</p>
        </Layout>
    )
}
export default WebpayTransaction;