import React from 'react'
import Image from 'next/image'
import Logo from './Logo'
import { socialLinks } from '@/data/about'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=' justify-end content-center bg-primary-foreground'>
        {/* <div className='w-3/12 text-center mx-auto'> */}
            <Logo />
            <Image alt='Project Logo' src='/images/cpp.png' width={100} height={100} />
            <ul className='flex flex-col gap-10'>
                {contactInfo.map((info, index) => {
                    return <li key={index} className='flex items-center gap-6'>
                        <div className='w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] bg-primary-foreground text-accent rounded-md flex items-center justify-center'>
                        <Link href={info.description} className='text-[28px] text-primary'>{info.icon}</Link>
                        </div>
                    </li>
                })}
            </ul>
        {/* </div> */}
        {/* <div className='w-9/12 content-center '>

        </div> */}
    </div>
  )
}

export default Footer