import Layout from "../../hocs/layouts/layout"
import axios from 'axios';

function WebpayTransaction() {
    const queryParameters = new URLSearchParams(window.location.search)
    const token = queryParameters.get("token_ws")
    webpayTokenStatus(token)
    console.log("token: "+token)

    async function webpayTokenStatus(tkn) {
        const params  = {
            token: tkn,//recoger el valor del prop para pasarlo a la funcion webpay
          }
        console.log("el token que le envio: "+params.token)
        const res = await axios.post('http://127.0.0.1:8000/webpayAPI/', params );
        console.log(res.data);
    }

    return (
        <Layout>
        <p>El token es: {token}</p>
        </Layout>
    )
}
export default WebpayTransaction;