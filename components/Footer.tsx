import React from 'react'

const Footer = () => {
  return (
    <div 
        className='relative h-[250px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='font-generalSans bg-[#111] fixed h-[250px] w-full bottom-0'>
            <h3 className='text-[12rem] font-semibold tracking-tighter text-center w-full'>OSARO LAWANI</h3>
        </div>
    </div>
  )
}

export default Footer