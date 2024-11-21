"use client"
import React, { ReactNode} from 'react'
import {motion} from "framer-motion"
import { dropDown } from './anim'

type LinkProp = {
    href: string,
    children: ReactNode,
    color: string
}

const Navbar = () => {
    //const [isActive,setIsActive] = useState(false)
    const date = new Date()
    const month = date.toLocaleString('en-US',{month: "long"})
  return (
    <motion.nav className='flex justify-between items-center py-2 text-[#111]' variants={dropDown} initial="initial" animate="animate">
        <div className='flex gap-[20rem]'>
            <div>
                <h3 className='font-semibold'>Osaro Lawani</h3>
                <p>Available - {month} {"'"}24</p>
            </div>
            <p className=''>Frontend Developer <br /> Folio / 2024 - Present</p>
        </div>
        <div className='py-1 px-3 rounded-full border-[1px] border-black cursor-pointer'>
            <FlipLink href='' color="#111">Menu</FlipLink>
        </div>
    </motion.nav>
  )
}

export default Navbar


export const FlipLink = ({href ,children,color}: LinkProp) => {
    return (
        <motion.a 
            href={href}
            initial="initial"
            whileHover="hovered"
            className={`relative block overflow-hidden whitespace-nowrap cursor-pointer text-[${color}]`}
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