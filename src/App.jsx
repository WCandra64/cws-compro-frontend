import React from 'react';
import { Hero, Navbar, Mitra, Blog, Footer } from './components';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Tentang from "./pages/Tentang";
import NoPage from "./pages/NoPage";

const App = () => {
  var id;
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={'blogs'} element={<Blogs />} />
          {/* <Route path={'blogs/'+id} element={<Artikel id={id} />} /> */}
          <Route path={'tentang'} element={<Tentang />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App