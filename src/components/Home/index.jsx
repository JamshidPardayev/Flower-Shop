import React from 'react'
import Hero from "./Hero"
import Categories from './Main/Categories'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Main from './Main'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero />
        <Main />
    </div>
  )
}

export default Home