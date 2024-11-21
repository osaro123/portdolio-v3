"use client"
import About from '@/components/About'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Preloader from '@/components/Preloader'
import Projects from '@/components/Projects'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    setTimeout(() => {
      setIsLoading(false)
      window.scrollTo(0,0)
    },2000)
  },[])

  return (
    <div className=''>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader/> }
      </AnimatePresence>
      <Hero/>
      <Projects/>
      <About/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default Home