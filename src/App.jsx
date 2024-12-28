import './App.css'
import Carousel from './components/Carousel/carousel'
import Comment from './components/Comment/comment'
import Footer from './components/Footer/footer'
import Testmonials from './components/Tesimonials/testimonials'
import Navbar from './components/Navbar/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './components/Products/product'
import ProductDetails from './components/ProductDetails/productDetails'
import Contact from './components/ContactUs/contact'
import Login from './components/Login/login'
import Signup from './components/Login/signup'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Carousel />
              <Testmonials />
              <Comment />
            </>
          } />
          <Route path='/categories/:slug' element={<Product />} />
          <Route path='/products/' element={<Product />} />
          <Route path='/product-details/:id' element={<ProductDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
