
import './App.css';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Menu from './containers/Menu';
import About from './containers/About';
import Catering from './containers/Catering';
import Gallery from './containers/Gallery';
import Maps from './containers/Map';
import Footer from './containers/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Menu/>
      <About/>
      <Catering/> 
      <Gallery/>
      <Maps/>
      <Footer/>
    </div>
  );
}

export default App;
