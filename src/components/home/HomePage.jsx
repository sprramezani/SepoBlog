import React from 'react'
import HeroSection from './HeroSection'
import Authors from '../author/Authors'
import Blogs from '../blog/Blogs'

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