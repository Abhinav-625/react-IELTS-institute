import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <Router basename="/react-IELTS-institute">
      <Navbar />
      <Routes>
        <Route path='/' index element={<Hero />} />
        <Route path='/features' element={<Features />} />
        <Route path='/testimonials' element={<Testimonials />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
