import React from 'react'
import { FlipLink } from './Navbar'

const Footer = () => {
  return (
    <div 
        className='relative h-[80vh]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='font-generalSans bg-[#111] fixed h-[80vh] w-full bottom-0'>
          <div className='flex flex-col justify-between text-[#e2e2e2] px-4 pt-2'>
            <div className='flex gap-64'>
                <div className=''>
                  <h3 className='pb-4 opacity-80'>Contact</h3>
                  <ul className=''>
                    <li>osarolawani983@gmail.com</li>
                    <li>Lagos, Nigeria</li>
                    <li>+2348069999680</li>
                  </ul>
                </div>
                <div>
                  <h3 className='pb-4 opacity-80'>Socials</h3>
                  <ul className=''>
                    <FlipLink href='https://x.com/osaro_lawani' color='#e2e2e2'>Twitter</FlipLink>
                    <FlipLink href='https://www.instagram.com/bolajiszn/' color='#e2e2e2'>Instagram</FlipLink>
                    <FlipLink href='https://www.linkedin.com/in/osaro-lawani-59958b251/' color='#e2e2e2'>LinkedIn</FlipLink>
                    <FlipLink href='https://github.com/osaro123/' color='#e2e2e2'>Github</FlipLink>
                  </ul>
                </div>
              </div>
              <h3 className='text-[13rem] text-[#e2e2e2] opacity-60 font-semibold tracking-tighter text-center w-full absolute bottom-0'>OSARO LAWANI</h3>
          </div>
        </div>
    </div>
  )
}

export default Footer