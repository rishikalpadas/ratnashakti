import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import '../index.css' // Assuming you have a CSS file for styles

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
