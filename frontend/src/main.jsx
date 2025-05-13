import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/about/AboutPage'
import ProductPage from './landing_page/products/ProductPage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/products' element={<ProductPage />} />
    <Route path='/' element={<HomePage />} />
    <Route path='/' element={<HomePage />} />
  </Routes>
    <Footer />
  </BrowserRouter>
)
