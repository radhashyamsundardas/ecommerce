import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Product from './components/Product';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Aboutus' element={<Aboutus />}></Route>
      <Route path='/Contactus' element={<Contactus />}></Route>
      <Route path='/Product' element={<Product />}></Route>



      </Routes>
    </Router>
  )
}

export default App


