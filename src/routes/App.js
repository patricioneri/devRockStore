import '../assets/css/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../containers/Home';
import Cart from '../containers/Cart';
import Products from '../containers/Products';
import Layout from '../components/Layout';
import UseContext from '../context/useContext';



function App() {

  return (
    <div className="appContainer">
      <div className="App">
        <BrowserRouter>
          <UseContext>
              <Layout>
                <Routes>
                  <Route path={"/"} element={<Home />}></Route>
                  <Route path={"/Cart"} element={<Cart />}></Route>
                  <Route path={"/Products"} element={<Products />}></Route>
                </Routes>
              </Layout>
          </UseContext>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
