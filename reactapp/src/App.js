import './styles/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './storage';
import { Provider } from 'react-redux';
import Error404 from './container/errors/Error404';
import Home from './container/pages/Home';
import Login from './container/pages/login';
import Register from './container/pages/Register';
import Registeremp from './components/register/registeremp';
import Listservs from "./container/pages/services";
import CasiMoney from './container/pages/CasiMoney';
import Empresa from './container/pages/Empresa';
import SeguiServ from './components/list-empress/seguimiento';
import AddServ from './components/list-empress/add-servs';
import HisEmp from './components/list-empress/history-servs';
import ModEmp from './components/list-empress/mod-servs';
import IniEmp from './components/list-empress/ini-servs';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*error 404*/}
          <Route path="*" element={<Error404 />} />
          {/*Home*/}
          <Route path="/" element={<Home />} />
          {/*Login*/}
          <Route path="/Login" element={<Login />} />
          {/*Register*/}
          <Route path="/Register" element={<Register />} />
          {/*Registro Empresa*/}
          <Route path="/Registeremp" element={<Registeremp />} />
          {/*Listado Servicios*/}
          <Route path="/Listservs" element={<Listservs />} />
          {/*Enrutado hacia pagina para pagar.*/}
          <Route path="/CasiMoney" element={<CasiMoney />} />
          {/*Listado de Empresa*/}
          <Route path="/Empresa" element={<Empresa />} />
          {/*Seguimiento de servicios en Empresa*/}
          <Route path="/SeguiServ" element={<SeguiServ />} />
          {/*Agregar servicios en Empresas*/}
          <Route path="/AddServ" element={<AddServ />} />
          {/*Historial servicios en Empresas*/}
          <Route path="/HisEmp" element={<HisEmp />} />
          {/*Modificar servicios en Empresas*/}
          <Route path="/ModEmp" element={<ModEmp />} />
          {/*Inicio servicios en Empresas*/}
          <Route path="/IniEmp" element={<IniEmp />} />


        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
