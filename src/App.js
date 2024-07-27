import { Routes , Route} from "react-router-dom";
import './App.css';
import { ProductDetail } from './component/ProductDetail';
import { ProductList } from './component/ProductList';
import { Home } from './component/Home';
import { Contact } from './component/Contact';
function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="products" element={<ProductList/>}></Route>
        <Route path="products/1001" element={<ProductDetail/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>

      </Routes>
    </div>

  );
}

export default App;
