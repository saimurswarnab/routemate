import { Routes , Route, Navigate} from "react-router-dom";
import './App.css';
import { ProductDetail } from './component/ProductDetail';
import { ProductList } from './component/ProductList';
import { Home } from './component/Home';
import { Contact } from './component/Contact';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { Admin } from "./component/Admin";
function App() {
  const user = false;
  return (
    
    <div className="App">
      <Header/>
      <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="products" element={<ProductList/>}/>
        <Route path="products/1001" element={<ProductDetail/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="/admin" element={user ? <Admin/> :<Navigate to="/"/>}/>

      </Routes>


      </main>
      <Footer/>
    </div>

  );
}

export default App;
