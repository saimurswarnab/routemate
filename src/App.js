import { AllRoutes } from './routes/AllRoutes';
import './App.css';



import { Header,Footer } from './component/index';


function App() {

  return (
    
    <div className="App">
      <Header/>
      <main>

        <AllRoutes/>



      </main>
      <Footer/>
    </div>

  );
}

export default App;
