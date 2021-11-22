import './App.css';
import SignInOutContainer from './pages/Authentication';
import Cart from './pages/Cart';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<ProductList/>} />
        <Route exact path="/productinfo" element={<Product/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/authentication" element={<SignInOutContainer/>} />
      </Routes>
    </div>
  );
}

export default App;
