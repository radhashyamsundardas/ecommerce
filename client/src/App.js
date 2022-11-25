import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <div> <Navbar /></div>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Aboutus' element={<Aboutus />}></Route>
      <Route path='/Contactus' element={<Contactus />}></Route>
      <Route path='/Product' element={<Product />}></Route>
      {/* <Route path='/Navbar' element={<Navbar />}></Route> */}
      <Route path='/Footer' element={<Footer />}></Route>

      </Routes>
      <div><Footer /> </div>
    </Router>
  )
}

export default App





