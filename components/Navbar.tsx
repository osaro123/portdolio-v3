"use client"
import React, { ReactNode, useState } from 'react'
import {motion} from "framer-motion"
import { dropDown } from './anim'

type LinkProp = {
    href: string,
    children: ReactNode
}

const Navbar = () => {
    const [isActive,setIsActive] = useState(false)
  return (
    <motion.nav className='flex justify-between items-center py-2' variants={dropDown} initial="initial" animate="animate">
        <div className='flex gap-[20rem]'>
            <div>
                <h3 className='font-semibold'>Osaro Lawani</h3>
                <p>Available - September '24</p>
            </div>
            <p className='opacity-80'>Frontend Developer <br /> Folio / 2024 - Present</p>
        </div>
        <div className='py-1 px-3 rounded-full border-[1px] border-black cursor-pointer'>
            <FlipLink href=''>Menu</FlipLink>
        </div>
    </motion.nav>
  )
}

export default Navbar


const FlipLink = ({href ,children}: LinkProp) => {
    return (
        <motion.a 
            href={href}
            initial="initial"
            whileHover="hovered"
            className='relative block overflow-hidden whitespace-nowrap cursor-pointer text-[#111]'
        >
            <motion.div
                variants={{
                    initial: {y: 0},
                    hovered: {y: "-100%"}
                }}
                className=''
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    initial: {y: "100%"},
                    hovered: {y: 0}
                }}
                className='absolute inset-0'
            >
                {children}
            </motion.div>
        </motion.a>
    )
    
}