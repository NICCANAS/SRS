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
import Empresa from './container/pages/Empresa';
//Yo se que esto no deberia de hacerse y deberia de llamarse en un componente en un  page y esto es mala practica pero me ya me puse la pijama
import Trabajo from './components/footer-buttons/Trabajo';
import Comunicar from './components/footer-buttons/comunicar';
import NavbarFooter from './components/footer-buttons/NavbarFooter';
import Nosotros from "./components/footer-buttons/nosotros"
import Privacidad from "./components/footer-buttons/privacidad"
import Reclamo from "./components/footer-buttons/reclamo"
import Terminos from './components/footer-buttons/terminos';
import Perfilemp from './components/list-empress/mi-empresa';


function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*error 404*/}
          <Route path="*" element={<Error404 />}/>
          {/*Home*/}
          <Route path="/" element={<Home />} />
          {/*Login*/}
          <Route path="/Login" element={<Login />}/>
          {/*Login de empresas*/}
          <Route path="/LoginEmp" element={<LoginEmp />}/>
          {/*Register*/}
          <Route path="/Register" element={<Register />} />
          {/*Registro Empresa*/}
          <Route path="/Registeremp" element={<Registeremp />} />
          {/*Listado Servicios*/}
          <Route path="/Listservs" element={<Listservs />} />
          {/*Enrutado hacia pagina para pagar.*/}
          <Route path="/CasiMoney/:serviceID" element={<CasiMoney/>}/>
          {/*Haz olvidado tu contraseña?*/}
          <Route path="/forgotpass" element={<Password/>}/>
          {/* Componente de webpay */}
          <Route path='/webpayTransaction' element={<WebpayTransaction/>}/>
          {/*Listado de Empresa*/}
          <Route path="/Empresa" element={<Empresa />} />
          {/* Perfil de la empresa */}
          <Route path="/Perfilemp/:empID" element={<Perfilemp />} />

          {/*Aca va los componentes del footer*/}
          {/* Terminos y condiciones */}
          <Route path="/Terminos" element={<Terminos />} />
          {/*nosotros*/}
          <Route path="/nosotros" element={<Nosotros />} />
          {/*Comunicar*/}
          <Route path="/contacto" element={<Comunicar />} />
          {/*NavBarFooter*/}
          <Route path="/NavbarFooter" element={<NavbarFooter />} />
          {/*Privacidad*/}
          <Route path="/Privacidad" element={<Privacidad />} />
          {/*Reclamo*/}
          <Route path="/Reclamo" element={<Reclamo />} />
          {/*Terminos*/}
          <Route path="/Terminos" element={<Terminos />} />
          {/*Carreras*/}
          <Route path="/Trabajo" element={<Trabajo />} />
          {/* Marketing */}
          <Route path="/Marketing" element={<Trabajo />} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
