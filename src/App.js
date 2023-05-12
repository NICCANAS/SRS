import './styles/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './storage';
import { Provider } from 'react-redux';
import Error404 from './container/errors/Error404';
import Home from './container/pages/Home';
import Login from './container/pages/login';
import LoginEmp from './components/log-in/loginEmp';
import Register from './container/pages/Register';
import Registeremp from './components/register/registeremp';
import Listservs from "./container/pages/services";
import CasiMoney from './container/pages/CasiMoney';
import Password from './container/pages/forgot-password';
import WebpayTransaction from './container/pages/webpay';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*error 404*/}
          <Route path="*" element={<Error404 />}/>
          {/*Home*/}
          <Route path="/" element={<Home />}/>
          {/*Login*/}
          <Route path="/Login" element={<Login />}/>
          {/*Login de empresas*/}
          <Route path="/LoginEmp" element={<LoginEmp />}/>
          {/*Register*/}
          <Route path="/Register" element={<Register />}/>
          {/*Registro Empresa*/}
          <Route path="/Registeremp" element={<Registeremp/>}/>
          {/*Listado Servicios*/}
          <Route path="/Listservs" element={<Listservs/>}/>
          {/*Enrutado hacia pagina para pagar.*/}
          <Route path="/CasiMoney/:serviceID" element={<CasiMoney/>}/>
          {/*Haz olvidado tu contraseña?*/}
          <Route path="/forgotpass" element={<Password/>}/>
          {/* Componente de webpay */}
          <Route path='/webpayTransaction' element={<WebpayTransaction/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
