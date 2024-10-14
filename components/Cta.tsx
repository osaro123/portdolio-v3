import React from 'react'

const Cta = () => {
  return (
    <div className='my-32 font-generalSans mx-8 rounded-lg py-32 text-[#111]'>
      <div className='flex justify-center flex-col'>
        <h1 className='text-9xl font-semibold text-center uppercase'>Get in touch</h1>
        <p className='text-center pt-8 max-w-[650px] mx-auto text-xl'>Looking for a skilled frontend developer? Let's talk! I{"'"}m currently available for gigs and frontend roles. Whether it{"'"}s building clean, responsive UIs or adding interactive animations, I{"'"}m here to help bring your vision to life. Reach out, and let's create something exceptional together!</p>
        <div className='flex justify-center'>
          <button className='bg-[#111] text-[#e2e2e2] px-8 py-4 mt-12 rounded-full'>Send me a message</button>
        </div>
      </div>
    </div>
  )
}

export default Cta