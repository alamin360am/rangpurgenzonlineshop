import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Products from './pages/Products'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:[px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/cart' element={<Cart></Cart>} />
        <Route path='/collection' element={<Collection></Collection>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/orders' element={<Orders></Orders>} />
        <Route path='/place-order' element={<PlaceOrder></PlaceOrder>} />
        <Route path='/product/:productId' element={<Products></Products>} />
      </Routes>
    </div>
  )
}

export default App
