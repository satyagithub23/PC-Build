import './App.css'
import Carousel from './components/Carousel/carousel'
import Comment from './components/Comment/comment'
import Footer from './components/Footer/footer'
import Testmonials from './components/Tesimonials/testimonials'
import Navbar from './components/Navbar/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './components/Products/product'

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
