import React from 'react'

const Cta = () => {
  return (
    <div className='my-32 font-generalSans mx-8 rounded-lg py-32 text-[#111]'>
      <div className='flex justify-center flex-col'>
        <h1 className='text-9xl font-semibold text-center uppercase'>Let's talk</h1>
        <p className='text-center pt-8 max-w-[600px] mx-auto text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium quas, itaque cupiditate laudantium illum fuga dolorem tenetur fugit earum distinctio odio, debitis voluptas aliquid reiciendis facilis, dolorum officiis saepe!</p>
        <div className='flex justify-center'>
          <button className='bg-[#111] text-[#e2e2e2] px-8 py-4 mt-12 rounded-full'>Send me a message</button>
        </div>
      </div>
    </div>
  )
}

export default Cta