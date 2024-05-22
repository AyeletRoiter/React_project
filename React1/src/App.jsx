import React, { useState } from 'react';
import Customer from './pageCustomer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pageAdmin';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Customer/>}/>
      <Route path='/customer' element={<Customer />} />
      <Route path='/Admin' element={<Admin />} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
