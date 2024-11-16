import React from 'react'
import Image from 'next/image'
import Logo from './Logo'
import { socialLinks } from '@/data/about'
import Link from 'next/link'
import { contactInfo } from '@/data/about'  

const Footer = () => {
  return (
    <div className='justify-items-center z-10 text-center object-center bg-primary-foreground'>
        <Link href={"/"} className="flex group items-center gap-1">
            <p className="text-[26px] text-white font-extrabold max-sm:hidden capitalize group-hover:text-primary">
                Matters<span className='text-primary group-hover:text-white'>.</span>
            </p>
        </Link>
        <p>
            <Link className='hover:text-primary' href='/about-me'>About Me</Link> | <Link className='hover:text-primary' href='/contact'>Contact Us</Link>
        </p>
        <p className='text-white text-sm mt-4'>© 2021 Matters. All rights reserved.</p>
        <p className='text-white text-sm '>Made with ❤️ by Matters Team</p>
        
        <div className='flex gap-6'>
        {socialLinks.map((link, index) => (
            <Link 
                key={index} 
                className='flex items-center z-1 gap-2 rounded-full justify-center w-12 h-12 border-accent text-base border-2
                    hover:bg-primary-foreground hover:text-primary group hover:transition-all duration-75'
                href={link.href}
            >
            <span className='text-2xl group-hover:scale-150'>
                {link.icon}
            </span>
            </Link>
        ))}
    </div>
    </div>
  )
}

export default Footer