import React from 'react';
import { Hero, Navbar, Mitra, Blog, Footer } from './components';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Blog />
      <Mitra/>
      {/* <Achievement /> */}
      {/* <Categories /> */}
      {/* <Feedback /> */}
      {/* <CTA /> */}
      <Footer />
    </div>
  )
}

export default App