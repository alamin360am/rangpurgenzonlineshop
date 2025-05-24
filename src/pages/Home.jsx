import React from 'react'
import Hero from '../components/Hero'
import useTitle from '../Hooks/useTitle'
import BestSell from '../components/BestSell'

const Home = () => {
  useTitle("Home")
  return (
    <div className='pt-4'>
      <Hero></Hero>
      <BestSell></BestSell>
    </div>
  )
}

export default Home
