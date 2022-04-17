import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import About from './components/About/About'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>

        <Route path="/" element={<Shop></Shop>} ></Route>
        <Route path="/shop" element={<Shop></Shop>} ></Route>
        <Route path="orders" element={<Orders></Orders>} ></Route>
        <Route path="/inventory" element={<Inventory></Inventory>} ></Route>
        <Route path="/about" element={<About></About>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>

      </Routes>
    </div>
  );
}

export default App;
