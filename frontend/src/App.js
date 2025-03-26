import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Selection from './Pages/Selection';
import ImgSelect from './Pages/ImgSelect';


function App() {
  return (
    <Router>    
      <Navbar/>     
        <Routes >         
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Selection/>}  />
          <Route path="/ImgSelect" element={<ImgSelect/>}  />
          <Route path="/product" element={<Product />} />
        </Routes>     
        <Footer/>
    </Router>
  );
}

export default App;
