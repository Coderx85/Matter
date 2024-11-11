"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

import { ModeToggle } from './theme-btn';
// import LoadingBar from 'react-top-loading-bar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';
import { FaBlog, FaDesktop, FaHome, FaNewspaper, FaPhone } from 'react-icons/fa';
import Logo from './Logo'

const navLinks = [
    {
        title: 'Home',
        path: '/',
        icon: <FaHome />
    },
    {
        title: 'Feed',
        path: '/feed',
        icon: <FaNewspaper />
    },
    {
        title: 'About',
        path: '/about-me',
        icon: <FaDesktop />
    },
    {
        title: 'Blog',
        path: '/blog',
        icon: <FaBlog />
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaPhone />
    }
]

const Navbar = () => {

    // const [progress, setProgress] = useState(0)
    const pathname = usePathname()

    // useEffect(() => {
    //   setProgress(20)

    //   setTimeout(() => {
    //     setProgress(40)
    //   }, 100);

    //   setTimeout(() => {
    //     setProgress(100)
    //   }, 400);
     
    // }, [pathname])

    // useEffect(() => {
    //   setTimeout(() => {
    //    setProgress(0)
    //   }, 50);
    // }, [])
    
    return (
        <nav className="py-8 xl:12 text-white">
            <div className="container mx-auto flex justify-between items-center border-b-4 duration-100 transition-transform pb-2 border-primary">
                <Logo />
                <div className="hidden md:flex text-white gap-8 items-center capitalize">
                    
                <SignedOut>
                    <Button className="mx-1" variant="outline">
                        <SignInButton />
                    </Button>
                </SignedOut>

                <SignedIn>
                    {navLinks.map((link, index) => (
                        <Link 
                            href={link.path} 
                            key={index}
                            className={`${link.path === pathname && 'text-primary font-bold'} hover:text-primary flex justify-center text-center gap-2 hover:font-bold sm:text-xl transition-all`}
                        >   
                            {link.icon}{link.title}
                        </Link>
                    ))}
                    <UserButton />
                </SignedIn>
                
                    
                    {/* 
                    <div className='flex items-center'>
                        <Button className="mx-1" variant="outline">Login</Button>
                        <Button className="mx-1" variant="outline">Signup</Button>
                        <ModeToggle />
                    </div> 
                    */}
                </div>
{/* 
                <div className="md:hidden">
                        <span className="mx-2"> 
                            <ModeToggle />
                        </span>
                    <Sheet>
                        <SheetTrigger>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4">HarryBlog</SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-6">
                                        <Link href="/"> Home
                                        </Link>
                                        <Link href="/about">
                                            About
                                        </Link>
                                        <Link href="/blog">
                                            Blog
                                        </Link>
                                        <Link href="/contact">
                                            Contact
                                        </Link>
                                        <div>
                                            <Button className="mx-1 text-xs" variant="outline">Login</Button>
                                            <Button className="mx-1 text-xs" variant="outline">Signup</Button>

                                        </div>

                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>
 */}

            </div>

            {/* <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
            </nav> */}
        </nav>
    );
};

export default Navbar