import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import AppWrapper from '../utils/AppWrapper'

const Main = () => {
  return (
    <AppWrapper>
      <div className="min-h-screen bg-white">      
          <Navbar />
          <SearchBar />
        <div className="pt-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <Outlet />
        </div>
          <Footer/>
      </div>
    </AppWrapper>
  )
}

export default Main
