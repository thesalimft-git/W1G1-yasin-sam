import './App.css'
import StorePage from './pages/StorePage';
import CardPage from './pages/CardsPage';
import OrderPage from './pages/OrdersPage'
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PcNavbar from './components/layout/PcNavbar';
import MobileNavbar from './components/layout/MobileNavbar ';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <PcNavbar />
        <MobileNavbar />
        <div className='container'>
          <div>
            <Routes>
          <Route path="/" element={<StorePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
