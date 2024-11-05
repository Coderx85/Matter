import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className='mx-auto container'>
      <div className='bg-zinc-900 flex flex-row'>
        <div className='p-4'>
            <Image src='/about.png' alt='About Us' width={500} height={500} />
        </div>
        <div className='m-auto container'>
          <h1 className='text-3xl font-bold'>About Us</h1>
          <ul className=' list-disc px-auto'>
            <li>Name : Priyanshu</li>
            <li>Role : Developer</li>
            <li>Location : India</li>
            <li>Skills : React, Next.js, Node.js, Express, MongoDB, MySQL and more</li>
            <li>Experience : 1+ Years</li>
            <li>Education : B.Tech</li>

          </ul>
        </div>
      </div>

    </div>
  )
}

export default AboutPage