import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className='mx-auto container'>
      <div className='bg-zinc-900 flex flex-row'>
        <div className='p-4'>
            <Image src='/about.png' alt='About Us' width={500} height={500} />
        </div>
        <div className='mx-auto container'>
          <h1 className='text-3xl font-bold'>About Us</h1>
          <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>

    </div>
  )
}

export default AboutPage