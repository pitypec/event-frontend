import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Faq from './pages/Faq';
import Services from './pages/Services';
import Sector from './pages/Sector';
import Projects from './pages/Projects';
import Tourism from './pages/Tourism';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sector" element={<Sector />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
