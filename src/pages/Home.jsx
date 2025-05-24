import React from 'react'
import Hero from '../components/Hero'
import useTitle from '../Hooks/useTitle'

const Home = () => {
  useTitle("Home")
  return (
    <div className='pt-4'>
      <Hero></Hero>
    </div>
  )
}

export default Home
