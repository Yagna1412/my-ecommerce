import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from '../Components/Home'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Shop from '../Components/Shop'
import Prod from '../Components/Prod'
import Footer from '../Components/Footer'
import LandingPage from '../Pages/Landingpages'
import Books from './Books'
import Computers from './Computers'
import Furnitures from './Furnitures'
import Mens from './Mens'
import Woman from './Woman'
import Ac from './Ac'
import ProductDetail from '../Components/ProductDetails'
import Cart from '../Components/Cart';

const Main = () => {
  return (
    <Router>
      <div className="App" style={{ overflow: 'hidden' }}>
        <Nav /> 
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ac" element={<Ac />} />
            <Route path="/books" element={<Books />} />
            <Route path="/computers" element={<Computers />} />
            <Route path="/furnitures" element={<Furnitures />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/woman" element={<Woman />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products" element={<Prod />} />
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/:category/:id" element={<ProductDetail />} />
          </Routes>
        </main>      
        <Footer />      
      </div>         
    </Router>     
  )
}

export default Main
