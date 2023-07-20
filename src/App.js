import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './page/Home';
import About from './page/About';
import MainFooter from './components/footer/MainFooter';
import Contact from './page/Contact';
import Portfolio from './page/Portfolio';
import PortfolioInfo from './components/portfolio/portfolioContent/info/PortfolioInfo';
import './App.css';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/portfolio/:title' element={<PortfolioInfo />} />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
