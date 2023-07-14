import React from 'react';
import { Hero, Navbar, Mitra, Blog } from '../components';
// import './App.css'

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Blog />
      <Mitra/>
      {/* <Footer /> */}
    </div>
  )
}

export default Home