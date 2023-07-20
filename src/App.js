import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './page/Home';
import About from './page/About';
import MainFooter from './components/footer/MainFooter';
import Contact from './page/Contact';
import Portfolio from './page/Portfolio';
import PortfolioInfo from './components/portfolio/portfolioContent/info/PortfolioInfo';
import { ContactUs } from './components/email/ContactUs';
import { useState } from 'react';
import './App.css';



function App() {
  const [isContactShow, setIsContactShow] = useState(false)

  const contactShowHandler = () => {
    setIsContactShow(!isContactShow)
  }

  return (
    <>
      <Header />
      {isContactShow ? <ContactUs contactShowHandler={contactShowHandler}/> : ''}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About contactShowHandler={contactShowHandler} />} />
        <Route path="/contact" element={<Contact contactShowHandler={contactShowHandler} />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/portfolio/:title' element={<PortfolioInfo />} />
      </Routes>
      <MainFooter contactShowHandler={contactShowHandler} />
    </>
  );
}

export default App;
