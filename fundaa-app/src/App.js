import './App.css';
import SignInOutContainer from './components';
import Home from './pages/Home'
import Product from './pages/Product';
import ProductList from './pages/ProductList';

function App() {
  return (
    <div className="App">
        {/*<ProductList/>*/}
        <Product/>
        {/*<Home/>*/}
        {/* <SignInOutContainer/> */}
    </div>
  );
}

export default App;
