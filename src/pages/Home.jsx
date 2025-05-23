import React from 'react'
import Hero from '../components/Hero'
import useTitle from '../hooks/useTitle'

const Home = () => {
  useTitle("Home")
  return (
    <div>
      <Hero></Hero>
    </div>
  )
}

export default Home
