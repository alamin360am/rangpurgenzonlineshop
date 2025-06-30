import React from 'react'
import Hero from '../components/Hero'
import useTitle from '../Hooks/useTitle'
import BestSell from '../components/BestSell'
import LatestProduct from '../components/LatestProduct'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'

const Home = () => {
  useTitle("Home")
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Carousel />
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <BestSell></BestSell>
        <LatestProduct></LatestProduct>
      </div>
        <Footer />
    </div>
  )
}

export default Home
