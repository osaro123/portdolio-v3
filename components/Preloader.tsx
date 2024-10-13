"use client"
import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import { heroText, slideUp } from './anim'

const Preloader = () => {
    const preloaderText = "OSARO LAWANI"
    const [dimension,setDimension] = useState({width: 0, height: 0})

    useEffect(() => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
      },[])

      const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
      const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`



    const curve = {

        initial: {

            d: initialPath,

            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}

        },

        exit: {

            d: targetPath,

            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}

        }

    }

  return (
    <motion.div variants={slideUp} initial="initial" exit={"exit"} className='flex justify-center items-center h-screen w-full bg-[#111] text-white fixed top-0 left-0 z-[99] font-generalSans'>
        {
            dimension.height > 0 && <>
                <svg>
                    <motion.path d={initialPath} variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
            </>
        }
        <h1 className='text-4xl font-semibold'>
            {preloaderText.split(" ").map((word,i) => (
                <span key={i} className='inline-block overflow-hidden'>
                    <motion.span variants={heroText} initial="initial" animate="animate" custom={i} className='inline-block'>{word + "\u00A0"}</motion.span>
                </span>
            ))}
        </h1>
    </motion.div>
  )
}

export default Preloader