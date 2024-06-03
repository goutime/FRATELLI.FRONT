import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login'
import Detail from './components/detail'
import Cart from './components/cart'
import Historial from './components/historial'
import SubCategory from './components/subCategory';

import ProductList from './components/productList';
import Auth from './components/auth';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />}>
        <Route path="" element={<Login />} />        
        <Route path="subcategory/:name" element={<SubCategory />} />
        <Route path="detail/:id/:category" element={<Detail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="historial" element={<Historial />} />
        <Route path="listado/:name" element={<ProductList />} />
      </Route>
    </Routes>
  );
}

export default App;