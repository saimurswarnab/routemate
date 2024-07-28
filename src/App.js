import { Routes , Route, Navigate} from "react-router-dom";
import './App.css';
import { ProductDetail } from './component/ProductDetail';
import { ProductList } from './component/ProductList';
import { Home } from './component/Home';
import { Contact } from './component/Contact';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { Admin } from "./component/Admin";
import { PageNotFound } from "./component/PageNotFound";
function App() {
  const user = false;
  return (
    
    <div className="App">
      <Header/>
      <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="products" element={<ProductList/>}/>
        <Route path="products/:id" element={<ProductDetail/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="/admin" element={user ? <Admin/> :<Navigate to="/"/>}/>
        <Route path="*" element={<PageNotFound/>}/>

      </Routes>


      </main>
      <Footer/>
    </div>

  );
}

export default App;
