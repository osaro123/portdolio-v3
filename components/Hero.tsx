"use client"
import React, { useRef } from 'react'
import Navbar from './Navbar'
import {motion, MotionValue, useMotionValueEvent, useScroll, useTransform} from "framer-motion"
import { heroText } from './anim'

const phrase = "About - I am a frontend developer based in Lagos, Nigeria, passionate about creating clean, intuitive, and animated digital experiences on the web, using tools like React.js, Next.js, TypeScript, and Framer Motion."

const Hero = () => {
    const targetRef = useRef<HTMLDivElement>(null) 
    const {scrollYProgress} = useScroll({
        target: targetRef
    }) 

    // useMotionValueEvent(scrollYProgress, "change" ,(val:number) => {
    //     console.log("scroll val: " + val);
    // })

    const scale = useTransform(scrollYProgress,[0,1],[1,0.95])
    
  return (
    <div 
        // style={{
        //     scale: scale.get()
        // }}
        ref={targetRef}
        className='bg-[#e2e2e2] text-[#111] font-generalSans min-h-[100vh] px-4 flex flex-col justify-between'
    >
        <Navbar/>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end w-full mb-4'>
            <h1 className='sm:text-9xl text-3xl font-semibold tracking-tighter'>
              FRONTEND <br /> DEVELOPER
            </h1>
            <div className='max-w-[400px] sm:self-end'>
                <p className='mb-4'>
                    {phrase.split(" ").map((word,i) => (
                        <span key={i} className='inline-block overflow-hidden'>
                            <motion.span className='inline-block' variants={heroText} initial="initial" animate="animate" custom={i}>{word + "\u00A0"}</motion.span>
                        </span>
                    ))}
                </p>
                <div className='flex justify-between items-center'>
                    <p>[ Scroll to explore ]</p>
                    <motion.div
                        // animate={{ y: [0, 10, 0] }} // Moves the arrow down and back up
                        // transition={{
                        //     duration: 1, // Animation duration
                        //     repeat: Infinity, // Repeats the animation infinitely
                        //     repeatType: "loop", // Loops smoothly
                        //     ease: "easeInOut"
                        // }}
                    >
                        {/* <ArrowDown size={10}/> */}
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
