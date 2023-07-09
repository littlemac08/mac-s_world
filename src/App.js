import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './page/Home';
import About from './page/About';
import MainFooter from './components/footer/MainFooter';
import Contact from './page/Contact';
import Portfolio from './page/Portfolio';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
