import './styles/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './storage';
import { Provider } from 'react-redux';
import Error404 from './container/errors/Error404';
import Home from './container/pages/Home';
import Login from './container/pages/login';

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
          <Route path="/" element={<Login />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
