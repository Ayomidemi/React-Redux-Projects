import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import NotFound from './containers/NotFound';

const App = () => {

  return (
    <BrowserRouter>

    <Header />

    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="product/:productId" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
        
    </Routes>
  </BrowserRouter>
  );
};

export default App;