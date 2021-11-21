import './App.css';
import SignInOutContainer from './components/Authentication';
import Cart from './pages/Cart';
import Home from './pages/Home'
import Product from './pages/Product';
import ProductList from './pages/ProductList';

function App() {
  return (
    <div className="App">
        {/*<ProductList/>*/}
        {/*<Product/>*/}
        {/*<Home/>*/}
        {/*<SignInOutContainer/>*/}
        <Cart/>
    </div>
  );
}

export default App;
