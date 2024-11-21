import React from 'react'

const Cta = () => {
  return (
    <div className='my-32 font-generalSans mx-8 rounded-lg py-32 px-16 text-center bg-[#111] text-[#e2e2e2]'>
      <div className='flex justify-center flex-col'>
        <h1 className='sm:text-[12rem] text-[6rem] leading-none max-w-[800px] mx-auto font-semibold text-center uppercase'>Get in touch</h1>
        <p className='text-center mt-6 mb-12 max-w-[550px] mx-auto text-xl opacity-60'>Looking for a skilled frontend developer? Let's talk! I{"'"}m currently available for gigs and frontend roles. Whether it{"'"}s building clean, responsive UIs or adding interactive animations, I{"'"}m here to help bring your vision to life. Reach out, and let's create something exceptional together!</p>
        <div className='flex justify-center'>
          <a href='mailto:osarolawani983@gmail.com' className='bg-[#e2e2e2] hover:bg-opacity-90 text-[#111] px-8 py-4 rounded-full'>Send me a message</a>
        </div>
      </div>
    </div>
  )
}

export default Cta