import React from 'react'
import HeroSection from '../components/home/HeroSection'
import Authors from '../components/author/Authors'
import Blogs from '../components/blog/Blogs'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Blogs />
      <Authors />
    </div>
  )
}

export default HomePage